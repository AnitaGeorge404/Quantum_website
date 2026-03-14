import { Link } from "react-router-dom";

const galleryItems = ["Lab Setup","Conference 2025","Team Workshop","Quantum Hardware","Award Ceremony","Open Day"];

export default function GalleryPreview() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-3 gap-3">
            {galleryItems.map((label) => (
              <div key={label} className="aspect-square rounded-md bg-white border border-gray-200 flex flex-col items-center justify-center p-2 hover:border-gray-300 transition-colors">
                <svg className="w-7 h-7 text-gray-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
                <span className="text-xs text-gray-400 text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">Gallery</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Moments & Milestones</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">A visual record of our lab's events, experiments, field visits, and achievements — from equipment setups and conferences to workshops and team celebrations.</p>
            <p className="mt-3 text-gray-600 leading-relaxed">Browse photos from recent publications, award ceremonies, and our annual open day for prospective students.</p>
            <Link to="/gallery" className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-colors">View Full Gallery</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
