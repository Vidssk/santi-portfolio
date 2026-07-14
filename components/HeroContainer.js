'use client';

import React, { useEffect, useState } from 'react';
import { bebas } from '@utils/fonts';
import MyButton from './MyButton';
import StarfieldScene from '@components/portfolio3d/StarfieldScene';

const HeroContainer = () => {
  // Defer WebGL until after hydration so Three.js never runs during SSR.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-background" aria-hidden="true">
        {mounted ? <StarfieldScene /> : null}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">Software Engineer</p>
        <h1 className={`hero-title ${bebas.className}`}>RELENTLESS</h1>
        <p className="hero-subtitle">
          Converting complexity into simplicity through software engineering.
        </p>
        <div className="hero-cta">
          <MyButton />
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
