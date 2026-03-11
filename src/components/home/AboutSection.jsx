export default function AboutSection() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image placeholder — left */}
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] bg-white flex items-center justify-center">
          <div className="text-center px-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.43 1.43a2.25 2.25 0 0 0 0 3.182l.393.393a2.25 2.25 0 0 0 3.182 0L8.5 18.25m10.5-3.75 1.43 1.43a2.25 2.25 0 0 1 0 3.182l-.393.393a2.25 2.25 0 0 1-3.182 0L15.5 18.25"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-400">Lab Overview Image</p>
          </div>
        </div>

        {/* Text — right */}
        <div>
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
            About the Lab
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Pushing the Frontiers of Quantum Science
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our laboratory is dedicated to fundamental and applied research in
            quantum computing and quantum information theory. We investigate
            quantum algorithms, fault-tolerant computation, quantum cryptography,
            and the design of next-generation quantum hardware architectures.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Founded with the vision to bridge theory and experiment, our
            multidisciplinary team collaborates closely with institutions
            worldwide. Our work has appeared in leading journals including
            <em> Nature</em>, <em>Physical Review Letters</em>, and{" "}
            <em>IEEE Transactions on Quantum Engineering</em>.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Quantum algorithms & complexity theory",
              "Fault-tolerant quantum computation",
              "Superconducting & trapped-ion hardware",
              "Quantum cryptography & communication",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

