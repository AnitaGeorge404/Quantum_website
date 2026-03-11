import { Link } from "react-router-dom";

const partners = [
  "MIT",
  "Stanford University",
  "IBM Research",
  "Google Quantum AI",
  "University of Oxford",
  "ETH Zurich",
  "Tata Institute",
  "ISRO",
];

export default function CollaborationsPreview() {
  return (
    <section className="bg-gray-50 py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
          Partners &amp; Collaborations
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Research Collaborations
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-14">
          We collaborate with leading academic institutions and industry
          partners worldwide to push the boundaries of quantum information
          science.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-lg py-6 px-4 flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-sm font-medium text-gray-700">
                {name}
              </span>
            </div>
          ))}
        </div>

        <Link
          to="/collaborations"
          className="inline-block bg-blue-700 text-white text-sm font-medium px-7 py-3 rounded-md hover:bg-blue-800 transition-colors"
        >
          View All Collaborations
        </Link>
      </div>
    </section>
  );
}
