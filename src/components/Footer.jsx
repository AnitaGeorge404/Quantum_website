import { Link } from "react-router-dom";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t-4 border-secondary-400 text-primary-200 mt-10 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <Container>
        <div className="relative grid gap-12 md:grid-cols-3 px-4 sm:px-6 z-10">
          <div>
            <img
              src="/brand/qudais_logo.jpeg"
              alt="QuDAIS Lab"
              className="mb-4 h-auto w-full max-w-[200px] rounded-lg"
            />
            <p className="text-sm leading-relaxed text-primary-300">
              Quantum Technology Developments in Artificial Intelligence Systems
              <br />
              Indian Institute of Information Technology Kottayam
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-300">
              <Link to="/research" className="transition-colors hover:text-secondary-300">Research Focus</Link>
              <Link to="/internship" className="transition-colors hover:text-secondary-300">Internship</Link>
              <Link to="/people" className="transition-colors hover:text-secondary-300">Our Team</Link>
              <Link to="/gallery" className="transition-colors hover:text-secondary-300">Media & Gallery</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <p className="text-sm leading-relaxed text-primary-300">
              <span className="font-medium text-primary-100 block mb-2">Dr. Rubell Marion Lincy G.</span>
              <a href="mailto:lincy@iiitkottayam.ac.in" className="text-primary-100 hover:text-secondary-300 inline-block transition-colors font-medium">lincy@iiitkottayam.ac.in</a>
              <br />
              +91 0482-2202152
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
