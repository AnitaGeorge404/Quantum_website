import { Link } from "react-router-dom";

const facilities = [
  {
    title: "Quantum Hardware Lab",
    description:
      "Superconducting qubit systems and cryogenic infrastructure operating at 10 mK, supporting up to 127-qubit experiments.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M12 3v1.5m0 15V21m-4.5-3h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 14.25 4.5h-9A2.25 2.25 0 0 0 3 6.75v9A2.25 2.25 0 0 0 5.25 18Z"
      />
    ),
  },
  {
    title: "Simulation Cluster",
    description:
      "High-performance GPU cluster with 256 NVIDIA A100 GPUs dedicated to quantum circuit simulation and variational algorithms.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
      />
    ),
  },
  {
    title: "Photonics & Optics Lab",
    description:
      "State-of-the-art photonic quantum computing setup, including single-photon sources, detectors, and integrated photonic circuits.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    ),
  },
];

export default function FacilitiesPreview() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
              Infrastructure
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              World-Class Facilities
            </h2>
          </div>
          <Link
            to="/facilities"
            className="mt-4 md:mt-0 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            Explore All Facilities &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
