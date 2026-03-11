import { Link } from "react-router-dom";

const openings = [
  {
    role: "PhD Positions",
    description:
      "Fully funded doctoral positions in quantum algorithms, error correction, and quantum machine learning. Open to candidates with a strong background in physics, CS, or mathematics.",
  },
  {
    role: "Research Internships",
    description:
      "Summer and semester-long internships for undergraduate and master's students. Work alongside faculty and postdocs on cutting-edge research projects.",
  },
  {
    role: "Research Associates",
    description:
      "Postdoctoral and research associate roles for researchers with a PhD in quantum information science or related fields. Competitive salary and travel support.",
  },
];

export default function JoinLab() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
              Opportunities
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Join the Lab
            </h2>
          </div>
          <Link
            to="/join"
            className="mt-4 md:mt-0 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            View All Opportunities &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {openings.map((o) => (
            <div
              key={o.role}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {o.role}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {o.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
