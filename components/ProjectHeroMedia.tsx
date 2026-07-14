'use client';

import { useEffect, useRef, useState } from 'react';

type ProjectHeroMediaProps = {
  title: string;
  image: string;
  video?: string;
  objectFit?: 'cover' | 'contain';
  backgroundColor?: string;
};

const HAVE_CURRENT_DATA = 2;
/** Restart stalled media if the buffer does not advance. */
const STALL_MS = 10000;
/** One-shot page reload only after this long with no playable video. */
const HARD_REFRESH_MS = 20000;

function reloadGuardKey(src: string) {
  return `video-reload:${src}`;
}

function hasPlayableData(el: HTMLVideoElement) {
  return el.readyState >= HAVE_CURRENT_DATA;
}

export default function ProjectHeroMedia({
  title,
  image,
  video,
  objectFit = 'contain',
  backgroundColor,
}: ProjectHeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);

    const el = videoRef.current;
    if (!el || !video) return undefined;

    let cancelled = false;
    let stallTimer: number | null = null;
    let hardRefreshTimer: number | null = null;
    let lastBufferedEnd = 0;
    let didInPlaceRestart = false;

    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;

    const clearStallTimer = () => {
      if (stallTimer !== null) {
        window.clearTimeout(stallTimer);
        stallTimer = null;
      }
    };

    const clearHardRefreshTimer = () => {
      if (hardRefreshTimer !== null) {
        window.clearTimeout(hardRefreshTimer);
        hardRefreshTimer = null;
      }
    };

    const clearAllTimers = () => {
      clearStallTimer();
      clearHardRefreshTimer();
    };

    const clearReloadGuard = () => {
      try {
        sessionStorage.removeItem(reloadGuardKey(video));
      } catch {
        // ignore
      }
    };

    const bufferedEnd = () => {
      try {
        return el.buffered.length > 0 ? el.buffered.end(el.buffered.length - 1) : 0;
      } catch {
        return 0;
      }
    };

    const tryPlay = () => {
      if (cancelled) return;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (!cancelled) setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay may be blocked until more data arrives.
          });
      }
    };

    const markSuccess = () => {
      if (cancelled) return;
      setIsPlaying(true);
      clearAllTimers();
      clearReloadGuard();
    };

    const onReady = () => {
      if (cancelled) return;
      if (hasPlayableData(el)) {
        tryPlay();
      }
    };

    const onPlaying = () => {
      markSuccess();
    };

    const onProgress = () => {
      if (cancelled) return;
      lastBufferedEnd = bufferedEnd();
      if (hasPlayableData(el)) {
        tryPlay();
      }
    };

    const triggerHardRefresh = () => {
      try {
        const key = reloadGuardKey(video);
        if (sessionStorage.getItem(key) === '1') return;
        sessionStorage.setItem(key, '1');
      } catch {
        return;
      }
      window.location.reload();
    };

    const onError = () => {
      if (cancelled) return;
      triggerHardRefresh();
    };

    const armStallCheck = () => {
      clearStallTimer();
      lastBufferedEnd = bufferedEnd();

      stallTimer = window.setTimeout(() => {
        if (cancelled) return;

        if (hasPlayableData(el) && !el.paused) {
          markSuccess();
          return;
        }

        const currentBuffered = bufferedEnd();
        const madeProgress = currentBuffered > lastBufferedEnd + 0.05;

        if (madeProgress) {
          // Healthy download — check again later; do not abort via load().
          armStallCheck();
          tryPlay();
          return;
        }

        if (!didInPlaceRestart) {
          didInPlaceRestart = true;
          el.load();
          tryPlay();
          armStallCheck();
          return;
        }

        // Already restarted once and still no progress — hard refresh handles it.
      }, STALL_MS);
    };

    el.addEventListener('loadeddata', onReady);
    el.addEventListener('canplay', onReady);
    el.addEventListener('canplaythrough', onReady);
    el.addEventListener('playing', onPlaying);
    el.addEventListener('progress', onProgress);
    el.addEventListener('error', onError);

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    tryPlay();
    armStallCheck();

    // Hard refresh is scheduled once from mount — never reset by stall re-arms.
    hardRefreshTimer = window.setTimeout(() => {
      if (cancelled) return;
      if (hasPlayableData(el) && !el.paused) {
        clearReloadGuard();
        return;
      }
      // Still buffering a large file with actual progress — skip reload.
      if (bufferedEnd() > 0 || hasPlayableData(el)) {
        tryPlay();
        return;
      }
      triggerHardRefresh();
    }, HARD_REFRESH_MS);

    return () => {
      cancelled = true;
      clearAllTimers();
      el.removeEventListener('loadeddata', onReady);
      el.removeEventListener('canplay', onReady);
      el.removeEventListener('canplaythrough', onReady);
      el.removeEventListener('playing', onPlaying);
      el.removeEventListener('progress', onProgress);
      el.removeEventListener('error', onError);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [video]);

  return (
    <div
      className="project-detail__hero-media"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {video ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="project-detail__hero-img project-detail__hero-poster"
            style={{
              objectFit,
              opacity: isPlaying ? 0 : 1,
              pointerEvents: 'none',
            }}
          />
          <video
            key={video}
            ref={videoRef}
            src={video}
            className="project-detail__hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ objectFit }}
          />
        </>
      ) : (
        <img
          src={image}
          alt={title}
          className="project-detail__hero-img"
          style={{ objectFit }}
        />
      )}
    </div>
  );
}
