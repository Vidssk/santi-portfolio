'use client';

import { useRef } from 'react';
import '@styles/Button.css';

const RESUME_LINK =
  'https://drive.google.com/file/d/1sz_THzgJ_shzkmEmDPUPFjptuiXWNsAE/view?usp=sharing';

function MyButton() {
  const openingRef = useRef(false);

  const handleClick = (event) => {
    // Let the browser handle modified clicks normally (cmd/ctrl/shift-click).
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (openingRef.current) return;
    openingRef.current = true;

    window.open(RESUME_LINK, '_blank', 'noopener,noreferrer');

    window.setTimeout(() => {
      openingRef.current = false;
    }, 1500);
  };

  return (
    <a
      href={RESUME_LINK}
      className="my-button"
      onClick={handleClick}
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  );
}

export default MyButton;
