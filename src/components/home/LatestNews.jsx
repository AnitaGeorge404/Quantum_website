import { Link } from "react-router-dom";

const news = [
  {
    category: "Research",
    date: "28 Feb 2026",
    title: "Topological Error Correction Paper Accepted in Nature",
    summary:
      "Our latest work on topological stabiliser codes for fault-tolerant quantum computing has been accepted for publication.",
  },
  {
    category: "Quantum Computing",
    date: "15 Jan 2026",
    title: "Lab Awarded National Quantum Innovation Grant",
    summary:
      "A major research grant has been awarded to support next-generation quantum processor development.",
  },
  {
    category: "Lab Updates",
    date: "10 Dec 2025",
    title: "Annual Workshop Draws 200+ Researchers from 30 Institutions",
    summary:
      "The lab hosted its flagship quantum algorithms workshop, featuring talks by international experts.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-[0.2em] mb-3">
              News
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Latest Innovations
            </h2>
          </div>
          <Link
            to="/research"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1"
          >
            View All News
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center border-b border-gray-100">
                <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
