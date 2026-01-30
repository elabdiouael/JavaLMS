// src/components/SlidePresenter.tsx
"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/CyberTheme.module.css';
import { SlideContent } from '../types';

interface Props {
  slides: SlideContent[];
}

export default function SlidePresenter({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const currentSlide = slides[currentIndex];
  const progress = ((currentIndex + 1) / slides.length) * 100;

  // Navigation Logic
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setAnimating(false);
      }, 300); // Wait for animation
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      {/* Background Elements */}
      <div className={styles.backgroundGrid}></div>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>

      {/* Main Slide Card */}
      <div 
        className={styles.card}
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)'
        }}
      >
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.badge}>JAVA MASTERCLASS</span>
            <h1 className={styles.title}>{currentSlide.title}</h1>
          </div>
          <div style={{textAlign: 'right'}}>
            <div style={{fontSize: '3rem', opacity: 0.2, fontWeight: 'bold'}}>
              {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
            </div>
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className={`${styles.contentGrid} ${currentSlide.layout === 'text-only' ? styles.fullWidth : ''}`}>
          
          {/* Left Column (Text) */}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {currentSlide.subtitle && <h3 style={{color: '#60a5fa', marginBottom: '1rem'}}>{currentSlide.subtitle}</h3>}
            <div style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1'}}>
              {currentSlide.content}
            </div>
          </div>

          {/* Right Column (Visuals or Code) */}
          {(currentSlide.codeSnippet || currentSlide.visual) && (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              
              {/* If it's code, show Code Window */}
              {currentSlide.codeSnippet ? (
                <div className={styles.codeWindow}>
                  <div className={styles.windowControls}>
                    <div className={`${styles.dot} ${styles.red}`}></div>
                    <div className={`${styles.dot} ${styles.yellow}`}></div>
                    <div className={`${styles.dot} ${styles.green}`}></div>
                  </div>
                  <pre className={styles.pre}>
                    <code>{currentSlide.codeSnippet}</code>
                  </pre>
                </div>
              ) : (
                // Else show visual component
                currentSlide.visual
              )}
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarFill} style={{width: `${progress}%`}}></div>
        </div>
      </div>

      {/* Controls Overlay (Bottom Right) */}
      <div style={{position: 'absolute', bottom: '30px', right: '40px', display: 'flex', gap: '10px', zIndex: 20}}>
         <button onClick={prevSlide} style={{padding: '10px 20px', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px'}}>←</button>
         <button onClick={nextSlide} style={{padding: '10px 20px', background: '#3b82f6', color: 'white', borderRadius: '8px'}}>→</button>
      </div>
    </div>
  );
}