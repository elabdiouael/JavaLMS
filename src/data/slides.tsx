"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: MEMORY VISUALIZER (Updated for Arrays) ---
const MemoryVisualizer = () => (
  <div style={{ display: 'flex', gap: '2rem', width: '100%', height: '300px', fontSize: '0.9rem' }}>
    {/* STACK */}
    <div style={{ flex: 1, border: '2px solid #f59e0b', borderRadius: '12px', padding: '1rem', background: 'rgba(245, 158, 11, 0.1)' }}>
      <h4 style={{ color: '#f59e0b', textAlign: 'center', marginBottom: '1rem' }}>STACK (Reference)</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
         <div style={{ width: '80%', padding: '15px', border: '1px solid #f59e0b', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{fontSize: '0.8rem', opacity: 0.7}}>Variable Name</div>
            <strong style={{fontSize: '1.2rem'}}>notes</strong>
            <div style={{marginTop: '5px', color: '#f59e0b'}}>Ref: @AF3</div>
         </div>
      </div>
    </div>

    {/* POINTER ARROW */}
    <div style={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '2rem' }}>
        ➜
    </div>

    {/* HEAP */}
    <div style={{ flex: 1, border: '2px solid #a855f7', borderRadius: '12px', padding: '1rem', background: 'rgba(168, 85, 247, 0.1)' }}>
      <h4 style={{ color: '#a855f7', textAlign: 'center', marginBottom: '1rem' }}>HEAP (The Container)</h4>
      <div style={{ 
        border: '2px dashed #a855f7', 
        padding: '15px', 
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60%'
      }}>
        {[10, 20, 30, 40, 50].map((n, i) => (
            <div key={i} style={{textAlign: 'center'}}>
                <div style={{ background: '#a855f7', color: 'white', width: '35px', height: '35px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{n}</div>
                <div style={{fontSize: '0.7rem', marginTop: '5px', color: '#ccc'}}>idx {i}</div>
            </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: '#a855f7', marginTop: '10px', fontSize: '0.8rem' }}>@Address: AF3</p>
    </div>
  </div>
);

// --- 2. COMPONENT: ERROR SIMULATION ---
const ErrorSimulator = () => {
    const [status, setStatus] = useState("idle"); // idle, success, error
  
    const accessArray = (index: number) => {
        if (index > 4) {
            setStatus("error");
        } else {
            setStatus("success");
        }
    };
  
    return (
        <div style={{width: '100%', textAlign: 'center', padding: '20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px'}}>
            <p style={{marginBottom: '15px'}}>Array Size = 5 (Index 0..4)</p>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px'}}>
                <button onClick={() => accessArray(2)} style={{padding: '8px 15px', background: '#3b82f6', color: 'white', borderRadius: '5px', border: 'none'}}>Get index [2]</button>
                <button onClick={() => accessArray(5)} style={{padding: '8px 15px', background: '#ef4444', color: 'white', borderRadius: '5px', border: 'none'}}>Get index [5]</button>
            </div>
            
            {status === "success" && (
                <div style={{color: '#22c55e', padding: '10px', border: '1px solid #22c55e', borderRadius: '5px'}}>
                    ✅ Value found: 30
                </div>
            )}
            
            {status === "error" && (
                <div style={{color: '#ef4444', padding: '10px', border: '1px solid #ef4444', borderRadius: '5px', fontFamily: 'monospace'}}>
                    ❌ ArrayIndexOutOfBoundsException! <br/>
                    <small>D9iti f bab l jiran (Memory machi dyalek)</small>
                </div>
            )}
        </div>
    )
}

// --- DATA: SLIDES CONTENT (PART 1 ONLY) ---
export const slidesData: SlideContent[] = [
  // SLIDE 1: INTRO / THE PROBLEM
  {
    id: 1,
    title: "Part 1: Les Tableaux (Arrays)",
    subtitle: "The Fixed Container 📦",
    layout: "center",
    content: (
      <div style={{textAlign: 'center', maxWidth: '800px'}}>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Mrahba bik. 9bel ma ndkholou f code, khassna nefhmou <strong>"3lach"</strong> aslan khtare3na Arrays.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
            <div style={{padding: '20px', border: '1px solid #334155', borderRadius: '10px', width: '100%'}}>
                <strong>Scenario:</strong> "Imagine bghina nstockiw les notes dyal <strong>100 taliba</strong>."
            </div>
            <div style={{fontSize: '2rem'}}>🤔</div>
            <div style={{padding: '20px', border: '1px solid #ef4444', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '10px', width: '100%'}}>
                <strong>The Problem:</strong> Wach ghadi ncreer 100 variable? <br/>
                <code>int note1, note2, note3... note100?</code> <br/>
                Impossible njeriw hadchi! 🤯
            </div>
             <div style={{padding: '20px', border: '1px solid #22c55e', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '10px', width: '100%'}}>
                <strong>The Solution:</strong> Array. Bhal chi "Cartona" twiila m9essma, 3endha smiya we7da.
            </div>
        </div>
      </div>
    ),
  },

  // SLIDE 2: MEMORY DEEP DIVE
  {
    id: 2,
    title: "Memory Visualization",
    subtitle: "Kifach katban f RAM? 🧠",
    layout: "split",
    content: (
      <div>
        <p>Hna fin khassk trkzi m3aya mzyan.</p>
        <p style={{marginTop: '15px'}}>L'Array f Java howa <strong>Object</strong>. Dakchi lach kansta3mlo `new`.</p>
        <ul style={{marginTop: '20px', lineHeight: '1.8'}}>
            <li><strong>Stack:</strong> Fiha ghir l variable `notes`. Ma fihach l ar9am! Fiha ghir <strong>l'adresse</strong> (Pointer).</li>
            <li><strong>Heap:</strong> Hna fin kayna l data bsse7. Bloc mtape9 (Contiguous) fih les cases.</li>
        </ul>
        <div style={{marginTop: '20px', padding: '10px', borderLeft: '3px solid #3b82f6', background: 'rgba(59, 130, 246, 0.1)'}}>
            💡 <strong>Note:</strong> `notes` katpointi 3la awel case f dak l bloc.
        </div>
      </div>
    ),
    visual: <MemoryVisualizer />
  },

  // SLIDE 3: SYNTAX & CREATION
  {
    id: 3,
    title: "Syntax & Creation",
    subtitle: "Kifach nssaybouha? 🛠️",
    layout: "code-focus",
    content: (
      <div>
        <p>Kayn 2 tor9an bach ncreer Array, 3la hsab l 7aja dyalek.</p>
        <p style={{marginTop: '10px'}}>Java "Dreyef", melli kadiri `new`, kay3emerhoum lik b <strong>Default Values</strong> (0, null, false) bach maykheli likch garbage values.</p>
      </div>
    ),
    codeSnippet: `// METHOD A: Melli mankounouch 3arfin les valeurs
// Kan7jez ghir lblassa (5 chaises khawyin)
int[] numbers = new int[5]; 
// Resultat: [0, 0, 0, 0, 0]

// METHOD B: Melli kankounou déjà 3arfin les valeurs
// Kancreer w n3emer f nefs l we9t
int[] numbers = {10, 20, 30, 40, 50};`
  },

  // SLIDE 4: ACCESSING DATA
  {
    id: 4,
    title: "Accessing Data",
    subtitle: "L'Indexation 0️⃣",
    layout: "split",
    content: (
      <div>
        <h3 style={{color: '#f59e0b'}}>⚠️ The Golden Rule</h3>
        <p style={{fontSize: '1.2rem', margin: '15px 0'}}>
            "F l informatique, l 7ssab kaybda men <strong>0</strong>, machi 1."
        </p>
        <p>Imagine l Index howa "Offset" (Ch7al b3id 3la l bab). <br/>L premier élément ra f l bab (0 steps away).</p>
        
        <ul style={{marginTop: '20px'}}>
            <li><code>numbers[0]</code> = Awel element.</li>
            <li><code>numbers[2]</code> = Talet element.</li>
        </ul>
      </div>
    ),
    codeSnippet: `int[] numbers = {10, 20, 30};

// WRITE: Beddelna l valeur lwla
numbers[0] = 99;  

// READ: Jebna l valeur talta
int x = numbers[2]; 

// numbers wallat: {99, 20, 30}`
  },

  // SLIDE 5: ITERATION
  {
    id: 5,
    title: "Looping (Iteration)",
    subtitle: "L'Automatisme 🔄",
    layout: "code-focus",
    content: (
      <div>
        <p>Hna fin katban l 9owa dyal Array. N9der ndouz 3lihoum kamlin b sster wa7ed.</p>
        <p style={{marginTop: '10px'}}>
            Khedmi b <code>.length</code> (property) bach t3erfi l 7ajm dyal l array bla ma t7ssbi b ydik.
        </p>
        <div style={{marginTop: '15px', padding: '10px', border: '1px solid #a855f7', borderRadius: '5px'}}>
            👉 <strong>Tip:</strong> Rkzi f l fer9: <br/>
            <code>i</code> = L'adresse (Numéro de case) <br/>
            <code>numbers[i]</code> = La valeur (Chno wst l case).
        </div>
      </div>
    ),
    codeSnippet: `int[] numbers = {10, 20, 30, 40, 50};

// Classic Loop
// i kaymchi men 0 ... tal 4 (length - 1)
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Case numero " + i);
    System.out.println("Fiha l valeur: " + numbers[i]);
}`
  },

  // SLIDE 6: THE TRAP
  {
    id: 6,
    title: "The Famous Error 🚫",
    subtitle: "ArrayIndexOutOfBoundsException",
    layout: "split",
    content: (
      <div>
        <p>Hadi hiya l 'Bismillah' dyal les bugs 😅.</p>
        <p>Ila 3endek Array fiha 5 d nass (Index 0 tal 4), w mchiti bagha tchoufi chkoun f l index <strong>5</strong>...</p>
        <p style={{marginTop: '20px', fontWeight: 'bold', color: '#ef4444'}}>Java kayhbessk!</p>
        <p>"Rak d9iti f bab l jiran. Had lmémoire machi dyalek."</p>
      </div>
    ),
    visual: <ErrorSimulator />
  }
];