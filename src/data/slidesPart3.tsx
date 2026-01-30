"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: STRING COMPARISON TRAP (== vs .equals) ---
const StringComparisonDemo = () => {
  const [method, setMethod] = useState<"==" | "equals" | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '20px' }}>
      
      {/* MEMORY REPRESENTATION */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* OBJECT 1 */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '5px' }}>s1 (Ref @A1)</div>
          <div style={{ 
            background: '#0f172a', border: '2px solid #3b82f6', 
            padding: '15px 30px', borderRadius: '8px',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
          }}>
            "test"
          </div>
        </div>

        {/* SEPARATOR */}
        <div style={{ height: '50px', borderLeft: '2px dashed #475569' }}></div>

        {/* OBJECT 2 */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '5px' }}>s2 (Ref @B9)</div>
          <div style={{ 
            background: '#0f172a', border: '2px solid #ef4444', 
            padding: '15px 30px', borderRadius: '8px',
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)'
          }}>
            "test"
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setMethod("==")}
          style={{ padding: '10px 20px', background: '#f59e0b', color: 'black', borderRadius: '6px', fontWeight: 'bold' }}
        >
          Check (s1 == s2)
        </button>
        <button 
          onClick={() => setMethod("equals")}
          style={{ padding: '10px 20px', background: '#22c55e', color: 'black', borderRadius: '6px', fontWeight: 'bold' }}
        >
          Check s1.equals(s2)
        </button>
      </div>

      {/* RESULT DISPLAY */}
      {method && (
        <div style={{ 
          marginTop: '10px', padding: '15px', borderRadius: '8px', width: '100%', textAlign: 'center',
          background: method === "==" ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
          border: `1px solid ${method === "==" ? '#ef4444' : '#22c55e'}`
        }}>
          {method === "==" ? (
            <>
              <h3 style={{ color: '#ef4444' }}>FALSE ❌</h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                Rak ghir 9arnti les Adresses (@A1 vs @B9). Machi bhal bhal.
              </p>
            </>
          ) : (
            <>
              <h3 style={{ color: '#22c55e' }}>TRUE ✅</h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                Rak 9arnti l'Content ("test" vs "test"). Bhal bhal.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// --- 2. COMPONENT: IMMUTABILITY VISUALIZER ---
const ImmutabilityDemo = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(prev => (prev + 1) % 2);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* CODE BLOCK */}
      <div style={{ background: '#1e293b', padding: '10px', borderRadius: '6px', fontFamily: 'monospace', marginBottom: '20px' }}>
        <div>String s = "Hello";</div>
        <div style={{ opacity: step === 1 ? 1 : 0.3, color: step === 1 ? '#f59e0b' : 'inherit' }}>
          s = s + " World";
        </div>
      </div>

      {/* MEMORY POOL */}
      <div style={{ 
        border: '2px dashed #64748b', borderRadius: '12px', padding: '20px', 
        width: '100%', minHeight: '150px', position: 'relative',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'
      }}>
        <div style={{ position: 'absolute', top: '-12px', left: '20px', background: '#0f172a', padding: '0 10px', color: '#64748b', fontSize: '0.8rem' }}>HEAP MEMORY</div>

        {/* OLD STRING */}
        <div style={{ 
          opacity: step === 1 ? 0.4 : 1, 
          filter: step === 1 ? 'grayscale(100%)' : 'none',
          transition: 'all 0.5s'
        }}>
           <div style={{ background: '#a855f7', padding: '10px 20px', borderRadius: '6px', color: 'white' }}>"Hello"</div>
           {step === 0 && <div style={{ textAlign: 'center', color: '#f59e0b', fontSize: '1.5rem' }}>⬆</div>}
           {step === 1 && <div style={{ textAlign: 'center', color: '#ef4444', fontSize: '0.8rem', marginTop: '5px' }}>🗑️ Garbage</div>}
        </div>

        {/* NEW STRING */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
             <div style={{ background: '#a855f7', padding: '10px 20px', borderRadius: '6px', color: 'white', border: '2px solid #f59e0b' }}>"Hello World"</div>
             <div style={{ textAlign: 'center', color: '#f59e0b', fontSize: '1.5rem' }}>⬆</div>
             <div style={{ textAlign: 'center', color: '#f59e0b', fontSize: '0.9rem' }}>s (New Ref)</div>
          </div>
        )}
      </div>

      <button 
        onClick={nextStep}
        style={{ marginTop: '20px', padding: '10px 20px', background: '#3b82f6', color: 'white', borderRadius: '6px' }}
      >
        {step === 0 ? "Execute Line 2" : "Reset"}
      </button>
    </div>
  );
};


// --- DATA: SLIDES CONTENT (PART 3) ---
export const slidesData: SlideContent[] = [
  // SLIDE 1: INTRO (PRIMITIVE VS OBJECT)
  {
    id: 1,
    title: "Part 3: Strings",
    subtitle: "More Than Just Text 📜",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.2rem', marginBottom: '20px'}}>
            Rodd lbal: <strong>"String machi bhal int aw char."</strong>
        </p>
        <ul style={{ lineHeight: '2' }}>
            <li><strong style={{color: '#f59e0b'}}>Primitive (int):</strong> Boîte sghira fiha l valeur direct.</li>
            <li><strong style={{color: '#a855f7'}}>Object (String):</strong> Katchd ghir Reference.</li>
        </ul>
        <div style={{marginTop: '30px', padding: '15px', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '3px solid #3b82f6'}}>
            📺 <strong>Analogy:</strong><br/>
            "Melli katchri Tlfaza (Object), wach kathez Tlfaza f jibek? La, kathez ghir <strong>Télécommande</strong> (Reference) bach t7kem fiha."
        </div>
      </div>
    ),
    visual: (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            <div style={{border: '1px solid #f59e0b', padding: '10px', borderRadius: '8px', width: '150px', textAlign: 'center'}}>
                int x = 5; <br/> 📦 [ 5 ]
            </div>
            <div style={{fontSize: '1.5rem'}}>VS</div>
            <div style={{border: '1px solid #a855f7', padding: '10px', borderRadius: '8px', width: '100%', textAlign: 'center'}}>
               String s = "Hi"; <br/> 🎮 Ref {"->"} 📺 ["Hi"]
            </div>
        </div>
    )
  },

  // SLIDE 2: THE TRAP (== VS EQUALS)
  {
    id: 2,
    title: "The Trap: Comparison",
    subtitle: "Aham slide f l partie 🚨",
    layout: "center",
    content: (
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
           Hadi hia ssebba r9em 1 3lach les débutants kaytsettaw f Java.
        </p>
        
        <StringComparisonDemo />

        <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div style={{ padding: '15px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px' }}>
                <code>==</code> : Kat9aren <strong>Adresses</strong>.
            </div>
            <div style={{ padding: '15px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: '8px' }}>
                <code>.equals()</code> : Kat9aren <strong>Content</strong>.
            </div>
        </div>
      </div>
    ),
  },

  // SLIDE 3: IMMUTABILITY
  {
    id: 3,
    title: "Immutability",
    subtitle: "Makytbeddelch! 🗿",
    layout: "split",
    content: (
      <div>
        <p>Goulhoum: <strong>"String f Java Immutable (S7i7)."</strong></p>
        <p style={{ marginTop: '15px' }}>
           Melli kaddiri <code>s = s + " World"</code>:
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <li>❌ Java <strong>MAKYMODIFIECH</strong> "Hello" l9dima.</li>
            <li>✅ Java kaycreer <strong>String Jdid</strong> fih "Hello World".</li>
            <li>🗑️ "Hello" l9dima katb9a msiyba f Ram (Garbage).</li>
        </ul>
        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#94a3b8' }}>
            *Note: Ila kenti ghatmodifie bzaf, kheddem StringBuilder (Advanced).
        </p>
      </div>
    ),
    visual: <ImmutabilityDemo />
  },

  // SLIDE 4: THE TOOLBELT
  {
    id: 4,
    title: "The Toolbelt",
    subtitle: "Couteau Suisse 🛠️",
    layout: "code-focus",
    content: (
      <div>
        <p>String 3amra des méthodes wajdin. Hado darouri t3erfihoum:</p>
        <ul style={{ marginTop: '20px', lineHeight: '2' }}>
            <li><code>length()</code>: Ch7al fiha men 7aref? (B l a9wass).</li>
            <li><code>charAt(i)</code>: Jbed lia l 7aref li f l'index i.</li>
            <li><code>substring(0, 3)</code>: 9te3 lia men hna l hna.</li>
            <li><code>toUpperCase()</code>: Red kolchi MAJUSCULE.</li>
        </ul>
      </div>
    ),
    codeSnippet: `String txt = "Java";

// 1. Length
int len = txt.length(); // 4

// 2. Character
char c = txt.charAt(0); // 'J'

// 3. Substring
String part = txt.substring(0, 2); // "Ja"

// 4. Case
System.out.println(txt.toUpperCase()); // "JAVA"`
  },

  // SLIDE 5: SUMMARY
  {
    id: 5,
    title: "Résumé",
    subtitle: "Khlassat l9awl 📝",
    layout: "center",
    content: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '800px' }}>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <h3>1. Object</h3>
              <p style={{ color: '#cbd5e1' }}>String hiya Reference, machi primitive.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', border: '1px solid #ef4444' }}>
              <h3>2. Danger ⚠️</h3>
              <p style={{ color: '#cbd5e1' }}>Jamais tsta3mel <code>==</code> m3a String.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', border: '1px solid #22c55e' }}>
              <h3>3. Safe ✅</h3>
              <p style={{ color: '#cbd5e1' }}>Dima sta3mel <code>.equals()</code>.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', border: '1px solid #a855f7' }}>
              <h3>4. New String</h3>
              <p style={{ color: '#cbd5e1' }}>Concatenation (`+`) katcreer object jdid.</p>
          </div>
      </div>
    )
  }
];