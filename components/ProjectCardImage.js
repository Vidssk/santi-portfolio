'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ProjectCardImage({ src, alt, className }) {
  const pathname = usePathname();
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const resolved = new URL(src, window.location.href).href;
    const media = img.parentElement;
    const mediaRect = media?.getBoundingClientRect();
    const cs = window.getComputedStyle(img);
    const card = img.closest('.project-card');
    const cardCs = card ? window.getComputedStyle(card) : null;

    // #region agent log
    fetch('http://127.0.0.1:7864/ingest/867c6fc7-aea1-4aa7-be0e-0d47f4709465', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'cef3c1',
      },
      body: JSON.stringify({
        sessionId: 'cef3c1',
        runId: 'post-fix',
        hypothesisId: 'A',
        location: 'ProjectCardImage.js:mount',
        message: 'Card image mount path resolution',
        data: {
          pathname,
          href: window.location.href,
          rawSrc: src,
          resolvedSrc: resolved,
          isAbsolutePath: src.startsWith('/'),
          looksWrong: resolved.includes('/projects/pictures/'),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    // #region agent log
    fetch('http://127.0.0.1:7864/ingest/867c6fc7-aea1-4aa7-be0e-0d47f4709465', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'cef3c1',
      },
      body: JSON.stringify({
        sessionId: 'cef3c1',
        runId: 'post-fix',
        hypothesisId: 'B,C,E',
        location: 'ProjectCardImage.js:layout',
        message: 'Card image layout and visibility',
        data: {
          pathname,
          rawSrc: src,
          complete: img.complete,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          imgOpacity: cs.opacity,
          imgFilter: cs.filter,
          imgDisplay: cs.display,
          imgVisibility: cs.visibility,
          imgW: img.getBoundingClientRect().width,
          imgH: img.getBoundingClientRect().height,
          mediaW: mediaRect?.width ?? null,
          mediaH: mediaRect?.height ?? null,
          cardOpacity: cardCs?.opacity ?? null,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [pathname, src]);

  const onLoad = (e) => {
    const img = e.currentTarget;
    // #region agent log
    fetch('http://127.0.0.1:7864/ingest/867c6fc7-aea1-4aa7-be0e-0d47f4709465', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'cef3c1',
      },
      body: JSON.stringify({
        sessionId: 'cef3c1',
        runId: 'post-fix',
        hypothesisId: 'D',
        location: 'ProjectCardImage.js:onLoad',
        message: 'Card image loaded',
        data: {
          pathname: window.location.pathname,
          rawSrc: src,
          currentSrc: img.currentSrc,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  };

  const onError = (e) => {
    const img = e.currentTarget;
    // #region agent log
    fetch('http://127.0.0.1:7864/ingest/867c6fc7-aea1-4aa7-be0e-0d47f4709465', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'cef3c1',
      },
      body: JSON.stringify({
        sessionId: 'cef3c1',
        runId: 'post-fix',
        hypothesisId: 'A,D',
        location: 'ProjectCardImage.js:onError',
        message: 'Card image FAILED to load',
        data: {
          pathname: window.location.pathname,
          href: window.location.href,
          rawSrc: src,
          currentSrc: img.currentSrc,
          resolvedSrc: new URL(src, window.location.href).href,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      onLoad={onLoad}
      onError={onError}
    />
  );
}
