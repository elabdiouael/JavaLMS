"use client";

import React, { useState, useEffect, useRef } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: FLOWCHART VISUALIZER ---
const FlowChart = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ padding: '15px 25px', background: '#3b82f6', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>1. Input (Scanner)</div>
        <div style={{ fontSize: '1.5rem', color: '#64748b' }}>➜</div>
        <div style={{ padding: '15px 25px', background: '#a855f7', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>2. Storage (Array)</div>
        <div style={{ fontSize: '1.5rem', color: '#64748b' }}>➜</div>
        <div style={{ padding: '15px 25px', background: '#f59e0b', borderRadius: '8px', color: 'black', fontWeight: 'bold' }}>3. Process (Method)</div>
        <div style={{ fontSize: '1.5rem', color: '#64748b' }}>➜</div>
        <div style={{ padding: '15px 25px', background: '#22c55e', borderRadius: '8px', color: 'black', fontWeight: 'bold' }}>4. Decision (Logic)</div>
    </div>
    <div style={{ marginTop: '10px', fontStyle: 'italic', color: '#94a3b8' }}>
        Start ➡️ Sowel User ➡️ Stocki f RAM ➡️ 7sseb ➡️ 3ti Natija
    </div>
  </div>
);

// --- 2. COMPONENT: TERMINAL SIMULATOR (THE LUXE PART) ---
const TerminalSimulator = () => {
    const [lines, setLines] = useState<{text: string, type: 'output' | 'input'}[]>([]);
    const [step, setStep] = useState(0);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Scenario Script
    const scenario = [
        { text: "Compiling GradeCalculator.java...", type: 'system' },
        { text: "Running...", type: 'system' },
        { text: "Chhal men talib 3endek f lclasse? : ", type: 'output' },
        { text: "3", type: 'input' },
        { text: "--- Dkhel n9at ---", type: 'output' },
        { text: "3tini no9ta dyal talib 1: ", type: 'output' },
        { text: "12.0", type: 'input' },
        { text: "3tini no9ta dyal talib 2: ", type: 'output' },
        { text: "15.5", type: 'input' },
        { text: "3tini no9ta dyal talib 3: ", type: 'output' },
        { text: "08.5", type: 'input' },
        { text: "-----------------------------", type: 'output' },
        { text: "Calling calculateAverage()...", type: 'debug' },
        { text: "Moyenne dyal lclasse: 12.0", type: 'output' },
        { text: "Calling getMention(12.0)...", type: 'debug' },
        { text: "Resultat: Najimin (Réussi) ✅", type: 'success' }
    ];

    const runNext = () => {
        if (step < scenario.length) {
            setLines(prev => [...prev, scenario[step] as any]);
            setStep(prev => prev + 1);
        } else {
            setLines([]);
            setStep(0);
        }
    };

    // Auto scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [lines]);

    return (
        <div style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ 
                background: '#0f172a', 
                border: '1px solid #334155', 
                borderRadius: '8px', 
                height: '300px', 
                padding: '15px', 
                fontFamily: 'monospace',
                overflowY: 'auto',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
            }}>
                {lines.map((line, i) => (
                    <div key={i} style={{ marginBottom: '5px', color: 
                        line.type === 'input' ? '#22c55e' : 
                        line.type === 'system' ? '#64748b' : 
                        line.type === 'debug' ? '#a855f7' : 
                        line.type === 'success' ? '#3b82f6' : '#e2e8f0' 
                    }}>
                        {line.type === 'input' ? '> ' : ''}{line.text}
                    </div>
                ))}
                <div ref={bottomRef} />
                {step < scenario.length && <div style={{animation: 'blink 1s infinite', display: 'inline-block', width: '8px', height: '15px', background: '#22c55e'}}></div>}
            </div>
            
            <button 
                onClick={runNext}
                style={{ alignSelf: 'center', padding: '10px 30px', background: '#2563eb', color: 'white', borderRadius: '6px', fontWeight: 'bold' }}
            >
                {step === 0 ? "Start Program 🚀" : step === scenario.length ? "Restart 🔄" : "Next Interaction ➡️"}
            </button>
        </div>
    );
};

// --- DATA: SLIDES CONTENT (PART 4) ---
export const slidesData: SlideContent[] = [
  // SLIDE 1: INTRO / SCENARIO
  {
    id: 1,
    title: "Part 4: The Mini-Project",
    subtitle: "Grade Calculator 🧮",
    layout: "center",
    content: (
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Hna fin ghadi njem3o ga3 dakchi li 9rina (Variables, Loops, Arrays, Methods) f programme wa7ed.
        </p>
        <div style={{ padding: '25px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '15px' }}>📜 The Scenario</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                "Imagine nta <strong>Prof</strong>, w bghiti programme y3awnek t7seb <strong>l'Moyenne</strong> dyal l 9ism, w ygolik chkoun li <strong>Nje7</strong> w chkoun li S9et automatique."
            </p>
        </div>
      </div>
    ),
  },

  // SLIDE 2: STRATEGY (FLOWCHART)
  {
    id: 2,
    title: "The Strategy",
    subtitle: "Rsem l Plan 9bel Code 🗺️",
    layout: "center",
    content: (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '30px' }}>
            Ma3mrk tbdz tkteb code direct. Rsem <strong>Logique</strong> f rassek awla f sboura.
        </p>
        <FlowChart />
      </div>
    ),
  },

  // SLIDE 3: THE CODE (FULL VIEW)
  {
    id: 3,
    title: "The Source Code",
    subtitle: "GradeCalculator.java ☕",
    layout: "code-focus",
    content: (
      <div>
        <p>Hada howa l code kamel. Nta9lou men Step l Step.</p>
        <ul style={{ marginTop: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>
            <li>1. Import Scanner</li>
            <li>2. Dynamic Array Creation</li>
            <li>3. Methods for Calculation</li>
        </ul>
      </div>
    ),
    codeSnippet: `public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    // 1. Dynamic Allocation
    System.out.print("Size? ");
    int size = sc.nextInt();
    double[] notes = new double[size];

    // 2. Fill Data
    for (int i = 0; i < notes.length; i++) {
        notes[i] = sc.nextDouble();
    }

    // 3. Process
    double avg = calculateAverage(notes);
    String msg = getMention(avg);

    System.out.println("Moyenne: " + avg);
}`
  },

  // SLIDE 4: TEACHABLE MOMENTS
  {
    id: 4,
    title: "Key Concepts",
    subtitle: "Achenou khassk t39el 🧠",
    layout: "split",
    content: (
      <div>
        <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#f59e0b' }}>Line 11: Dynamic Size</strong>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                <code>new double[size]</code>: L'Array t9der tkoun flexible 3la hsab l user. Machi darouri <code>[5]</code>.
            </p>
        </div>
        <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#a855f7' }}>Line 19: User Experience</strong>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                <code>"Talib " + (i + 1)</code>: User ma kayfhemch "Talib 0". Zidna 1 ghir l dwe9 (Affichage).
            </p>
        </div>
        <div>
            <strong style={{ color: '#22c55e' }}>Method Calls</strong>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                <code>main</code> katsifet array l <code>calculateAverage</code> w katsenna resultat.
            </p>
        </div>
      </div>
    ),
    visual: (
        <div style={{ padding: '20px', background: '#0f172a', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace' }}>
            <div style={{color: '#64748b'}}>// Inside Main</div>
            <div>double avg = <span style={{color: '#f59e0b'}}>calculateAverage(notes)</span>;</div>
            <div style={{textAlign: 'center', margin: '10px 0', fontSize: '1.5rem'}}>⬇️ ⬆️</div>
            <div style={{color: '#64748b'}}>// Outside Main</div>
            <div>public static double <span style={{color: '#f59e0b'}}>calculateAverage</span>(...)</div>
        </div>
    )
  },

  // SLIDE 5: LIVE DEMO (TERMINAL)
  {
    id: 5,
    title: "Live Demo",
    subtitle: "Kifach kaykhdem bss7? 🖥️",
    layout: "center",
    content: (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '20px' }}>Click <strong>"Next Interaction"</strong> bach t-simuler l programme.</p>
        <TerminalSimulator />
      </div>
    ),
  },

  // SLIDE 6: CONCLUSION
  {
    id: 6,
    title: "Conclusion",
    subtitle: "Tbarkallah 3likoum! 🎓",
    layout: "center",
    content: (
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#22c55e' }}>Mission Accomplished</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Lyoma dertou <strong>Memory Management</strong> (Arrays), <strong>Modular Programming</strong> (Methods), w <strong>Logic Processing</strong>.
        </p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Hada howa l job dyal <span style={{ color: '#3b82f6' }}>Software Engineer</span>. 🚀
        </p>
        <div style={{ marginTop: '40px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
            Next Step? <strong>Object Oriented Programming (OOP)</strong>. (Classes & Objects).
        </div>
      </div>
    ),
  }
];