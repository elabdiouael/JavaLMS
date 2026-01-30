"use client";
import { useState } from 'react';
import SlidePresenter from '../components/SlidePresenter';
import Navbar from '../components/Navbar';

// Import All Data Parts
import { slidesData as part1Data } from '../data/slides';       
import { slidesData as part2Data } from '../data/slidesPart2';  
import { slidesData as part3Data } from '../data/slidesPart3'; 
import { slidesData as part4Data } from '../data/slidesPart4'; 

export default function Home() {
  const [activePart, setActivePart] = useState(1);

  // Selector Logic
  const getCurrentSlides = () => {
    switch (activePart) {
      case 1: return part1Data;
      case 2: return part2Data;
      case 3: return part3Data;
      case 4: return part4Data;
      default: return part1Data;
    }
  };

  const currentSlides = getCurrentSlides();

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#020617' }}>
      
      {/* Navigation Bar */}
      <Navbar activePart={activePart} onSelect={setActivePart} />

      {/* Slide Presenter */}
      {/* Key forces React to re-mount component when changing parts (resets slide index to 0) */}
      <SlidePresenter 
        key={activePart} 
        slides={currentSlides || []} 
      />

    </main>
  );
}