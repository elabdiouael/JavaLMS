// src/data/slidesOOP_Part2.tsx
"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: STATIC KEYWORD VISUALIZER ---
const StaticVisualizer = () => {
  const [globalCount, setGlobalCount] = useState(0);
  const [objects, setObjects] = useState<{ id: number, localClicks: number }[]>([
    { id: 1, localClicks: 0 },
    { id: 2, localClicks: 0 }
  ]);

  const clickObject = (id: number) => {
    setGlobalCount(prev => prev + 1);
    setObjects(objects.map(obj => 
      obj.id === id ? { ...obj, localClicks: obj.localClicks + 1 } : obj
    ));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
      
      {/* CLASS LEVEL (STATIC) */}
      <div style={{ background: 'rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b', padding: '15px 30px', borderRadius: '12px', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
        <h4 style={{ color: '#f59e0b', margin: 0 }}>Class Level (Shared Memory)</h4>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>
          static int totalClicks = <span style={{ color: '#f8fafc' }}>{globalCount}</span>;
        </div>
        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '5px' }}>Hadi mcharikin fiha ga3 les objets (Instances)</p>
      </div>

      <div style={{ fontSize: '1.5rem', color: '#64748b' }}>⬇️</div>

      {/* OBJECT LEVEL (INSTANCE) */}
      <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
        {objects.map(obj => (
          <div key={obj.id} style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', padding: '15px', borderRadius: '12px', textAlign: 'center', width: '180px' }}>
            <h4 style={{ color: '#60a5fa', margin: 0 }}>Object #{obj.id}</h4>
            <div style={{ margin: '15px 0', fontSize: '1.1rem' }}>
              localClicks = {obj.localClicks}
            </div>
            <button 
              onClick={() => clickObject(obj.id)}
              style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', width: '100%' }}
            >
              Click Me!
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => {setGlobalCount(0); setObjects([{id: 1, localClicks: 0}, {id: 2, localClicks: 0}])}} style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '5px 10px', borderRadius: '6px', cursor: 'pointer', marginTop: '10px' }}>Reset</button>
    </div>
  );
};

// --- 2. COMPONENT: PASS BY REFERENCE/VALUE VISUALIZER ---
const PassObjectVisualizer = () => {
  const [carColor, setCarColor] = useState('#3b82f6'); 
  const [methodActive, setMethodActive] = useState(false);

  const simulateMethodCall = () => {
    setMethodActive(true);
    setTimeout(() => {
      setCarColor('#ef4444'); 
      setTimeout(() => setMethodActive(false), 1500);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            {/* STACK */}
            <div style={{ flex: 1, border: '2px solid #f59e0b', padding: '15px', borderRadius: '12px', background: 'rgba(245,158,11,0.05)' }}>
                <h4 style={{ color: '#f59e0b', textAlign: 'center', marginBottom: '15px' }}>STACK (Variables)</h4>
                
                <div style={{ background: '#1e293b', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Main()</div>
                    <div>Car <strong style={{color: '#fff'}}>myCar</strong> = <span style={{color: '#a855f7'}}>@X99</span></div>
                </div>

                <div style={{ background: methodActive ? '#334155' : '#1e293b', padding: '10px', borderRadius: '8px', opacity: methodActive ? 1 : 0.3, transition: '0.3s' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>changeColor(Car c)</div>
                    <div>Car <strong style={{color: '#fff'}}>c</strong> = <span style={{color: '#a855f7'}}>@X99</span></div>
                    <div style={{ fontSize: '0.8rem', color: '#22c55e', marginTop: '5px' }}>Copie dyal l'adresse (Reference)!</div>
                </div>
            </div>

            {/* HEAP */}
            <div style={{ flex: 1, border: '2px solid #a855f7', padding: '15px', borderRadius: '12px', background: 'rgba(168,85,247,0.05)' }}>
                <h4 style={{ color: '#a855f7', textAlign: 'center', marginBottom: '15px' }}>HEAP (Objects)</h4>
                <div style={{ background: 'rgba(0,0,0,0.4)', borderTop: `6px solid ${carColor}`, padding: '15px', borderRadius: '8px', textAlign: 'center', transition: '0.3s' }}>
                    <div style={{ color: '#a855f7', fontSize: '0.8rem', marginBottom: '10px' }}>Adresse: @X99</div>
                    <div style={{ fontSize: '2rem' }}>🚗</div>
                    <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Car Object</div>
                    <div style={{ color: carColor }}>color = "{carColor === '#3b82f6' ? 'Blue' : 'Red'}"</div>
                </div>
            </div>
        </div>
        
        <button 
            onClick={simulateMethodCall} 
            disabled={methodActive || carColor === '#ef4444'}
            style={{ padding: '12px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
            {carColor === '#ef4444' ? 'Object Modifie!' : 'Call: changeColor(myCar)'}
        </button>
        {carColor === '#ef4444' && <button onClick={() => setCarColor('#3b82f6')} style={{ background: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer' }}>Reset</button>}
    </div>
  );
};

// --- 3. COMPONENT: EQUALS VS == VISUALIZER ---
const EqualsVisualizer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ background: '#1e293b', border: '1px solid #475569', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>s1 (Ref: <span style={{color: '#a855f7'}}>@A11</span>)</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' }}>"Oujda"</div>
                </div>
                <div style={{ background: '#1e293b', border: '1px solid #475569', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>s2 (Ref: <span style={{color: '#3b82f6'}}>@B22</span>)</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' }}>"Oujda"</div>
                </div>
            </div>

            <div style={{ display: 'flex', width: '100%', gap: '15px', marginTop: '10px' }}>
                <div style={{ flex: 1, background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                    <h3>s1 == s2</h3>
                    <div style={{ fontSize: '1.5rem', color: '#ef4444', fontWeight: 'bold', margin: '10px 0' }}>FALSE</div>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Kat9aren l'adresses (Stack). @A11 machi hiya @B22.</p>
                </div>
                <div style={{ flex: 1, background: 'rgba(34,197,94,0.1)', border: '1px solid #22c55e', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                    <h3>s1.equals(s2)</h3>
                    <div style={{ fontSize: '1.5rem', color: '#22c55e', fontWeight: 'bold', margin: '10px 0' }}>TRUE</div>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Kat9aren l'mo7tawa (Heap). "Oujda" hiya "Oujda".</p>
                </div>
            </div>
        </div>
    )
}

// --- DATA: SLIDES CONTENT FOR PART 2 ---
export const slidesData: SlideContent[] = [
  
  // SLIDE 1: INTRO STATIC VARIABLES
  {
    id: 1,
    title: "1. The 'static' Keyword",
    subtitle: "L'milkiya dyal l'Class 🏢",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
            Ayy variable 3adi kaytzad m3a l'objet (kol instance 3endha l'copie dyalha). Mais l'variable <strong>static</strong> mcharikin fih ga3 les objets!
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li><code>static</code> kay3ni: <strong>Class Level</strong> (Kayn f l'moustawa dyal Class, machi l'objet).</li>
            <li>Kaytkhle9 merra we7da f l'memoire (f wa7d blassa smitha <em>Method Area</em>).</li>
            <li>Ila objet beddel fih, ga3 les objets lokhrin ghaychoufou tbeedila.</li>
        </ul>
        <p style={{ marginTop: '15px', color: '#f59e0b', fontSize: '0.9rem' }}>
            <em>Mital:</em> Compteur dyal ch7al men Employee kayn f charika (totalEmployees).
        </p>
      </div>
    ),
    visual: <StaticVisualizer />
  },

  // SLIDE 2: STATIC METHODS (UPDATED DEEP DIVE)
  {
    id: 2,
    title: "2. Static Methods",
    subtitle: "L'Adawat l'3amma (Public Utilities) 🛠️",
    layout: "code-focus",
    content: (
      <div>
        <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
            Tkhayel bghiti t7seb <code>5 + 5</code>. Wach darouri t-sayeb objet jdid dyal calculatrice (<code>new Calculator()</code>) ghir bach tdir addition? <strong>La!</strong>
        </p>
        <p>
            Hna kayji dawr dyal <strong>Static Methods</strong>. Homa des fonctions li katsyebhoum f l'Class, w t9der tkhdem bihom <strong>bla matsne3 hta objet</strong>.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '2.2' }}>
            <li><span style={{color: '#22c55e', fontWeight: 'bold'}}>Kifach kan3iytou liha:</span> B smiyt l'Class niche ➔ <code>Math.max(10, 20)</code>.</li>
            <li><span style={{color: '#ef4444', fontWeight: 'bold'}}>L'Fakh lkbir:</span> Method static <strong>MATQDERCH</strong> tkhdem b variables 3adiyin (Instance variables). 3lach? 7it hia khdama bla objet, donc makat3rafch l'khasayess dyal dak l'objet!</li>
        </ul>
      </div>
    ),
    codeSnippet: `public class MathUtils {
    int normalNumber = 10; // Variable 3adi (dyal l'objet)

    // Method Static (Khdam rasso b rasso)
    public static int add(int a, int b) {
        // ERROR: mat9derch tdir: return a + b + normalNumber;
        // 7it l'method static makat3raf hta objet!
        return a + b; 
    }
}

// F l'Main: Khdem biha bla 'new'!
int natija = MathUtils.add(5, 15); 
System.out.println(natija); // Ghat3ti 20
`
  },

  // SLIDE 3: STATIC NESTED CLASSES
  {
    id: 3,
    title: "3. Static Classes",
    subtitle: "Classe wste Classe 🪆",
    layout: "code-focus",
    content: (
      <div>
        <p>F Java, mat9derch tdir Class kbira (Outer) tkoun static. Mais t9der tdir Class ldaakhel (Inner) tkoun static.</p>
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Class 3adiya ldaakhel:</strong> Kat7taj l'Outer class tsne3 menha objet bach tkhdem.</li>
            <li><strong>Static Nested Class:</strong> Musta9illa! T9der tsne3 menha objet niche bla matsne3 l'Outer.</li>
        </ul>
      </div>
    ),
    codeSnippet: `public class Outer {
    
    // Static Nested Class
    static class Nested {
        public void hello() {
            System.out.println("Hello men dakehl!");
        }
    }
}

// F l'Main: 
// Chuf kifach kandeclariwha: Outer.Nested
Outer.Nested obj = new Outer.Nested();
obj.hello();
`
  },

  // SLIDE 4: PASSING OBJECTS TO METHODS
  {
    id: 4,
    title: "4. Passing Objects",
    subtitle: "By Value awla By Reference? 🤯",
    layout: "split",
    content: (
      <div>
        <h3 style={{ color: '#ef4444' }}>L'Fakh lkbir dyal Java:</h3>
        <p style={{ marginTop: '10px' }}>
          Java dima, DIMA <strong>Pass-by-Value</strong> (kat3ti l'copie).
        </p>
        <p style={{ marginTop: '15px' }}>
          Mais f les objets, dik l'Value hiya <strong>Reference (L'adresse f l'Heap)</strong>. Melli katsift objet l'chi method, kat3tiha <em>copie dyal l'adresse</em>. Bhal ila 3titi l'chi wa7ed l'URL dyal wa7ed l'fichier.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '1.8', fontSize: '0.9rem' }}>
            <li>Ila l'method dkhalat l'dak l'objet w bedlat fih (ex: <code>c.color = "Red"</code>) ➔ L'objet assli ghayttbedel f l'Heap.</li>
            <li>Ila l'method daret <code>c = new Car()</code> ➔ Ghaytsne3 objet jdid w l'assli ghayb9a kima kan.</li>
        </ul>
      </div>
    ),
    visual: <PassObjectVisualizer />
  },

  // SLIDE 5: RETURNING OBJECTS
  {
    id: 5,
    title: "5. Returning Objects",
    subtitle: "Rje3 l'Adresse 📦",
    layout: "code-focus",
    content: (
      <div>
        <p>Bhal kifach katsift objet f l'parametre, t9der terje3 Objet f l'Return type.</p>
        <p style={{ marginTop: '15px' }}>
          L'method katsne3 objet jdid f l'Heap, w melli kaddir <code>return</code>, katsiftlik ghir <strong>l'adresse</strong> dyalo (Reference) l'Stack dyalek.
        </p>
      </div>
    ),
    codeSnippet: `public class UserFactory {
    
    // L'method katsne3 w trje3 User object
    public User createAdmin(String name) {
        User u = new User(name);
        u.setRole("ADMIN");
        return u; // Kanerje3o l'adresse (ex: @X99)
    }
}

// F l'Main:
UserFactory factory = new UserFactory();
// myAdmin ghatched dik l'adresse @X99
User myAdmin = factory.createAdmin("Karim"); 
`
  },

  // SLIDE 6: COMPARING OBJECTS
  {
    id: 6,
    title: "6. Comparing Objects",
    subtitle: "== vs .equals() ⚖️",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
            Mo9aranat les objets machi hiya mo9aranat l'ar9am (Primitives bhal int awla double).
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li><strong style={{color: '#ef4444'}}>Opérateur ==</strong> : Kaychuf l'Stack. Wach 3endhom nefs <strong>l'Adresse</strong>? (Wach kaypointiw 3la nefs l'objet f l'Heap?).</li>
            <li><strong style={{color: '#22c55e'}}>Méthode .equals()</strong> : Katchuf l'Heap. Wach 3endhom nefs <strong>l'Mo7tawa</strong>? (Values de l'objet).</li>
        </ul>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '3px solid #3b82f6'}}>
            ⚠️ <strong>Rule:</strong> F les Strings, dima, DIMA khdem b <code>.equals()</code> bach t9aren l'ktaba. <code>==</code> ghatkherj 3lik f l'bugs!
        </div>
      </div>
    ),
    visual: <EqualsVisualizer />
  }
];