import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
          Advancing Quantum Technology for the Future
        </h2>
        <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you are a prospective student, a potential collaborator, or
          simply curious about quantum computing, we invite you to connect with
          our team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/join"
            className="bg-white text-blue-700 text-sm font-medium px-8 py-3.5 rounded-md hover:bg-blue-50 transition-colors"
          >
            Contact the Lab
          </Link>
          <Link
            to="/research"
            className="border border-white/40 text-white text-sm font-medium px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </section>
  );
}
