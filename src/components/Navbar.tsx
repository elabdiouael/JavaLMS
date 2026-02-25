"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  activePart: number;
  onSelect: (part: number) => void;
}

export default function Navbar({ activePart, onSelect }: Props) {
  const parts = [
    { id: 1, label: "Part 1: Classes & Constructors" },
    { id: 2, label: "Part 2: Static & References" },
    { id: 3, label: "Part 3: Encapsulation" },
    { id: 4, label: "Part 4: Inheritance" },
    { id: 5, label: "Part 5: TP & Exercices" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 50, display: 'flex', gap: '15px', padding: '12px 20px',
        background: 'rgba(15, 23, 42, 0.3)', backdropFilter: 'blur(10px)',
        borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)',
        flexWrap: 'wrap', justifyContent: 'center'
      }}
    >
      {parts.map((part) => {
        const isActive = activePart === part.id;
        return (
          <motion.button
            key={part.id}
            onClick={() => onSelect(part.id)}
            
            /* L'Animation d'Hover Mejnouna: Chkel kaytbeddel 100% */
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
              background: "linear-gradient(90deg, rgba(37, 99, 235, 0.9), rgba(139, 92, 246, 0.9))",
              color: "#ffffff",
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              border: "none",
              boxShadow: "0 10px 20px rgba(37, 99, 235, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            
            style={{
              padding: '10px 20px', 
              cursor: 'pointer',
              /* L'7ala l'3adiya: Minimalist */
              clipPath: isActive 
                  ? "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" 
                  : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
              color: isActive ? '#60a5fa' : '#94a3b8',
              border: isActive ? '1px solid rgba(96, 165, 250, 0.5)' : '1px solid transparent',
              borderRadius: isActive ? '0px' : '8px', /* borderRadius m3a clipPath kay3ti style wa3er */
              fontSize: '0.9rem', 
              fontWeight: isActive ? 'bold' : 'normal',
              outline: 'none', 
              transition: 'all 0.2s ease-in-out' /* Smoothness dyal l'rjou3 */
            }}
          >
            {part.label}
          </motion.button>
        );
      })}
    </motion.nav>
  );
}