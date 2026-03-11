export default function ResearcherSpotlight() {
  return (
    <section className="bg-gray-50 py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
            Researcher Spotlight
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Voices from the Lab
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Quote */}
          <div>
            <blockquote className="relative">
              <svg
                className="absolute -top-4 -left-2 w-10 h-10 text-blue-100"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="relative text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic pl-6">
                &ldquo;Quantum computing is not just about faster computation
                — it fundamentally changes what questions we can ask about nature.
                Our lab is driven by the belief that understanding quantum
                information will reshape science and technology in ways we are
                only beginning to imagine.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Researcher card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Photo placeholder */}
            <div className="w-36 h-36 rounded-lg bg-gray-200 border border-gray-300 flex-shrink-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Chen</h3>
              <p className="text-sm text-blue-700 font-medium mt-1">Principal Investigator</p>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Dr. Chen leads the lab's research on fault-tolerant quantum
                computation and quantum complexity theory. Her work has been
                recognised with the Young Scientist Award and published in
                leading journals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
