"use client";
import React from 'react';

interface Props {
  activePart: number;
  onSelect: (part: number) => void;
}

export default function Navbar({ activePart, onSelect }: Props) {
  const parts = [
    { id: 1, label: "Part 1: Arrays" },
    { id: 2, label: "Part 2: Methods" },
    { id: 3, label: "Part 3: Strings" },
    { id: 4, label: "Part 4: Project" },
  ];

  return (
    <nav style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      display: 'flex',
      gap: '10px',
      padding: '8px',
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(12px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      {parts.map((part) => (
        <button
          key={part.id}
          onClick={() => onSelect(part.id)}
          style={{
            padding: '8px 16px',
            borderRadius: '10px',
            background: activePart === part.id ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
            color: activePart === part.id ? '#60a5fa' : '#94a3b8',
            border: activePart === part.id ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid transparent',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: activePart === part.id ? 'bold' : 'normal',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap'
          }}
        >
          {part.label}
        </button>
      ))}
    </nav>
  );
}