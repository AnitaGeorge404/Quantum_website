import { Link } from "react-router-dom";

const people = [
  { name: "Dr. Asha Sebastian", role: "Quantum Computing and PQC" },
  { name: "Dr. Christina Terese Joseph", role: "Quantum AI and Edge Systems" },
  { name: "Dr. Della Thomas", role: "Quantum Photonic Sensing" },
  { name: "Dr. Riyasudheen T K", role: "Quantum PDE and Finance" },
];

export default function PeoplePreview() {
  return (
    <section className="bg-white border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Our Research Team</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">QuDAIS brings together faculty and student researchers working at the intersection of quantum computing, AI, FinTech, communication, and sensing.</p>
            <p className="mt-3 text-gray-600 leading-relaxed">Each member contributes domain expertise that strengthens collaborative, interdisciplinary, and application-focused research outcomes.</p>
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
