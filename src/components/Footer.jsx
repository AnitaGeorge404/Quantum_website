import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Quantum Research Lab</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Department of Computer Science and Engineering
              <br />
              Global Institute of Technology
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900">Quick Links</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <Link to="/research" className="hover:text-blue-900">Research</Link>
              <Link to="/facilities" className="hover:text-blue-900">Facilities</Link>
              <Link to="/people" className="hover:text-blue-900">People</Link>
              <Link to="/gallery" className="hover:text-blue-900">Gallery</Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900">Collaborations</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              University and industry partnerships
              <br />
              collaborations@institute.edu
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900">Contact</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              quantumlab@institute.edu
              <br />
              +91 98765 43210
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          © 2026 Quantum Computing Research Laboratory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
