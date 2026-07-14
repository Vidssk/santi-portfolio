'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createStarTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.65)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createStarLayer(
  count: number,
  radiusMin: number,
  radiusMax: number,
  size: number,
  opacity: number,
  texture: THREE.CanvasTexture
): THREE.Points {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const radius =
      radiusMin + Math.random() * (radiusMax - radiusMin);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size,
    map: texture,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  return new THREE.Points(geometry, material);
}

function waitForSize(
  element: HTMLElement,
  signal: { cancelled: boolean }
): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const read = () => ({
      width: element.clientWidth,
      height: element.clientHeight,
    });

    const initial = read();
    if (initial.width > 0 && initial.height > 0) {
      resolve(initial);
      return;
    }

    const finish = (width: number, height: number) => {
      if (signal.cancelled) return;
      cleanup();
      resolve({ width, height });
    };

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = entry?.contentRect.width ?? element.clientWidth;
      const height = entry?.contentRect.height ?? element.clientHeight;
      if (width > 0 && height > 0) {
        finish(width, height);
      }
    });

    let rafId = 0;
    const poll = () => {
      if (signal.cancelled) return;
      const { width, height } = read();
      if (width > 0 && height > 0) {
        finish(width, height);
        return;
      }
      rafId = window.requestAnimationFrame(poll);
    };

    const cleanup = () => {
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
    };

    observer.observe(element);
    rafId = window.requestAnimationFrame(poll);
  });
}

export default function StarfieldScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const signal = { cancelled: false };
    let animationFrameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    let starTexture: THREE.CanvasTexture | null = null;
    let farStars: THREE.Points | null = null;
    let nearStars: THREE.Points | null = null;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    waitForSize(container, signal).then(({ width, height }) => {
      if (signal.cancelled || !containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
      camera.position.z = 1;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      starTexture = createStarTexture();
      farStars = createStarLayer(2800, 350, 900, 1.2, 0.55, starTexture);
      nearStars = createStarLayer(650, 120, 320, 2.4, 0.9, starTexture);

      scene.add(farStars);
      scene.add(nearStars);

      const clock = new THREE.Clock();

      const resize = () => {
        if (!renderer) return;
        const nextWidth = container.clientWidth;
        const nextHeight = container.clientHeight;
        if (nextWidth === 0 || nextHeight === 0) return;

        camera.aspect = nextWidth / nextHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(nextWidth, nextHeight);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      const animate = () => {
        if (signal.cancelled || !renderer || !farStars || !nearStars) return;
        animationFrameId = window.requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          farStars.rotation.y = elapsed * 0.012;
          nearStars.rotation.y = elapsed * 0.02;

          const farMaterial = farStars.material as THREE.PointsMaterial;
          const nearMaterial = nearStars.material as THREE.PointsMaterial;
          farMaterial.opacity = 0.5 + Math.sin(elapsed * 0.6) * 0.05;
          nearMaterial.opacity = 0.85 + Math.sin(elapsed * 0.9 + 1.2) * 0.08;
        }

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      signal.cancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();

      if (renderer?.domElement?.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      farStars?.geometry.dispose();
      nearStars?.geometry.dispose();
      (farStars?.material as THREE.PointsMaterial | undefined)?.dispose();
      (nearStars?.material as THREE.PointsMaterial | undefined)?.dispose();
      starTexture?.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    />
  );
}
