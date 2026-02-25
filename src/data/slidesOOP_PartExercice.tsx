// src/data/slidesOOP_PartExercice.tsx
"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: SOLUTION REVEALER ---
// Hada component ghadi ykhelik tkhbe3 l'jawab 7ta tfker m3a l'etudiants
const SolutionRevealer = ({ question, hint, solution }: { question: React.ReactNode, hint: string, solution: string }) => {
    const [showHint, setShowHint] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '15px', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>L'm المطلوب:</h4>
                <div style={{ fontSize: '1rem', lineHeight: '1.6' }}>{question}</div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                    onClick={() => setShowHint(!showHint)}
                    style={{ background: '#1e293b', color: '#f59e0b', border: '1px solid #f59e0b', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' }}
                >
                    {showHint ? 'Khbe3 l\'Indice' : 'Werrini Indice 💡'}
                </button>
                <button 
                    onClick={() => setShowSolution(!showSolution)}
                    style={{ background: showSolution ? '#ef4444' : '#22c55e', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {showSolution ? 'Khbe3 l\'Jawab' : 'Chuf l\'Jawab 🚀'}
                </button>
            </div>

            {showHint && !showSolution && (
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px', borderRadius: '8px', color: '#fcd34d', fontSize: '0.9rem', animation: 'fadeIn 0.3s' }}>
                    <strong>Indice:</strong> {hint}
                </div>
            )}

            {showSolution && (
                <div style={{ background: '#0f172a', border: '1px solid #22c55e', padding: '15px', borderRadius: '8px', animation: 'fadeIn 0.5s' }}>
                    <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>Solution:</h4>
                    <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.85rem', overflowX: 'auto', fontFamily: 'monospace' }}>
                        {solution}
                    </pre>
                </div>
            )}
        </div>
    );
};

// --- 2. COMPONENT: BOSS LEVEL QUIZ VISUALIZER ---
const BossQuiz = () => {
    const [score, setScore] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            q: "Ila derti 'Student s1;' f l'Main, wach l'objet tkhle9 f l'Heap?",
            options: ["Ah, tkhle9 w khawi", "La, 3ad khassna 'new'", "Ah, tkhle9 f l'Stack"],
            answer: 1,
            explanation: "Bla 'new', rak sayebti ghir reference (ssarout) f l'Stack."
        },
        {
            q: "Wach l'Method Static t9der tkhdem b variables dyal l'Instance (Non-static)?",
            options: ["Dima", "La, mousta7il", "Ghir ila kanet public"],
            answer: 1,
            explanation: "Static method makat3ref hta objet, donc mat9derch t-acceder l'khasayess dyal objet."
        },
        {
            q: "F l'Inheritance, chno hia awel 7aja kaydirha l'Constructor dyal l'Weld?",
            options: ["Kay-initialisi l'variables dyalo", "Kay-returni l'adresse", "Kay3iyyet l'Constructor dyal l'Walid (super)"],
            answer: 2,
            explanation: "Dima 'super()' hia lewla, mat9derch tbni l'weld 7ta tbni l'walid."
        }
    ];

    const handleAnswer = (index: number) => {
        if (index === questions[currentQ].answer) setScore(score + 1);
        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setScore(0);
        setCurrentQ(0);
        setShowResult(false);
    };

    if (showResult) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(34, 197, 94, 0.1)', border: '2px solid #22c55e', borderRadius: '12px', width: '100%' }}>
                <h2 style={{ color: '#22c55e' }}>Natija: {score} / {questions.length}</h2>
                <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>
                    {score === 3 ? 'Tbarkllah 3lik! Nadi f l\'OOP 🏆' : 'Khassk traje3 chwiya l\'basics a bro 📚'}
                </p>
                <button onClick={reset} style={{ marginTop: '20px', padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>3awed l'Quiz</button>
            </div>
        )
    }

    return (
        <div style={{ background: '#0f172a', border: '1px solid #475569', padding: '20px', borderRadius: '12px', width: '100%' }}>
            <h3 style={{ color: '#c084fc', marginBottom: '15px' }}>Sou2al {currentQ + 1} / {questions.length}</h3>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{questions[currentQ].q}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {questions[currentQ].options.map((opt, idx) => (
                    <button 
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        style={{ padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid #334155', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: '0.2s hover:bg-slate-700' }}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}

// --- DATA: SLIDES CONTENT FOR EXERCICES ---
export const slidesData: SlideContent[] = [
  
  // SLIDE 1: INTRO EXERCISES
  {
    id: 1,
    title: "Tp & Exercices",
    subtitle: "Wejed rassek l'khedma 💻",
    layout: "center",
    content: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏋️‍♂️</div>
        <h2>L'we9t dyal l'Pratique!</h2>
        <p style={{ marginTop: '15px', fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '15px auto' }}>
            F had la partie, ghadi ntb9ou ga3 dakchi li 9rina (Classes, Constructors, Encapsulation, w Inheritance).
            Niveau ghadi ytla3 b chwiya b chwiya. Kteb l'code f l'IDE dyalek (Eclipse awla IntelliJ) w 9arno m3a l'solution.
        </p>
      </div>
    )
  },

  // SLIDE 2: EXERCICE 1 (EASY)
  {
    id: 2,
    title: "Exercice 1: Niveau Sahel",
    subtitle: "Tasnim Class w Object",
    layout: "split",
    content: (
      <SolutionRevealer 
        question={
            <ul style={{ paddingLeft: '20px' }}>
                <li>Sayeb Class smitha <code>Book</code>.</li>
                <li>Zid liha 2 attributes: <code>title</code> (String) w <code>author</code> (String).</li>
                <li>Sayeb <strong>Constructor</strong> kay-initialisi had 2 attributes.</li>
                <li>Sayeb method <code>printDetails()</code> kat-affichi: "Titre by Auteur".</li>
                <li>F l'Main, sne3 ktab w 3iyyet l'method.</li>
            </ul>
        }
        hint="Tfker test3mel l'mot cle 'this' f l'constructor bach tferre9 bin l'variables w l'parametres."
        solution={`public class Book {
    String title;
    String author;

    // Constructor
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    // Method
    public void printDetails() {
        System.out.println(this.title + " by " + this.author);
    }

    public static void main(String[] args) {
        Book b1 = new Book("Atomic Habits", "James Clear");
        b1.printDetails();
    }
}`}
      />
    ),
    visual: (
        <div style={{ padding: '20px', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
            <h3 style={{ color: '#22c55e', marginBottom: '10px' }}>Objectif:</h3>
            <p style={{ color: '#94a3b8' }}>T-maitriser l'khli9 dyal l'Objet b <code>new</code> w l'Constructor.</p>
        </div>
    )
  },

  // SLIDE 3: EXERCICE 2 (MEDIUM)
  {
    id: 3,
    title: "Exercice 2: Niveau Moutawassit",
    subtitle: "Encapsulation w Security",
    layout: "split",
    content: (
      <SolutionRevealer 
        question={
            <ul style={{ paddingLeft: '20px' }}>
                <li>Sayeb Class <code>Player</code>.</li>
                <li>Zid attribute <code>health</code> (int) w dirha <strong>private</strong>.</li>
                <li>Sayeb Getter bach n9raw <code>health</code>.</li>
                <li>Sayeb Setter <code>setHealth(int hp)</code> fih condition: Ila kan <code>hp</code> sgher mn 0, rje3 <code>health</code> 0 (maymkench ykoun salib).</li>
            </ul>
        }
        hint="L'objectif hna howa matkhellich chi wa7ed ydir player.health = -50 f l'Main. Khassou ydouz mn Setter."
        solution={`public class Player {
    // Private State
    private int health;

    // Constructor
    public Player(int initialHealth) {
        setHealth(initialHealth); // Kansta3mlou l'setter 7ta f constructor!
    }

    // Getter
    public int getHealth() {
        return this.health;
    }

    // Setter m3a Validation (Risk Management)
    public void setHealth(int hp) {
        if (hp < 0) {
            this.health = 0;
            System.out.println("Warning: Health set to 0");
        } else if (hp > 100) {
            this.health = 100;
        } else {
            this.health = hp;
        }
    }
}`}
      />
    ),
    visual: (
        <div style={{ padding: '20px', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '10px' }}>Objectif:</h3>
            <p style={{ color: '#94a3b8' }}>N7miw l'etat dyal l'Objet b <code>private</code> w ndirou validation f l'Setter.</p>
        </div>
    )
  },

  // SLIDE 4: EXERCICE 3 (HARD)
  {
    id: 4,
    title: "Exercice 3: Niveau S3ib",
    subtitle: "Inheritance w Super()",
    layout: "split",
    content: (
      <SolutionRevealer 
        question={
            <ul style={{ paddingLeft: '20px' }}>
                <li>Sayeb Class <code>Animal</code> (L'Walid) fiha: <code>String name</code> w constructor kayched l'name.</li>
                <li>Zid method <code>makeSound()</code> katgoul "Some sound".</li>
                <li>Sayeb Class <code>Dog</code> (L'Weld) kat-wirret mn Animal.</li>
                <li>Dog 3endou attribute jdid <code>breed</code> (slala).</li>
                <li>Sayeb constructor l'Dog kayched (name, breed) w kaysift name l'Walid.</li>
                <li>Dir <strong>Override</strong> l'method <code>makeSound()</code> bach tgoul "Bark!".</li>
            </ul>
        }
        hint="Matnsach l'mot cle 'extends' w 'super(name)' f awel ster dyal l'constructor dyal Dog."
        solution={`// PARENT
public class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void makeSound() {
        System.out.println("Some generic sound");
    }
}

// CHILD
public class Dog extends Animal {
    String breed;

    public Dog(String name, String breed) {
        super(name); // Katsift name l'Animal
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println("Bark! Bark!");
    }
}`}
      />
    ),
    visual: (
        <div style={{ padding: '20px', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
            <h3 style={{ color: '#ef4444', marginBottom: '10px' }}>Objectif:</h3>
            <p style={{ color: '#94a3b8' }}>Fhem kifach tnada3 l'Walid mn l'Weld (<code>super()</code>) w tbeddel l'af3al (Overriding).</p>
        </div>
    )
  },

  // SLIDE 5: BOSS LEVEL (INTERACTIVE QUIZ)
  {
    id: 5,
    title: "Boss Level: The Ultimate Test",
    subtitle: "Wach chditi l'basics? 🎯",
    layout: "center",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '700px' }}>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#cbd5e1' }}>
              Hada akhir test likoum f had l'Masterclass. Jereb tjawb 3la had l'as2ila bla matchuf l'code!
          </p>
          <BossQuiz />
      </div>
    )
  }
];