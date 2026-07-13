'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { bebas } from '@utils/fonts';
import MyButton from './MyButton';

const StarfieldScene = dynamic(
  () => import('@app/portfolio3d/StarfieldScene'),
  { ssr: false }
);

const HeroContainer = () => {
  return (
    <section className="hero-container">
      <div className="hero-background" aria-hidden="true">
        <StarfieldScene />
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
