const newsItems = [
  { date: "Feb 2026", tag: "Publication", title: "New Paper on Topological Error Correction Published in Nature", excerpt: "Our team's research on topological codes for fault-tolerant quantum computing has been accepted for publication in Nature." },
  { date: "Jan 2026", tag: "Grant", title: "Lab Receives Quantum Innovation Research Grant", excerpt: "A competitive research grant has been awarded to support our next-generation quantum hardware development programme." },
  { date: "Dec 2025", tag: "Event", title: "Annual Quantum Computing Workshop Draws 200+ Attendees", excerpt: "Our flagship workshop on quantum algorithms and applications hosted researchers from over 30 institutions worldwide." },
];

export default function NewsHighlights() {
  return (
    <section className="bg-white border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">News & Updates</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Latest from the Lab</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Stay up-to-date with our most recent publications, awards, grants, and upcoming events.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div key={item.title} className="p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-sm bg-blue-50 text-blue-700 border border-blue-100">{item.tag}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
