"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: VOID VS RETURN VISUALIZER ---
const MethodVisualizer = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
      {/* VOID CARD */}
      <div style={{ 
        background: 'rgba(239, 68, 68, 0.1)', 
        border: '1px solid #ef4444', 
        borderRadius: '16px', 
        padding: '25px', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧹</div>
        <h3 style={{ color: '#ef4444', marginBottom: '10px' }}>VOID</h3>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', fontStyle: 'italic' }}>"Sir siyye9 l'ard"</p>
        <div style={{ marginTop: '20px', padding: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
            <span style={{ color: '#aaa', fontSize: '0.8rem' }}>RETURN:</span><br/>
            <strong>WALOU (Nothing)</strong>
        </div>
      </div>

      {/* RETURN CARD */}
      <div style={{ 
        background: 'rgba(34, 197, 94, 0.1)', 
        border: '1px solid #22c55e', 
        borderRadius: '16px', 
        padding: '25px', 
        textAlign: 'center' 
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛒</div>
        <h3 style={{ color: '#22c55e', marginBottom: '10px' }}>RETURN</h3>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', fontStyle: 'italic' }}>"Jib lkhobz w sref"</p>
        <div style={{ marginTop: '20px', padding: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
            <span style={{ color: '#aaa', fontSize: '0.8rem' }}>RETURN:</span><br/>
            <strong>DATA (int, String...)</strong>
        </div>
      </div>
    </div>
  );
};

// --- 2. COMPONENT: STACK FRAME ANIMATION ---
const StackFrameDemo = () => {
  const [step, setStep] = useState(0);

  // Steps: 0=Start, 1=Call, 2=Return
  const nextStep = () => setStep(prev => (prev + 1) % 3);

  return (
    <div style={{ width: '100%', height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* THE STACK CONTAINER */}
      <div style={{ 
        width: '320px', 
        height: '220px',
        borderLeft: '4px solid #475569',
        borderRight: '4px solid #475569',
        borderBottom: '4px solid #475569',
        borderRadius: '0 0 12px 12px',
        display: 'flex', 
        flexDirection: 'column-reverse', 
        justifyContent: 'flex-start',
        padding: '10px',
        gap: '10px',
        background: 'rgba(0,0,0,0.2)',
        position: 'relative'
      }}>
        
        {/* FRAME 1: MAIN */}
        <div style={{ 
          height: '60px', 
          width: '100%',
          background: '#f59e0b', 
          borderRadius: '6px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0 15px',
          color: '#000',
          fontWeight: 'bold',
          boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
        }}>
          <span>main()</span>
          <span style={{fontSize: '0.7rem', opacity: 0.7}}>Line 10</span>
        </div>

        {/* FRAME 2: METHOD (ANIMATED) */}
        <div style={{ 
          height: '60px', 
          width: '100%',
          background: '#3b82f6', 
          borderRadius: '6px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0 15px',
          color: '#fff',
          fontWeight: 'bold',
          opacity: step === 1 ? 1 : 0,
          transform: step === 1 ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'
        }}>
          <span>calculateSum()</span>
          <span style={{fontSize: '0.7rem', opacity: 0.8}}>a=5, b=3</span>
        </div>

        {/* POOF EFFECT */}
        {step === 2 && (
            <div style={{
                position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
                fontSize: '2rem', animation: 'fadeOut 0.8s forwards', pointerEvents: 'none'
            }}>
                💨 POOF!
            </div>
        )}
      </div>

      {/* CONTROLS */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ minHeight: '40px', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>
            {step === 0 && "1. Programme bda f main()."}
            {step === 1 && "2. 3iyyetna l method -> Stack Frame tzad."}
            {step === 2 && "3. Salina (Return) -> Frame tferge3."}
        </p>
        <button 
          onClick={nextStep}
          style={{ padding: '10px 25px', background: '#fff', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 5px 15px rgba(255,255,255,0.2)' }}
        >
          {step === 2 ? "Replay 🔄" : "Next Step ➡️"}
        </button>
      </div>
    </div>
  );
};

// --- 3. COMPONENT: PASS BY VALUE SIMULATION ---
const PassByValueDemo = () => {
    const [original, setOriginal] = useState(10);
    const [copy, setCopy] = useState(10);
    const [isModified, setIsModified] = useState(false);

    const modifyCopy = () => {
        setCopy(99);
        setIsModified(true);
    };

    const reset = () => {
        setCopy(10);
        setIsModified(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                {/* ORIGINAL */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '5px' }}>Main (Original)</div>
                    <div style={{ width: '80px', height: '80px', border: '2px solid #fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {original}
                    </div>
                </div>

                <div style={{ fontSize: '2rem', color: '#555' }}>➡️</div>

                {/* COPY */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: '#3b82f6', marginBottom: '5px' }}>Method (Copy)</div>
                    <div style={{ 
                        width: '80px', height: '80px', 
                        border: '2px dashed #3b82f6', 
                        background: isModified ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                        borderRadius: '12px', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6',
                        transition: 'all 0.3s'
                    }}>
                        {copy}
                    </div>
                </div>
            </div>

            <button 
                onClick={isModified ? reset : modifyCopy}
                style={{ marginTop: '10px', padding: '8px 20px', background: isModified ? '#ef4444' : '#3b82f6', color: 'white', borderRadius: '6px' }}
            >
                {isModified ? "Reset" : "Change Copy to 99"}
            </button>
            
            <p style={{ fontSize: '0.9rem', color: isModified ? '#22c55e' : '#64748b' }}>
                {isModified ? "Choufi! L'original f Main b9a howa howa (10). ✅" : "L'method khdat ghir photocopie."}
            </p>
        </div>
    )
}


// --- DATA CONTENT: PART 2 ---
export const slidesData: SlideContent[] = [
  // SLIDE 1: INTRO (THE PROBLEM)
  {
    id: 1,
    title: "Part 2: Methods",
    subtitle: "Divide and Conquer ⚔️",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
            Hna fin ghadi tne99zi men <strong>"Coder"</strong> l <strong>"Developer"</strong>.
        </p>
        <div style={{padding: '20px', border: '1px solid #334155', borderRadius: '12px', background: 'rgba(255,255,255,0.03)'}}>
            <strong style={{color: '#f87171'}}>🚫 The Copy-Paste Problem</strong>
            <p style={{marginTop: '10px', fontSize: '0.95rem', color: '#cbd5e1'}}>
                "Imagine 3endek code kay7seb <strong>l'impôt (dariba)</strong>. Ila bghiti t7sebha l 5 d nass, wach ghatcopier l code 5 merrat?"
            </p>
        </div>
        <p style={{marginTop: '20px', color: '#ef4444'}}>
            👉 Ila tbddel l9anoun, ghadi tkhassk tbeddli f 5 dyal blayess. <strong>Risque d'erreur kbir.</strong>
        </p>
        <p style={{marginTop: '10px', color: '#22c55e'}}>
            ✅ <strong>Solution:</strong> Method. Katkteb l logic merra we7da, w kat3iyet lih 1000 merra.
        </p>
      </div>
    ),
    codeSnippet: `// BLA METHOD ❌
double tax1 = income1 * 0.2;
double tax2 = income2 * 0.2;
double tax3 = income3 * 0.2;
// ... (Rwina)

// B METHOD ✅
double tax1 = calcTax(income1);
double tax2 = calcTax(income2);
double tax3 = calcTax(income3);`
  },

  // SLIDE 2: ANATOMY
  {
    id: 2,
    title: "Anatomy of a Method",
    subtitle: "Kifach mektouba? 🧬",
    layout: "code-focus",
    content: (
      <div>
        <p>Aji ncher7o had "Squelette" kelma b kelma.</p>
        <ul style={{ marginTop: '20px', lineHeight: '2.2' }}>
            <li><span style={{color: '#f59e0b', fontWeight: 'bold'}}>public static</span>: "Boilerplate". Hfedha hakka daba.</li>
            <li><span style={{color: '#22c55e', fontWeight: 'bold'}}>int</span> (Return Type): Chno ghayrj3 lina had l usine? (Number? Text?).</li>
            <li><span style={{color: '#3b82f6', fontWeight: 'bold'}}>calculateSum</span>: Smiya. Dima bda b <strong>Verb</strong> (Action).</li>
            <li><span style={{color: '#a855f7', fontWeight: 'bold'}}>(int a, int b)</span>: Les ingrédients li khass l usine bach tkhdem.</li>
        </ul>
      </div>
    ),
    codeSnippet: `// The Anatomy 
public static int calculateSum(int a, int b) {
    
    // Body (L'interieur dyal l usine)
    int result = a + b;
    return result;

}`
  },

  // SLIDE 3: VOID VS RETURN
  {
    id: 3,
    title: "Void vs Return",
    subtitle: "L'Employé Analogy 👷‍♀️",
    layout: "center",
    content: (
      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.2rem' }}>
            Kayn 2 anwa3 dyal les méthodes. Khassk tferr9i binathoum mzyan.
        </p>
        <MethodVisualizer />
        <p style={{ textAlign: 'center', marginTop: '30px', color: '#94a3b8' }}>
            Exemple: <code>System.out.println()</code> hiya <strong>VOID</strong>. Katkteb f ecran w katsket.
        </p>
      </div>
    ),
  },

  // SLIDE 4: STACK FRAME MEMORY
  {
    id: 4,
    title: "Memory Deep Dive",
    subtitle: "The Stack Frame 📚",
    layout: "split",
    content: (
      <div>
        <h3 style={{color: '#3b82f6'}}>Kifach Java kayjeri l mémoire?</h3>
        <p style={{marginTop: '15px'}}>
            Melli `main` kat3iyet l method `calculateSum`, chno kayw9e3 l dakhel?
        </p>
        <ol style={{marginTop: '20px', lineHeight: '1.8', marginLeft: '20px', color: '#e2e8f0'}}>
            <li>Java kay7el <strong>Zone jdida</strong> f Stack (smiytha Frame).</li>
            <li>Ayy variable tcreat wst l method kat3ich <strong>GHIR</strong> f hadik l frame.</li>
            <li>Melli l method katsali (`return`), dak l Frame <strong>kaytferge3 (Poof!)</strong>.</li>
        </ol>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b'}}>
            💡 <strong>Scope:</strong> Hada howa sser 3lach variables dyal method ma kaybanouch l method khera.
        </div>
      </div>
    ),
    visual: <StackFrameDemo />
  },

  // SLIDE 5: PASS BY VALUE
  {
    id: 5,
    title: "Parameters: Pass-by-Value",
    subtitle: "Original vs Photocopie 📄",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.1rem'}}>Sowli rassek: "Melli kansifto variable l method, wach kansifto l'original wla photocopie?"</p>
        <p style={{marginTop: '20px'}}>
            <strong>Rule:</strong> F Java (Primitives), kansifto <strong>Photocopie (Value)</strong>.
        </p>
        <p style={{marginTop: '15px', color: '#cbd5e1'}}>
            Ila l method beddlat l photocopie, l'original f `main` <strong>MAKYTBEDDELCH</strong>.
        </p>
      </div>
    ),
    visual: <PassByValueDemo />
  }
];