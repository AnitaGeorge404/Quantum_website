import { Link } from "react-router-dom";

const researchAreas = [
  {
    title: "Quantum Algorithms",
    description:
      "Developing novel algorithms that harness quantum superposition and entanglement for exponential speedups in optimisation, simulation, and cryptography.",
  },
  {
    title: "Error Correction",
    description:
      "Pioneering fault-tolerant quantum computation through advanced error-correcting codes, surface codes, and stabiliser formalism.",
  },
  {
    title: "Quantum Hardware",
    description:
      "Building and characterising next-generation quantum processors — superconducting, trapped-ion, and photonic — with improved coherence and gate fidelity.",
  },
];

export default function ResearchPreview() {
  return (
    <section className="bg-white border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text — left */}
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
              Research
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Research at the Quantum Lab
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our work spans the full stack of quantum computing — from
              foundational theory to experimental implementation. We tackle
              problems in quantum algorithms, error correction, hardware
              architectures, and quantum information theory.
            </p>
            <ul className="mt-6 space-y-3">
              {researchAreas.map((area) => (
                <li key={area.title}>
                  <span className="font-semibold text-gray-800">{area.title}. </span>
                  <span className="text-gray-600 text-sm">{area.description}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/research"
              className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-colors"
            >
              Learn More about Research
            </Link>
          </div>

          {/* Image placeholder — right */}
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <div className="text-center px-8">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              <p className="text-sm text-gray-400">Research Visual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
