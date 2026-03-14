export default function LabOverview() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            About the Quantum Lab
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Established to bridge theoretical quantum science and practical
            computation, our lab investigates fundamental problems at the
            intersection of physics, mathematics, and computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              We pursue research across quantum algorithms, fault-tolerant
              quantum computation, quantum cryptography, and the co-design of
              quantum hardware and software. Our multidisciplinary team of
              physicists, computer scientists, and engineers work collaboratively
              to push the boundaries of what is computationally possible.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our results have been published in leading venues including{" "}
              <em>Nature</em>, <em>Physical Review Letters</em>,{" "}
              <em>IEEE Transactions on Quantum Engineering</em>, and top
              computer science conferences such as <em>QIP</em>,{" "}
              <em>STOC</em>, and <em>FOCS</em>.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              {[
                "Quantum algorithms & computational complexity",
                "Fault-tolerant quantum error correction",
                "Superconducting & trapped-ion architectures",
                "Quantum cryptographic protocols",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image placeholder */}
          <div className="rounded-lg border border-gray-200 shadow-sm aspect-[4/3] bg-gray-50 flex items-center justify-center">
            <div className="text-center px-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.176.226-2.3.637-3.33" />
              </svg>
              <p className="text-sm text-gray-400">Lab Overview Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
