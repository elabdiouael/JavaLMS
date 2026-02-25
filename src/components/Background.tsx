"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cyberpunk" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Scanlines Effect */}
      <div className="scanlines"></div>

      {/* Grid Pattern 3D */}
      <div style={{
        position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.02) 2px, transparent 2px)',
        backgroundSize: '60px 60px', zIndex: 0, pointerEvents: 'none',
        transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
        opacity: 0.4
      }}></div>

      {/* Orbs x100 Intensity */}
      <motion.div animate={{ y: [0, -80, 0], scale: [1, 1.3, 1], x: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '0%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }} />
        
      <motion.div animate={{ y: [0, 100, 0], scale: [1, 1.5, 1], x: [0, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '-10%', right: '5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }} />

      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '40%', left: '40%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }} />

      {/* App Content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}