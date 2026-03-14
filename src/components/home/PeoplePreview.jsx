import { Link } from "react-router-dom";

const people = [
  { name: "Dr. Sarah Chen", role: "Principal Investigator" },
  { name: "Prof. James Okafor", role: "Co-PI, Quantum Hardware" },
  { name: "Dr. Priya Sharma", role: "Senior Researcher" },
  { name: "Dr. Marcus Weber", role: "Postdoctoral Fellow" },
];

export default function PeoplePreview() {
  return (
    <section className="bg-white border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Our Research Team</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">Our lab brings together faculty, postdoctoral researchers, doctoral students, and alumni from diverse backgrounds in physics, computer science, and electrical engineering.</p>
            <p className="mt-3 text-gray-600 leading-relaxed">Each member contributes a unique perspective, fostering a collaborative environment where rigorous science and creative thinking go hand in hand.</p>
            <Link to="/people" className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-colors">Meet the Team</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {people.map((person) => (
              <div key={person.name} className="p-5 rounded-lg bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-800">{person.name}</p>
                <p className="text-xs text-gray-500 mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
