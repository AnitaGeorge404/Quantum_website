import { Link } from "react-router-dom";

const opportunities = [
  { title: "PhD Positions", description: "Fully funded doctoral programmes in quantum computing and information science. Open to candidates with strong backgrounds in physics, CS, or mathematics." },
  { title: "Postdoctoral Fellowships", description: "Research fellowships for postdoctoral scholars with expertise in quantum systems, algorithms, or hardware design." },
  { title: "Summer Internships", description: "Hands-on research experience for undergraduate and master's students. Applications open annually in February." },
];

export default function JoinUsPreview() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] bg-white flex items-center justify-center">
            <div className="text-center px-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
              <p className="text-sm text-gray-400">Join Us Image</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">Join Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Opportunities at the Lab</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">We are always looking for motivated researchers and students. If you are passionate about quantum computing, we encourage you to apply.</p>
            <div className="mt-6 space-y-4">
              {opportunities.map((opp) => (
                <div key={opp.title} className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">{opp.title}</p>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{opp.description}</p>
                </div>
              ))}
            </div>
            <Link to="/join" className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-colors">View Openings & Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
