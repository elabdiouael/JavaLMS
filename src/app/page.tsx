"use client";
import { useState } from 'react';
import SlidePresenter from '../components/SlidePresenter';
import Navbar from '../components/Navbar';
import Background from '../components/Background';

// Imports dyal ga3 les parties
import { slidesData as part1Data } from '../data/slidesOOP_Part1';       
import { slidesData as part2Data } from '../data/slidesOOP_Part2';  
import { slidesData as part3Data } from '../data/slidesOOP_Part3'; 
import { slidesData as part4Data } from '../data/slidesOOP_Part4'; 
import { slidesData as part5Data } from '../data/slidesOOP_PartExercice'; 

export default function Home() {
  const [activePart, setActivePart] = useState(1);

  const getCurrentSlides = () => {
    switch (activePart) {
      case 1: return part1Data;
      case 2: return part2Data;
      case 3: return part3Data;
      case 4: return part4Data;
      case 5: return part5Data;
      default: return part1Data; 
    }
  };

  const currentSlides = getCurrentSlides();

  return (
    <Background>
      <Navbar activePart={activePart} onSelect={setActivePart} />
      <SlidePresenter slides={currentSlides || []} />
    </Background>
  );
}