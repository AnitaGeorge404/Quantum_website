import { Link } from "react-router-dom";

const areas = [
  {
    title: "Quantum Algorithms",
    description:
      "Designing provably faster quantum algorithms for optimisation, simulation, and machine learning problems with rigorous complexity-theoretic analysis.",
  },
  {
    title: "Quantum Cryptography",
    description:
      "Developing post-quantum cryptographic protocols and quantum key distribution schemes that guarantee information-theoretic security.",
  },
  {
    title: "Quantum Machine Learning",
    description:
      "Exploring the intersection of quantum computing and machine learning to identify problems where quantum advantage is achievable.",
  },
  {
    title: "Quantum Hardware",
    description:
      "Co-designing superconducting and trapped-ion qubit architectures with improved coherence times, gate fidelities, and scalability.",
  },
];

export default function ResearchHighlights() {
  return (
    <section className="bg-gray-50 py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
            Research
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Research Areas
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our work spans the full quantum computing stack — from foundational
            theory to experimental implementation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[3/2] rounded-md bg-gray-100 border border-gray-100 flex items-center justify-center mb-5">
                <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">{area.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-grow">
                {area.description}
              </p>
              <Link
                to="/research"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
