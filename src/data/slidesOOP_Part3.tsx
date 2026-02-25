// src/data/slidesOOP_Part3.tsx
"use client";

import React, { useState } from 'react';
import { SlideContent } from '../types';

// --- 1. COMPONENT: ENCAPSULATION BANK VISUALIZER ---
const BankAccountVisualizer = () => {
    const [balance, setBalance] = useState(1000);
    const [message, setMessage] = useState("Sme3t b'Encapsulation? Jereb tbeddel l'solde.");
    const [msgColor, setMsgColor] = useState("#94a3b8");
    const [shake, setShake] = useState(false);

    const handleDirectAccess = () => {
        setMessage("ERROR: 'balance' is private! Access Denied (Risk of Hack) ❌");
        setMsgColor("#ef4444");
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const handleValidDeposit = () => {
        setBalance(prev => prev + 500);
        setMessage("SUCCESS: deposit(500) worked! State is safe ✅");
        setMsgColor("#22c55e");
    };

    const handleInvalidWithdraw = () => {
        setMessage("DENIED: withdraw(5000) failed. Solde makafich! ⚠️");
        setMsgColor("#f59e0b");
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
            {/* The Object (Safe) */}
            <div style={{ 
                background: '#0f172a', border: '2px solid #334155', padding: '20px', 
                borderRadius: '12px', textAlign: 'center', width: '100%', maxWidth: '350px',
                transform: shake ? 'translateX(10px)' : 'translateX(0)',
                transition: 'transform 0.1s ease-in-out',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
            }}>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>Bank Account Object</div>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏦</div>
                
                {/* Private Data */}
                <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px dashed #ef4444', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                        PRIVATE
                    </div>
                    <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5px' }}>
                        balance = ${balance}
                    </div>
                </div>
            </div>

            {/* Actions (Outside World) */}
            <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                    onClick={handleDirectAccess}
                    style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    account.balance = 99999;
                </button>
                <button 
                    onClick={handleValidDeposit}
                    style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid #22c55e', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    account.deposit(500);
                </button>
                <button 
                    onClick={handleInvalidWithdraw}
                    style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid #f59e0b', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    account.withdraw(5000);
                </button>
            </div>

            <div style={{ minHeight: '30px', color: msgColor, fontWeight: 'bold', marginTop: '10px', textAlign: 'center', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', width: '100%', maxWidth: '450px' }}>
                {message}
            </div>
        </div>
    );
};

// --- 2. COMPONENT: ACCESS MODIFIERS VISUALIZER ---
const AccessModifiersVisualizer = () => {
    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: '#cbd5e1' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '15px', borderBottom: '2px solid #334155', color: '#f8fafc' }}>Modifier</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #334155' }}>Class</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #334155' }}>Package</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #334155' }}>Subclass (Child)</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #334155' }}>World</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#22c55e', fontWeight: 'bold' }}>public</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#3b82f6', fontWeight: 'bold' }}>protected</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#ef4444' }}>❌</td>
                    </tr>
                   
                    <tr>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#ef4444', fontWeight: 'bold' }}>private</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b' }}>✅</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#ef4444' }}>❌</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#ef4444' }}>❌</td>
                        <td style={{ padding: '15px', borderBottom: '1px solid #1e293b', color: '#ef4444' }}>❌</td>
                    </tr>
                </tbody>
            </table>
            <p style={{ marginTop: '15px', fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>
                Hada howa l'matrix li khassek t3ref bach t-jeri l'access f Java.
            </p>
        </div>
    )
}

// --- DATA: SLIDES CONTENT FOR PART 3 ---
export const slidesData: SlideContent[] = [
  
  // SLIDE 1: INTRO ENCAPSULATION
  {
    id: 1,
    title: "1. Encapsulation",
    subtitle: "Risk Management dyal l'Objet 🛡️",
    layout: "split",
    content: (
      <div>
        <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
            Tkhayel 3endek compte f banka, w ay wa7ed f chare3 y9der ydir <code>compte.solde = 0;</code>. Hadi hiya l'karita l'kubra f software!
        </p>
        
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Encapsulation:</strong> Hiya tkhzbi l'data l'hassasa (Variables) dakhil l'Class.</li>
            <li>Matkhli hta wa7ed men berra l'Class y-modifiha awla ychufha directement.</li>
            <li>Katsayeb <strong>Gateways</strong> (Bibane) mro9bin bach t-accèder l'dik l'data.</li>
        </ul>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444'}}>
            💡 <strong>Goal:</strong> Ne7miw l'etat (state) dyal l'objet men les valeurs li machi logiques (bhal age negatif).
        </div>
      </div>
    ),
    visual: <BankAccountVisualizer />
  },

  // SLIDE 2: ACCESS MODIFIERS
  {
    id: 2,
    title: "2. Access Modifiers",
    subtitle: "Chkoun 3endou ssaarout? 🔑",
    layout: "center",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
        <p style={{ marginBottom: '20px', fontSize: '1.1rem', textAlign: 'center' }}>
            Java kat3tik 4 dyal les niveaux dyal l'amane (Security levels) bach t7dded chkoun y9der ychuf l'variables awla l'methods dyalek.
        </p>
        <AccessModifiersVisualizer />
      </div>
    )
  },

  // SLIDE 3: GETTERS & SETTERS
  {
    id: 3,
    title: "3. Getters & Setters",
    subtitle: "L'3essass dyal l'Class 👮",
    layout: "code-focus",
    content: (
      <div>
        <p>Bima anana darna l'variables <code>private</code>, kifach l'Main ghadi ykhedem bihoum?</p>
        <p style={{ marginTop: '15px' }}>
            Kansaybou des methodes <code>public</code> li homa:
        </p>
        <ul style={{ marginTop: '15px', lineHeight: '2' }}>
            <li><strong style={{color: '#3b82f6'}}>Getter (Read):</strong> Katrje3 lik l'valeur. Bhal ila katsowwl l'3essass "Ch7al sa3a?".</li>
            <li><strong style={{color: '#22c55e'}}>Setter (Write):</strong> Kat3tiha l'valeur jdida bach tbeddlha. L'3essass kayverifi 9bel maybdel.</li>
        </ul>
      </div>
    ),
    codeSnippet: `public class Person {
    // 1. Data is HIDDEN (private)
    private String name;
    private int age;

    // 2. GETTER: Chuf l'data
    public String getName() {
        return this.name;
    }

    // 3. SETTER: Beddel l'data m3a validation!
    public void setAge(int newAge) {
        if (newAge > 0 && newAge < 120) {
            this.age = newAge;
        } else {
            System.out.println("Error: Age invalid!");
        }
    }
}
`
  },

  // SLIDE 4: READ-ONLY CLASSES
  {
    id: 4,
    title: "4. Read-Only Objects",
    subtitle: "Tchuf w mat9issch 👁️",
    layout: "code-focus",
    content: (
      <div>
        <p>Machi darouri dima dir Getter w Setter bjouj. T9der tdir design dyal objet li kaytkhleq w kayt9ra ghir w ma3emrou yetbedel.</p>
        <p style={{ marginTop: '15px' }}>
            Hadi katssema <strong>Immutability</strong>. Khessek ghir tdir l'variables <code>private</code>, dir <strong>Getter</strong>, w MATDIRCH <strong>Setter</strong>.
        </p>
        <div style={{marginTop: '20px', padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '3px solid #3b82f6', fontSize: '0.9rem'}}>
            🚀 <strong>Pro Tip:</strong> Had l'concept kaykhedmou bih bzaf f l'architecture microservices w security tokens.
        </div>
      </div>
    ),
    codeSnippet: `public class BankCard {
    private String cardNumber;
    private String cvv;

    // L'valeur kat3etaha ghir f l'Constructor
    public BankCard(String cardNumber, String cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }

    // Kanjbdou l'data (Getter)
    public String getCardNumber() {
        return cardNumber;
    }

    // MAKAYNCH SETTER! 
    // l'carte mli katsayb makatbdelch nemra dyalha.
}
`
  }
];