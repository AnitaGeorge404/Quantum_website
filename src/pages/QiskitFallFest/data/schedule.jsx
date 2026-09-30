import React from 'react';

export const schedule = [
  { 
    time: "7 October 2026", 
    title: "Introduction to QC & Qiskit + Game Launch", 
    speaker: { 
      name: "Dr. Jayakumar V", 
      image: "/qiskit-photos/jayakumar.jpeg", 
      bio: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            (5:00 to 5:30 pm)<br/>
            Game Launch
          </li>
          <li>
            (5:30 to 7:00 pm)<br/>
            Introduction to Quantum Computing & Qiskit by <span className="font-semibold text-[var(--ink)]">Dr. Jayakumar V</span>, CEO of Anuthantra, IBM Qiskit Advocate.
          </li>
        </ul>
      )
    } 
  },
  { 
    time: "8 October 2026", 
    title: "Introduction to Qiskit Programming", 
    speaker: { 
      name: "Dr. Asha Sebastian", 
      image: "/qiskit-photos/asha.jpeg", 
      bio: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            (5:00-7:00pm)<br/>
            Hands-On Qiskit programming Workshop by <span className="font-semibold text-[var(--ink)]">Dr. Asha Sebastian</span>, Assistant Professor, Indian Institute of Information Technology (IIIT) Kottayam.
          </li>
        </ul>
      )
    } 
  },
  { 
    time: "9 October 2026", 
    title: "Introduction to Quantum Algorithms", 
    speaker: { 
      name: "Dr. Rubell Marion Lincy G & Vishnu Ajith", 
      image: "/qiskit-photos/Rubell.jpeg", 
      bio: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            (5:00 to 6:00pm)<br/>
            Introduction to Random Machine Learning by <span className="font-semibold text-[var(--ink)]">Dr. Rubell Marion Lincy G</span>, Assistant Professor & Head of the Department of CSE-2 (Applied AI), Indian Institute of Information Technology (IIIT) Kottayam.
          </li>
          <li>
            (6:00 to 7:00pm)<br/>
            Talk on Quantum Algorithms by <span className="font-semibold text-[var(--ink)]">Vishnu Ajith</span>, Staff AI Engineer, Synopsys.
          </li>
        </ul>
      )
    } 
  },
  { 
    time: "10 October 2026", 
    title: "Introduction to Quantum Information Sciences", 
    speaker: { 
      name: "Satyaprakash P & Dr. Raghavendra V", 
      image: "/qiskit-photos/sathyaprakash.png", 
      bio: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            (5:00 to 6:00pm)<br/>
            Quantum Machine Learning by <span className="font-semibold text-[var(--ink)]">Satyaprakash P</span>, Co-founder & COO, Anuthantra Private Limited.
          </li>
          <li>
            (6:00 to 7:00pm)<br/>
            Quantum Error Correction by <span className="font-semibold text-[var(--ink)]">Dr. Raghavendra V</span>, Assistant Professor, SRM Institute of Science and Technology (SRMIST), Kattankulathur.
          </li>
        </ul>
      )
    } 
  }
];
