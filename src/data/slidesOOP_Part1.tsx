// src/data/slidesOOP_Part1.tsx
"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: CLASS VS OBJECT VISUALIZER ---
const BlueprintVisualizer = () => {
  const [objects, setObjects] = useState<{ id: number, color: string, speed: number }[]>([]);
  const [count, setCount] = useState(0);

  const colors = ['#ef4444', '#3b82f6', '#22c55e', '#a855f7', '#f59e0b'];

  const createObject = () => {
    if (objects.length >= 4) return;
    const newObj = {
      id: count + 1,
      color: colors[count % colors.length],
      speed: Math.floor(Math.random() * 100) + 100
    };
    setObjects([...objects, newObj]);
    setCount(count + 1);
  };

  const reset = () => {
    setObjects([]);
    setCount(0);
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* THE BLUEPRINT (CLASS) */}
      <div style={{ 
        flex: '0 0 250px', border: '2px dashed #3b82f6', borderRadius: '12px', 
        padding: '20px', background: 'rgba(59, 130, 246, 0.1)' 
      }}>
        <h3 style={{ color: '#3b82f6', textAlign: 'center', borderBottom: '1px solid #3b82f6', paddingBottom: '10px' }}>
          L'Moule (Class: Car)
        </h3>
        <ul style={{ marginTop: '15px', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <li><span style={{color: '#f59e0b'}}>String</span> color;</li>
          <li><span style={{color: '#f59e0b'}}>int</span> maxSpeed;</li>
          <li><span style={{color: '#a855f7'}}>void</span> drive()</li>
        </ul>
        <button 
          onClick={createObject}
          style={{ 
            marginTop: '20px', width: '100%', padding: '10px', 
            background: '#3b82f6', color: 'white', borderRadius: '6px', 
            fontWeight: 'bold', cursor: 'pointer', border: 'none'
          }}
        >
          new Car() 
        </button>
      </div>

      <div style={{ fontSize: '2rem', color: '#64748b' }}></div>

      {/* THE HEAP (OBJECTS) */}
      <div style={{ 
        flex: 1, border: '2px solid #a855f7', borderRadius: '12px', padding: '20px', 
        background: 'rgba(168, 85, 247, 0.1)', minHeight: '250px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ color: '#a855f7' }}>L'Kika (Objects in Heap)</h3>
          <button onClick={reset} style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Reset</button>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {objects.length === 0 && <p style={{color: '#64748b', fontStyle: 'italic', width: '100%', textAlign: 'center', marginTop: '40px'}}>Kliquer 3la 'new Car()' bach tsne3 object f l'memoire.</p>}
          {objects.map((obj) => (
            <div key={obj.id} style={{ 
              background: 'rgba(0,0,0,0.4)', borderTop: `4px solid ${obj.color}`, padding: '10px', 
              borderRadius: '8px', width: '120px', animation: 'fadeIn 0.4s ease-out'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ref: @C{obj.id}9</div>
              <div style={{ fontWeight: 'bold', marginTop: '5px' }}>Car #{obj.id}</div>
              <div style={{ fontSize: '0.8rem', marginTop: '5px', color: obj.color }}>Color: {obj.color}</div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Speed: {obj.speed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 2. COMPONENT: 'THIS' KEYWORD VISUALIZER ---
const ThisVisualizer = () => {
    const [activeCar, setActiveCar] = useState(1);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => setActiveCar(1)} style={{ padding: '10px', borderRadius: '8px', border: activeCar === 1 ? '2px solid #3b82f6' : '1px solid #334155', background: activeCar === 1 ? 'rgba(59, 130, 246, 0.2)' : 'transparent', color: '#fff' }}>
                    Car 1 (BMW)
                </button>
                <button onClick={() => setActiveCar(2)} style={{ padding: '10px', borderRadius: '8px', border: activeCar === 2 ? '2px solid #ef4444' : '1px solid #334155', background: activeCar === 2 ? 'rgba(239, 68, 68, 0.2)' : 'transparent', color: '#fff' }}>
                    Car 2 (Audi)
                </button>
            </div>

            <div style={{ padding: '20px', background: '#0f172a', border: '1px solid #475569', borderRadius: '12px', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Melli kan3eytou l: <code>car{activeCar}.printInfo()</code></p>
                <div style={{ fontSize: '1.2rem', color: '#f8fafc' }}>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>this</span>.model  <span style={{ color: activeCar === 1 ? '#3b82f6' : '#ef4444', fontWeight: 'bold' }}>{activeCar === 1 ? '"BMW"' : '"Audi"'}</span>
                </div>
                <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <strong>"this"</strong> kat3ni "Ana". F had l'khatwa, "Ana" hiya Car {activeCar}.
                </p>
            </div>
        </div>
    )
}

// --- 3. COMPONENT: COPY CONSTRUCTOR VISUALIZER ---
const CopyConstructorVisualizer = () => {
  const [mode, setMode] = useState<"none" | "reference" | "copy">("none");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
            onClick={() => setMode("reference")}
            style={{ padding: '10px 15px', background: mode === 'reference' ? '#ef4444' : '#1e293b', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            1. user2 = user1 (Ghalat)
        </button>
        <button 
            onClick={() => setMode("copy")}
            style={{ padding: '10px 15px', background: mode === 'copy' ? '#22c55e' : '#1e293b', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            2. user2 = new User(user1) (S7i7)
        </button>
      </div>

      <div style={{ display: 'flex', gap: '40px', marginTop: '20px', width: '100%', justifyContent: 'center' }}>
        {/* STACK */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ padding: '10px 20px', border: '2px solid #f59e0b', borderRadius: '8px', textAlign: 'center', background: 'rgba(245,158,11,0.1)' }}>
                <strong>user1</strong> <br/>
                <span style={{ fontSize: '0.8rem', color: '#f59e0b' }}>@X123</span>
            </div>
            
            {mode !== "none" && (
                <div style={{ padding: '10px 20px', border: '2px solid #3b82f6', borderRadius: '8px', textAlign: 'center', background: 'rgba(59,130,246,0.1)' }}>
                    <strong>user2</strong> <br/>
                    <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>
                        {mode === "reference" ? "@X123 (Nefs l'adresse)" : "@Y999 (Adresse Jdida)"}
                    </span>
                </div>
            )}
        </div>

        {/* HEAP */}
        <div style={{ border: '2px dashed #a855f7', padding: '20px', borderRadius: '12px', minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '10px', background: '#0f172a', padding: '0 5px', color: '#a855f7', fontSize: '0.8rem' }}>HEAP</div>
            
            {/* Original Object */}
            <div style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid #a855f7', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ color: '#ccc', fontSize: '0.8rem' }}>@X123</div>
                <strong>[User Object]</strong><br/>
                <span style={{ fontSize: '0.9rem' }}>name: "Ali"</span>
            </div>

            {/* Copied Object */}
            {mode === "copy" && (
                <div style={{ background: 'rgba(34,197,94,0.2)', border: '1px solid #22c55e', padding: '10px', borderRadius: '8px', textAlign: 'center', animation: 'fadeIn 0.5s' }}>
                    <div style={{ color: '#ccc', fontSize: '0.8rem' }}>@Y999</div>
                    <strong>[User Object]</strong><br/>
                    <span style={{ fontSize: '0.9rem' }}>name: "Ali"</span>
                </div>
            )}
            
            {mode === "reference" && (
                <div style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem', maxWidth: '150px' }}>
                    user1 w user2 kaypointiw 3la nefs l'kika! Ila kla mnha user2, user1 ghayl9aha mklia.
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

// --- DATA: SLIDES CONTENT ---
export const slidesData: SlideContent[] = [
  // SLIDE 1: INTRO CLASSES
  {
    id: 1,
    title: "1. Classes & Objects",
    subtitle: "L'Moule vs L'Kika",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.2rem', marginBottom: '20px'}}>
            Bghina nsseybou un programme li kayjeri les etudiants. Wach ghanb9aw ndirou: <br/>
            <code>String nom1, int age1; String nom2, int age2;</code>? <br/>
            <strong>Rwina w tkherbzi9!</strong>
        </p>
        <p>
            L'OOP (Object-Oriented Programming) jabt lina l7el: <strong>L'Class</strong>.
        </p>
        <ul style={{ marginTop: '20px', lineHeight: '2' }}>
            <li><strong style={{color: '#3b82f6'}}>La Classe (Blueprint):</strong> Hiya l'moule (Tessmim). Makatstahlekch l'memoire. Katwecef ghir chno khass ykoun.</li>
            <li><strong style={{color: '#a855f7'}}>L'Objet (Instance):</strong> Houwa l'kika li kherjat men l'moule. Hada houwa li kaytstocka f l'Heap memory w kayakhod blassa.</li>
        </ul>
      </div>
    ),
    visual: <BlueprintVisualizer />
  },

  // SLIDE 2: ANATOMY OF A CLASS
  {
    id: 2,
    title: "2. Anatomy of a Class",
    subtitle: "State & Behavior",
    layout: "code-focus",
    content: (
      <div>
        <p>Ayy Classe f dnya (Etudiant, Tonobila, CompteBancaire...) fiha 2 hwayej assasiyin:</p>
        <ul style={{ marginTop: '20px', lineHeight: '2.2' }}>
            <li><span style={{color: '#f59e0b', fontWeight: 'bold'}}>Attributes (State/Variables):</span> L'khasayess dyalha. (Matalan: smiya, age, solde). Chno l'objet <strong>"3endou"</strong>.</li>
            <li><span style={{color: '#22c55e', fontWeight: 'bold'}}>Methods (Behavior/Actions):</span> Chno t9der dir. L'af3al. (Matalan: ta9ra(), virerFlous()). Chno l'objet <strong>"kaydir"</strong>.</li>
        </ul>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '3px solid #3b82f6'}}>
            Tip: F'Java, smiyt L'class dima katbda b Majuscule (PascalCase). Matalan: Student machi student.
        </div>
      </div>
    ),
    codeSnippet: `// Blueprint dyal ay etudiant f l'universite
public class Student {
    
    // 1. Attributes (State) -> Chno 3endou
    String name;
    int age;
    double gpa;

    // 2. Methods (Behavior) -> Chno kaydir
    public void study() {
        System.out.println(name + " is studying hard!");
    }
}`
  },

  // SLIDE 3: MEMORY & THE 'NEW' KEYWORD
  {
    id: 3,
    title: "3. The 'new' Keyword",
    subtitle: "Khle9 w 3ti l'Adresse",
    layout: "split",
    content: (
      <div>
        <h3 style={{color: '#ef4444'}}>L'khata2 li kaydirouh ga3 l'moubtadi2in:</h3>
        <p style={{ marginTop: '10px' }}>Kayktbou <code>Student s1;</code> w kays7ablihoum rahoum saybou etudiant. <strong>La!</strong></p>
        <p style={{ marginTop: '15px' }}>
            Hadi ghir sayebti fiha variable <code>s1</code> f <strong>Stack</strong> (katsenna reference), makayn hta etudiant f l'<strong>Heap</strong>.
        </p>
        <p style={{ marginTop: '20px', color: '#22c55e', fontWeight: 'bold' }}>
            Khassk darouri l'mot cle "new":
        </p>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
            <li><code>new</code>: Katsne3 lik blassa f l'Heap (Objet jdid).</li>
            <li>Katrje3 lik <strong>l'Adresse</strong> dyalo (Reference).</li>
            <li>Dik l'adresse katstocka f <code>s1</code>.</li>
        </ul>
      </div>
    ),
    visual: (
        <div style={{ padding: '20px', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }}>
            <h4 style={{ color: '#cbd5e1', marginBottom: '15px', textAlign: 'center' }}>Student s1 = new Student();</h4>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#f59e0b', fontSize: '0.8rem' }}>STACK</div>
                    <div style={{ padding: '10px 20px', border: '2px solid #f59e0b', borderRadius: '8px', marginTop: '5px' }}>
                        <strong>s1</strong><br/><span style={{fontSize: '0.8rem', opacity: 0.7}}>@X99</span>
                    </div>
                </div>
                <div style={{ fontSize: '2rem', color: '#3b82f6' }}>  </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#a855f7', fontSize: '0.8rem' }}>HEAP</div>
                    <div style={{ padding: '10px 20px', border: '2px solid #a855f7', borderRadius: '8px', marginTop: '5px' }}>
                        <strong>[Student Object]</strong><br/>
                        <span style={{fontSize: '0.8rem', opacity: 0.7}}>name: null, age: 0</span><br/>
                        <span style={{fontSize: '0.7rem', color: '#a855f7'}}>Address: @X99</span>
                    </div>
                </div>
            </div>
        </div>
    )
  },

  // SLIDE 4: THE CONSTRUCTOR
  {
    id: 4,
    title: "4. L'Constructeur",
    subtitle: "L'Usine dyal l'Objet",
    layout: "code-focus",
    content: (
      <div>
        <p>Melli kandirou <code>new Student()</code>, chno hiya had <code>Student()</code> li biha l'a9wass?</p>
        <p style={{ marginTop: '15px' }}>
           Hada houwa <strong>l'Constructor</strong>. Method special katkhdem <strong>merra we7da f l'3mer</strong> dyal l'objet: f l'w9ita fin kaytkhle9.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <li>Smiyto dima <strong>mtaab9a 100%</strong> m3a smiyt l'Class.</li>
            <li><strong>Ma3endouch Return Type</strong> (Makadirch <code>void</code> wla <code>int</code>).</li>
            <li>L'hdaf dyalo: y3ti l'valeurs lwlin (Initialisation) bach l'objet maytzadch khawi (null).</li>
        </ul>
      </div>
    ),
    codeSnippet: `public class Car {
    String model;
    int year;

    // HADA HOUWA L'CONSTRUCTOR
    public Car(String carModel, int carYear) {
        model = carModel;
        year = carYear;
        System.out.println("Tonobila tsaybat!");
    }
}

// F l'Main:
// Hna katkhdem l'usine w katsift l'parametres
Car myCar = new Car("Mercedes", 2024); `
  },

  // SLIDE 5: THE 'THIS' KEYWORD
  {
    id: 5,
    title: "5. L'mot cle 'this'",
    subtitle: "Ana, Nta, w Houwa",
    layout: "split",
    content: (
      <div>
        <p>F l'Constructor lfou9, ktabna <code>model = carModel;</code> bach nferr9ou bin l'variable dyal l'class w l'parametre. Mais machi pratique.</p>
        <p style={{ marginTop: '15px' }}>
           Professional developers kaykhelliw nefs ssemya: <code>(String model)</code>. Hna Java kaytleft, chkoun howa l'model dyal l'class w chkoun l'parametre?
        </p>
        <div style={{marginTop: '20px', padding: '15px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', borderRadius: '8px'}}>
            <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>Enter 'this'</h4>
            <p style={{ fontSize: '0.95rem' }}>
                <code>this</code> katsawwi <strong>"L'objet l7ali"</strong>. Bhal ila katchiyyer l rassek. <br/>
                <code>this.model = model;</code> kats3ni: <br/>
                "L'model dyali ANA (l'objet) kaytssawi l'model li jbti li f l'parametre."
            </p>
        </div>
      </div>
    ),
    visual: <ThisVisualizer />
  },

  // SLIDE 6: CONSTRUCTOR OVERLOADING
  {
    id: 6,
    title: "6. Constructeurs Multiples",
    subtitle: "Overloading (L'ikhtiyar)",
    layout: "code-focus",
    content: (
      <div>
        <p>T9der tdir ch7al men usine f nefs l'class. Kola usine katsne3 l'objet b tariqa (Overloading).</p>
        <p style={{ marginTop: '15px' }}>
           L'qanoun: Khass ykoun 3endhom <strong>parametres mkhtelfin</strong>.
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <li><strong>Default Constructor:</strong> Khawi. Mnin makatkteb walo.</li>
            <li><strong>Parameterized Constructor:</strong> Kayched l'valeurs bach y-initialisi bihom l'attributes.</li>
        </ul>
      </div>
    ),
    codeSnippet: `public class User {
    String username;
    String role;

    // 1. Usine 1 (Default: User 3adi)
    public User(String username) {
        this.username = username;
        this.role = "Guest";
    }

    // 2. Usine 2 (Parametrized)
    public User(String username, String role) {
        this.username = username;
        this.role = role;
    }
}

// F l'Main:
User u1 = new User("amine"); // Role -> Guest
User u2 = new User("admin", "Admin"); // Role -> Admin`
  },

  // SLIDE 7: COPY CONSTRUCTOR (NEW!)
  {
    id: 7,
    title: "7. Copy Constructor",
    subtitle: "L'Vrai Photocopie dyal l'Objet",
    layout: "split",
    content: (
      <div>
        <h3 style={{ color: '#ef4444' }}>L'Ghalat Lkbir:</h3>
        <p style={{ marginTop: '10px' }}>
          Ila derti <code>User u2 = u1;</code> rak <strong>MAsayebtich</strong> objet jdid! Rak ghir 3titi l'adresse dyal <code>u1</code> l <code>u2</code>. Bjoujhoum kayt7ekmou f nefs l'objet f l'Heap.
        </p>
        <h3 style={{ color: '#22c55e', marginTop: '20px' }}>L'Hell (Copy Constructor):</h3>
        <p style={{ marginTop: '10px' }}>
          Kansaybou wa7ed l'usine (Constructor) l'khdma dyalha ghir tched objet 9dim, w t-copier l'khasayess dyalo f objet jdid (Adresse jdida f l'Heap).
        </p>
      </div>
    ),
    visual: <CopyConstructorVisualizer />
  },
  
  // SLIDE 8: COPY CONSTRUCTOR CODE
  {
    id: 8,
    title: "8. Copy Constructor (Code)",
    subtitle: "Kifach nktbouh?",
    layout: "code-focus",
    content: (
      <div>
        <p>Hna kifach kanktbou l'Copy Constructor f Java.</p>
        <p style={{ marginTop: '15px' }}>
          L'parametre li kayched houwa <strong>Objet men nefs l'Class</strong>. W kaybdya yhez l'valeurs dyalo w y7ethoum f l'objet jdid (`this`).
        </p>
      </div>
    ),
    codeSnippet: `public class User {
    String username;

    // 1. Normal Constructor
    public User(String username) {
        this.username = username;
    }

    // 2. THE COPY CONSTRUCTOR
    public User(User oldUser) {
        // Kanhezou l'username dyal l'9dim w n7etoh f jdid
        this.username = oldUser.username; 
    }
}

// F l'Main:
User u1 = new User("Karim");

// Haka katsne3 VRAI photocopie (Objet jdid f l'Heap)
User u2 = new User(u1); 

// Daba ila beddelna u2, u1 makayw9e3 lih walou!
`
  }
];