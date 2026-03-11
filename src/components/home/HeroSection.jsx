import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-200">
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-5">
            Department of Computer Science &amp; Engineering
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.15] tracking-tight">
            Quantum Computing{" "}
            <span className="block mt-1 text-blue-700">Research Laboratory</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Advancing research in quantum algorithms, quantum information, and
            emerging quantum technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-colors"
            >
              Explore Research
            </Link>
            <Link
              to="/join"
              className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors"
            >
              Join the Lab
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Publications" },
            { value: "12", label: "Researchers" },
            { value: "8", label: "Active Projects" },
            { value: "15+", label: "Global Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
