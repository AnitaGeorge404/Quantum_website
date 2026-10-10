// Content from the official Hackathon Guide + template repository.
export const TEMPLATE_URL =
  'https://github.com/Shanwis/Qiskit-Fall-Fest-2026-IIITKottayam-Hackathon-Template';

export const intro =
  'A 24-hour sprint that challenges you to take the foundational principles of quantum computing and Qiskit you have learned and build an engaging, creative, and functional project.';

export const deadlines = [
  {
    day: '10',
    month: 'Oct',
    time: '7:05 PM',
    title: 'Hackathon Kickoff',
    body: 'The hackathon officially begins! Brainstorming, teaming up, and hacking starts now.',
  },
  {
    day: '10',
    month: 'Oct',
    time: '10:00 PM',
    tag: 'Strict deadline',
    title: 'Checkpoint 1 — Topic & Team Registration',
    body: 'A registration form will be shared. Every team (or solo participant) must fill out this form by 10:00 PM specifying:',
    list: [
      'Chosen Track (Track 1 or Track 2)',
      'Team Name',
      'Participation type (Solo or Team)',
      'Details of all team members (Names, Emails, GitHub usernames)',
    ],
  },
  {
    day: '11',
    month: 'Oct',
    time: '4:00 PM',
    title: 'Checkpoint 2 — Submission Form Release',
    body: 'The final submission form will be released. You can begin submitting your deliverables as soon as they are ready.',
  },
  {
    day: '11',
    month: 'Oct',
    time: '7:00 – 7:30 PM',
    title: 'Hackathon Conclusion & Final Deadline',
    body: 'The hackathon ends exactly 24 hours after kickoff. All final submissions must be recorded before 7:05 PM.',
  },
];

export const tracks = [
  {
    id: 'Track 1',
    title: 'Quantum Games & Interactive Puzzles',
    tagline: 'Gamifying Quantum Mechanics',
    vision:
      'Quantum mechanics introduces counter-intuitive phenomena: particles can exist in superpositions of states, become entangled across distances, and collapse into definite outcomes upon measurement. Your mission is to build a playable game, puzzle, or interactive simulation where quantum phenomena are core gameplay mechanics rather than cosmetic themes.',
    steps: [
      'Design a simple, playable game or interactive puzzle (interactive CLI in a Jupyter Notebook, terminal app, or simple web UI via Streamlit/Gradio).',
      'Implement the game mechanics using Qiskit circuits (e.g., qubits represent hidden states, board cells, or player strategies).',
      'Ensure that quantum gates (H, X, CNOT, rotations, or measurements) directly dictate the state transitions or game outcomes.',
    ],
    ideas: [
      ['Quantum Battleship / Minesweeper', 'Ships or mines exist in superposition states until scanned or "measured" by a player.'],
      ['Quantum Tic-Tac-Toe / Chess / Nim', 'Moves can be entangled between board squares; classical moves do not collapse until an entanglement cycle forces measurement.'],
      ['Quantum Monty Hall / Quantum Coin Game', 'Players bet on quantum superposition or play against a quantum strategy that leverages interference and entanglement.'],
      ['Noise / Coherence Survival', 'A strategic puzzle where a player must apply error-suppression or protective gates to keep their quantum state alive against simulated environmental noise.'],
    ],
    reference: `${TEMPLATE_URL}/tree/main/references/track-1-quantum-games`,
  },
  {
    id: 'Track 2',
    title: 'Open-Domain Optimization & Real-World Solvers',
    tagline: 'Formulate and Solve a Real-World Dilemma',
    vision:
      'Many of the most challenging problems in logistics, scheduling, finance, and society are combinatorial optimization problems: finding the best combination out of an astronomical number of possibilities. Your mission is to identify a real-world decision problem from everyday life or industry, formulate it as a binary optimization or graph problem, and solve it using Qiskit.',
    steps: [
      'Identify a compelling real-world scenario (e.g., scheduling, routing, resource allocation, portfolio selection).',
      'Map the problem into a mathematical formulation (a graph with nodes/edges, a cost Hamiltonian, or a binary objective with constraints).',
      'Implement the solution using Qiskit (e.g., using QAOA, VQE, or parameterized quantum circuits with Qiskit primitives StatevectorSampler or StatevectorEstimator).',
      'Compare the quantum solution quality against a baseline (such as brute-force search for small instances or a naive classical greedy heuristic).',
    ],
    ideas: [
      ['Campus & Student Life', 'Scheduling non-conflicting exam time slots for courses with shared students.'],
      ['Logistics & Smart Cities', 'Delivery drone route selection or optimal electric vehicle charging station placement.'],
      ['Finance & Sustainability', 'Allocating a constrained budget across competing renewable energy projects to maximize impact while minimizing risk.'],
      ['Sports & Entertainment', 'Selecting an optimal fantasy league team under strict budget and positional constraints.'],
    ],
    reference: `${TEMPLATE_URL}/tree/main/references/track-2-optimization`,
  },
];

export const techStack = [
  ['UI & Frontend', 'Streamlit, Gradio, React, Pygame, Tkinter, web frameworks, etc.'],
  ['Backend & APIs', 'FastAPI, Flask, Node.js, etc.'],
  ['Classical Baselines & Graph Tools', 'NetworkX, Rustworkx, SciPy, PuLP, Pandas, Matplotlib, etc.'],
];

export const goldenRule =
  'While any classical tech stack is allowed for user interfaces, game engines, and comparison heuristics, Qiskit MUST power the quantum core of your project (circuit definition, quantum gates, entanglement/superposition modeling, state evolution, or QAOA/variational optimization). Simply using pseudo-random numbers without genuine Qiskit circuits will not qualify.';

export const repoRules = [
  ['Use the Template', 'Click "Use this template" on GitHub to create your project repository.'],
  ['Strict README Structure', "Your project's README.md must strictly follow the exact structure and headings provided in the template. Do not alter the header names or remove required metadata fields, as automated evaluation pipelines rely on this exact format to parse your submission."],
  ['References & Starter Code', 'Curated reference materials, starter guides, and documentation for both Track 1 and Track 2 are provided directly inside the template repository. Consult them if you need inspiration or technical syntax help.'],
  ['Runnable Notebooks', 'Any Jupyter Notebooks submitted in your repository must have their cells run and outputs displayed (including circuit diagrams, charts, and demo results).'],
  ['Commit Window & Audit (Strict Disqualification Rule)', 'All commits contributing to the project must be made strictly during the hackathon window (between October 10, 2026 at 7:05 PM and October 11, 2026 at 7:05 PM). If commits are observed outside the hackathon duration (e.g., pre-built projects or late commits), the team will be automatically disqualified.'],
];

export const videoStructure = [
  ['Problem & Concept Overview', 'Clearly explain what game or real-world problem you chose and why.'],
  ['Quantum Architecture', 'Explain what quantum principles are used (H, entanglement, measurement collapse, cost Hamiltonian, etc.) and how your Qiskit circuit is constructed.'],
  ['Live Working Demo', 'Dedicate at least 3–4 minutes to showing a live screen-recorded demonstration of your working code/game/solver.'],
  ['Results & Honest Critical Thinking', 'Discuss your results, how they compare to classical logic, and reflect on limitations (e.g., how the approach would be affected by physical quantum noise or scaling to larger qubit counts).'],
];

export const criteria = [
  ['Quantum Rigor & Authenticity', 'Does the project genuinely leverage quantum computing principles (superposition, entanglement, interference, measurement collapse, or variational Hamiltonians)? Are quantum circuits properly constructed in Qiskit, or is quantum logic merely simulated using classical random numbers?'],
  ['Working Implementation & Live Demo', 'Is there a functioning prototype? Does the video clearly demonstrate the project running live? In Track 1, is the game playable with a clear ruleset? In Track 2, does the optimizer execute and output valid candidate solutions?'],
  ['Problem Formulation & Originality', 'How creative and thoughtful is the chosen scenario? Did the team invent an engaging game concept or formulate a meaningful real-world dilemma rather than submitting an unmodified textbook tutorial?'],
  ['Presentation Clarity & Critical Understanding', 'Is the 10-minute video well-structured, clear, and accessible? Does the team demonstrate honest engineering intuition by acknowledging the constraints and limitations of current NISQ quantum hardware?'],
];

export const conduct = [
  ['Originality of Work & Commit Window', 'All code and project materials submitted must be developed strictly during the 24 hours of the hackathon. While you are encouraged to use open-source libraries, Qiskit documentation, and the provided template references, verbatim copying or submitting pre-existing projects is strictly prohibited. GitHub commit histories will be audited: if commits are observed before the hackathon start time (October 10, 2026 at 7:05 PM) or after the deadline (October 11, 2026 at 7:05 PM), the team will be disqualified immediately.'],
  ['Proper Attribution', 'If you adapt code snippets, algorithms, or game ideas from external sources, you must clearly credit and cite them in your README.md.'],
  ['Use of AI Assistance', 'You are welcome to use AI tools (e.g., ChatGPT, Claude, GitHub Copilot) for conceptual brainstorming, debugging, and code syntax assistance. However, the team must fully understand and be able to explain every line of code submitted. Submitting purely AI-generated boilerplate without understanding or functional execution will be severely penalized during evaluation.'],
  ['Collaboration & Respect', 'Treat all fellow participants, mentors, and organizers with kindness and respect. Harassment, discrimination, or offensive content in code, games, or presentations will not be tolerated.'],
  ['Punctuality', 'Deadlines for both Form 1 (October 10, 2026 by 10:00 PM) and Form 2 (October 11, 2026 by 7:05 PM) are strict. Late submissions risk missing evaluation.'],
];
