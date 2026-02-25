// src/data/slidesOOP_Part4.tsx
"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: INHERITANCE VISUALIZER ---
const InheritanceVisualizer = () => {
    const [created, setCreated] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
            
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                {/* PARENT CLASS */}
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6', padding: '15px', borderRadius: '12px', width: '200px', textAlign: 'center' }}>
                    <h4 style={{ color: '#60a5fa', margin: '0 0 10px 0' }}>Class: Employee</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cbd5e1', fontSize: '0.85rem', textAlign: 'left' }}>
                        <li>+ String name</li>
                        <li>+ double salary</li>
                        <li style={{ color: '#22c55e', marginTop: '5px' }}>+ work()</li>
                    </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', fontWeight: 'bold' }}>
                    <div style={{ fontSize: '0.8rem', marginBottom: '5px' }}>extends</div>
                    <div style={{ fontSize: '2rem', transform: 'rotate(-90deg)' }}>➔</div>
                </div>

                {/* CHILD CLASS */}
                <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '2px solid #a855f7', padding: '15px', borderRadius: '12px', width: '200px', textAlign: 'center' }}>
                    <h4 style={{ color: '#c084fc', margin: '0 0 10px 0' }}>Class: Developer</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cbd5e1', fontSize: '0.85rem', textAlign: 'left' }}>
                        <li style={{ color: '#64748b', fontStyle: 'italic' }}>// Wret mn Employee:</li>
                        <li style={{ opacity: 0.6 }}>+ String name</li>
                        <li style={{ opacity: 0.6 }}>+ double salary</li>
                        <li style={{ color: '#64748b', fontStyle: 'italic', marginTop: '5px' }}>// Zadat dyalha:</li>
                        <li>+ String language</li>
                        <li style={{ color: '#22c55e', marginTop: '5px' }}>+ writeCode()</li>
                    </ul>
                </div>
            </div>

            <button 
                onClick={() => setCreated(true)}
                style={{ padding: '10px 20px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}
            >
                new Developer("Ali", 8000, "Java")
            </button>

            {created && (
                <div style={{ background: '#0f172a', border: '1px solid #22c55e', padding: '15px', borderRadius: '12px', width: '100%', maxWidth: '400px', animation: 'fadeIn 0.5s' }}>
                    <div style={{ color: '#22c55e', textAlign: 'center', marginBottom: '10px', fontSize: '0.9rem' }}>Objet fl' Heap (Memory)</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '1rem', color: '#f8fafc' }}>
                        <div><strong style={{ color: '#3b82f6' }}>name:</strong> "Ali" <span style={{fontSize: '0.7rem', color: '#64748b'}}>(mn Employee)</span></div>
                        <div><strong style={{ color: '#3b82f6' }}>salary:</strong> 8000 <span style={{fontSize: '0.7rem', color: '#64748b'}}>(mn Employee)</span></div>
                        <div><strong style={{ color: '#a855f7' }}>language:</strong> "Java" <span style={{fontSize: '0.7rem', color: '#64748b'}}>(mn Developer)</span></div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- 2. COMPONENT: SUPER KEYWORD VISUALIZER ---
const SuperVisualizer = () => {
    const [step, setStep] = useState(0);

    const runSimulation = () => {
        setStep(1); // Call child constructor
        setTimeout(() => setStep(2), 1000); // Call super()
        setTimeout(() => setStep(3), 2000); // Finish parent
        setTimeout(() => setStep(4), 3000); // Finish child
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', width: '100%' }}>
            <button 
                onClick={runSimulation}
                disabled={step > 0 && step < 4}
                style={{ padding: '10px 20px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
                {step === 4 ? "Reset & Re-run" : "Instanciate Developer"}
            </button>

            <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                {/* HEAP CONSTRUCTION ZONE */}
                <div style={{ flex: 1, border: '2px dashed #475569', borderRadius: '12px', padding: '20px', background: '#0f172a', position: 'relative', minHeight: '150px' }}>
                    <div style={{ position: 'absolute', top: '-10px', left: '20px', background: '#1e293b', padding: '0 10px', color: '#94a3b8', fontSize: '0.8rem' }}>Heap Construction</div>
                    
                    {step >= 2 && (
                        <div style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid #3b82f6', padding: '10px', borderRadius: '8px', marginBottom: '10px', animation: 'fadeIn 0.3s' }}>
                            <div style={{ color: '#60a5fa', fontSize: '0.8rem' }}>1. Parent Part (Employee)</div>
                            {step >= 3 ? <div style={{ color: '#fff' }}>name = "Ali", salary = 8000</div> : <div style={{ color: '#cbd5e1' }}>Building...</div>}
                        </div>
                    )}

                    {step >= 1 && (
                        <div style={{ background: 'rgba(168, 85, 247, 0.2)', border: '1px solid #a855f7', padding: '10px', borderRadius: '8px', opacity: step >= 4 ? 1 : 0.5, transition: '0.3s' }}>
                            <div style={{ color: '#c084fc', fontSize: '0.8rem' }}>2. Child Part (Developer)</div>
                            {step >= 4 ? <div style={{ color: '#fff' }}>language = "Java"</div> : <div style={{ color: '#cbd5e1' }}>Waiting for super()...</div>}
                        </div>
                    )}
                </div>

                {/* LOGS */}
                <div style={{ width: '250px', background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '15px', color: '#10b981', fontFamily: 'monospace', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: '5px', marginBottom: '5px' }}>Console Logs:</div>
                    {step >= 1 && <div> new Developer() called</div>}
                    {step >= 2 && <div style={{ color: '#f59e0b' }}> super() triggered!</div>}
                    {step >= 3 && <div> Employee created.</div>}
                    {step >= 4 && <div> Developer created.</div>}
                </div>
            </div>
        </div>
    );
};

// --- DATA: SLIDES CONTENT FOR PART 4 ---
export const slidesData: SlideContent[] = [
  
  // SLIDE 1: INTRO INHERITANCE
  {
    id: 1,
    title: "1. Inheritance (L'Wirt)",
    subtitle: "DRY: Don't Repeat Yourself ♻️",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
            F charika, 3endna <code>Manager</code> w <code>Developer</code>. Bjoujhoum 3endhom <em>name</em>, <em>salary</em>, w method <em>work()</em>. Wach nketbou had l'code m3awed f bjouj classes?
        </p>
        
        <p style={{ marginTop: '15px' }}>
          <strong>L'Hell:</strong> Kansaybou Class jdida smitha <code>Employee</code> (L'Walid/Superclass) n7ettou fiha l'code l'mcharak. W nkheliw <code>Manager</code> w <code>Developer</code> (L'wlad/Subclasses) ywrtou menha b l'mot cle <strong>extends</strong>.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li>L'weld kayakhod ga3 l'attributes w l'methods dyal l'walid (li machi private).</li>
            <li>L'weld y9der yzid l'khasayess dyalou (bhal <code>language</code> l'Developer).</li>
        </ul>
      </div>
    ),
    visual: <InheritanceVisualizer />
  },

  // SLIDE 2: THE IS-A RELATIONSHIP
  {
    id: 2,
    title: "2. The 'IS-A' Relationship",
    subtitle: "L'Alaqa char3iya 🧬",
    layout: "code-focus",
    content: (
      <div>
        <p>Bach t3ref wach khassek tdir l'heritage awla la f design dyalek, sawel rassek: <strong>Wach A IS-A B? (Wach A houwa B?)</strong></p>
        <ul style={{ marginTop: '15px', lineHeight: '2.2' }}>
            <li>Wach <em>Developer</em> houwa <em>Employee</em>? <strong>Ah!</strong> (Inheritance mzyana).</li>
            <li>Wach <em>Car</em> hiya <em>Engine</em>? <strong>La!</strong> (Car <em>has-a</em> Engine. Hada smito Composition, machi Inheritance).</li>
        </ul>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '3px solid #3b82f6'}}>
            ⚠️ <strong>Rule f Java:</strong> Class t9der twret men Class wa7da ghir (Single Inheritance). Mat9derch tdir <code>extends A, B</code>.
        </div>
      </div>
    ),
    codeSnippet: `// L'Walid
public class Employee {
    String name;
    double salary;
    
    public void work() {
        System.out.println("Khedam kayswwef...");
    }
}

// L'Weld
public class Developer extends Employee {
    String language; // Ziyada dyal l'weld

    public void writeCode() {
        System.out.println("Kteb code b " + language);
    }
}
`
  },

  // SLIDE 3: THE SUPER() KEYWORD
  {
    id: 3,
    title: "3. L'Constructeur w l'mot cle 'super'",
    subtitle: "L'Walid dima lewwel 🥇",
    layout: "split",
    content: (
      <div>
        
        <h3 style={{ color: '#ef4444' }}>L'Qanoun l'kbir dyal l'Memoire:</h3>
        <p style={{ marginTop: '10px' }}>
          Mat9derch tbni l'weld 7ta tbni l'walid! Melli kaddir <code>new Developer()</code>, l'constructor dyal Developer awel 7aja kaydirha hia kay3iyyet l'constructor dyal Employee.
        </p>
        <p style={{ marginTop: '15px' }}>
          Had l'3eyta kaddar b l'mot cle <strong><code>super()</code></strong>.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '1.8', fontSize: '0.9rem' }}>
            <li>Ila maktbtihach, Java kaydir <code>super()</code> (khawya) b khbya f ster lewwel.</li>
            <li>Ila l'walid 3endou constructor fih parametres, <strong>khassk bzzez</strong> tekteb <code>super(val1, val2)</code> w tsift lih l'data.</li>
        </ul>
      </div>
    ),
    visual: <SuperVisualizer />
  },

  // SLIDE 4: SUPER() CODE EXAMPLE
  {
    id: 4,
    title: "4. Code: Kifach nktbou super()?",
    subtitle: "Sift l'data l'Walid 📦",
    layout: "code-focus",
    content: (
      <div>
        <p>Chuf kifach l'Weld kayched ga3 l'parametres f l'usine dyalo, kayhez li kayhmou l'Walid, w kaysifthom lih f <code>super()</code>.</p>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', fontSize: '0.9rem'}}>
            🚨 <strong>Attention:</strong> <code>super()</code> khassha DIMA tkoun hia awel ster f l'constructor dyal l'weld.
        </div>
      </div>
    ),
    codeSnippet: `public class Employee {
    String name;
    
    // Walid kaytleb 'name' f l'usine dyalo
    public Employee(String name) {
        this.name = name;
    }
}

public class Developer extends Employee {
    String language;

    // Weld kaytleb 'name' w 'language'
    public Developer(String name, String language) {
        // 1. Sift 'name' l'usine dyal Walid
        super(name); 
        
        // 2. Kmel l'khedma dyal l'Weld
        this.language = language;
    }
}
`
  },

  // SLIDE 5: METHOD OVERRIDING
  {
    id: 5,
    title: "5. Method Overriding",
    subtitle: "Tbeddel l'khedma dyal l'Walid 🔄",
    layout: "code-focus",
    content: (
      <div>
        <p>Tkhayel Walid 3endou method <code>work()</code> katgoul "Kheddam". L'Developer bgha ybeddel had l'hadra w ygoul "Kanbrmej".</p>
        <p style={{ marginTop: '15px' }}>
          Hadi hiya l'<strong>Overriding</strong>: T3awed tekteb nefs l'method li kayna f l'walid (nefs ssmia, nefs l'parametres) west l'weld, bach tbeddel l'khedma dyalha.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li>Kansta3mlou l'annotation <code>@Override</code> (machi darouriya mais meziana l'validation).</li>
            <li>Melli kaddir <code>dev.work()</code>, Java kayexecuti dyal l'Weld, machi dyal l'Walid.</li>
        </ul>
      </div>
    ),
    codeSnippet: `public class Employee {
    public void work() {
        System.out.println("Employee is doing general work.");
    }
}

public class Developer extends Employee {
    
    // Hna darna Overriding (beddelna l'mo7tawa)
    @Override
    public void work() {
        System.out.println("Developer is writing Java code.");
    }
}

// F l'Main:
Developer dev = new Developer();
dev.work(); // Ghat-afficha "Developer is writing Java code."
`
  }
];