import { Link } from "react-router-dom";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t-4 border-secondary-400 text-primary-200 mt-10 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <Container>
        <div className="relative grid gap-12 md:grid-cols-4 px-4 sm:px-6 z-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">QuDAIS Research Lab</h3>
            <p className="text-sm leading-relaxed text-primary-300">
              Quantum Technology Developments in Artificial Intelligence Systems
              <br />
              Department of Computer Science and Engineering
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-300">
              <Link to="/research" className="transition-colors hover:text-secondary-300">Research Focus</Link>
              <Link to="/facilities" className="transition-colors hover:text-secondary-300">Lab Facilities</Link>
              <Link to="/people" className="transition-colors hover:text-secondary-300">Our Team</Link>
              <Link to="/gallery" className="transition-colors hover:text-secondary-300">Media & Gallery</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Collaborations</h3>
            <p className="text-sm leading-relaxed text-primary-300">
              University and industry partnerships
              <br />
              <a href="mailto:collaborations@institute.edu" className="text-primary-100 hover:text-secondary-300 mt-1 inline-block transition-colors font-medium">collaborations@institute.edu</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <p className="text-sm leading-relaxed text-primary-300">
              <a href="mailto:quantumlab@institute.edu" className="text-primary-100 hover:text-secondary-300 mb-1 inline-block transition-colors font-medium">quantumlab@institute.edu</a>
              <br />
              +91 98765 43210
            </p>
          </div>
        </div>
        
        <div className="relative mt-16 pt-8 border-t border-primary-800 px-4 sm:px-6 text-sm text-primary-400 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
            <p>&copy; {new Date().getFullYear()} QuDAIS Lab.</p>
            <p>All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
