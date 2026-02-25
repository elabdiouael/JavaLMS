"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideContent } from '../types';

interface Props {
  slides: SlideContent[];
}

export default function SlidePresenter({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slides]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
    }
  };

  if (!slides || slides.length === 0) return <div style={{ color: 'white', textAlign: 'center', marginTop: '20vh' }}>Loading...</div>;

  const currentSlide = slides[currentIndex];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px 40px' }}>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id + "-" + currentIndex}
          initial={{ opacity: 0, rotateX: 15, y: 80, scale: 0.9, z: -200 }}
          animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, z: 0 }}
          exit={{ opacity: 0, rotateX: -15, y: -80, scale: 0.9, z: -200 }}
          
          whileHover={{ 
              scale: 1.01, 
              backgroundColor: 'rgba(11, 15, 25, 0.95)', 
              borderColor: 'rgba(96, 165, 250, 0.4)',
              boxShadow: '0 40px 80px -10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(59, 130, 246, 0.1)' 
          }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          
          style={{
            width: '100%', maxWidth: '1200px', 
            height: '85vh', /* FIXED HEIGHT BACH MAYHREBCH L'FOOTER */
            background: 'rgba(15, 23, 42, 0.65)', 
            backdropFilter: 'blur(30px)',
            borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            padding: '30px 40px', display: 'flex', flexDirection: 'column',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* HEADER (Dima lfou9) */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '15px', marginBottom: '20px', flexShrink: 0 }}>
            <h1 style={{ fontSize: '2.4rem', color: '#f8fafc', margin: 0, letterSpacing: '-1px' }}>{currentSlide.title}</h1>
            {currentSlide.subtitle && <h3 style={{ fontSize: '1.2rem', color: '#60a5fa', margin: '5px 0 0 0', fontWeight: '500' }}>{currentSlide.subtitle}</h3>}
          </motion.div>

          {/* CONTENT (SCROLLABLE) - Hada howa l'fix l'kbir! */}
          <div style={{ 
              flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden', /* Scroll 3amoudi */
              display: 'flex', flexDirection: currentSlide.layout === 'split' ? 'row' : 'column', gap: '40px',
              paddingRight: '10px' /* Blassa l'scrollbar */
          }}>
              
              {/* L'hderaa */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ flex: 1, color: '#e2e8f0', fontSize: '1.15rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {currentSlide.content}
              </motion.div>

              {/* Code awla Visualizer */}
              {(currentSlide.codeSnippet || currentSlide.visual) && (
                  <motion.div 
                    initial={{ x: 50, opacity: 0, rotateY: 10 }} animate={{ x: 0, opacity: 1, rotateY: 0 }} transition={{ delay: 0.4, type: "spring" }}
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px' }}
                  >
                      {currentSlide.codeSnippet ? (
                          <div style={{ width: '100%', background: '#0d1117', borderRadius: '12px', border: '1px solid #30363d', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', overflow: 'hidden' }}>
                              <div style={{ padding: '12px 15px', background: '#161b22', borderBottom: '1px solid #30363d', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                                  <div style={{ color: '#8b949e', fontSize: '0.8rem', marginLeft: '10px', fontFamily: 'monospace' }}>Code.java</div>
                              </div>
                              <div style={{ padding: '20px', overflowY: 'auto' }}>
                                <pre style={{ margin: 0, color: '#c9d1d9', fontSize: '0.95rem', fontFamily: 'monospace', lineHeight: '1.6' }}>
                                    {currentSlide.codeSnippet}
                                </pre>
                              </div>
                          </div>
                      ) : (
                          <div style={{ width: '100%' }}>{currentSlide.visual}</div>
                      )}
                  </motion.div>
              )}
          </div>

          {/* FOOTER (Dima lta7t) */}
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <motion.button 
              whileHover={currentIndex > 0 ? { scale: 1.05, x: -5 } : {}} whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
              onClick={() => goToSlide(currentIndex - 1)} disabled={currentIndex === 0}
              style={{ padding: '12px 30px', borderRadius: '12px', background: currentIndex === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(59, 130, 246, 0.15)', color: currentIndex === 0 ? '#475569' : '#60a5fa', border: currentIndex === 0 ? '1px solid transparent' : '1px solid rgba(59, 130, 246, 0.4)', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
            >
              &#8592; Lor
            </motion.button>
            
            <div style={{ color: '#94a3b8', fontWeight: 'bold', fontSize: '1.1rem', background: 'rgba(0,0,0,0.3)', padding: '8px 20px', borderRadius: '20px' }}>
                Slide {currentIndex + 1} / {slides.length}
            </div>

            <motion.button 
              whileHover={currentIndex < slides.length - 1 ? { scale: 1.05, x: 5, boxShadow: '0 0 20px rgba(59,130,246,0.5)' } : {}} whileTap={currentIndex < slides.length - 1 ? { scale: 0.95 } : {}}
              onClick={() => goToSlide(currentIndex + 1)} disabled={currentIndex === slides.length - 1}
              style={{ padding: '12px 30px', borderRadius: '12px', background: currentIndex === slides.length - 1 ? 'rgba(255,255,255,0.05)' : 'linear-gradient(90deg, #2563eb, #3b82f6)', color: currentIndex === slides.length - 1 ? '#475569' : '#fff', border: 'none', cursor: currentIndex === slides.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
            >
              Zid l'Goudam &#8594;
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}