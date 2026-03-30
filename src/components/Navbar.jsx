import { Link, NavLink } from "react-router-dom";
import Container from "./ui/Container";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/facilities", label: "Facilities" },
  { to: "/people", label: "People" },
  { to: "/gallery", label: "Gallery" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/join", label: "Join" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 transition-all px-4 sm:px-6 pointer-events-none">
      <Container className="pointer-events-none">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3 flex flex-wrap items-center justify-between gap-4 pointer-events-auto transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-full bg-primary-900 flex items-center justify-center shadow-sm group-hover:bg-secondary-500 transition-colors duration-300">
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>
              <span className="text-sm font-bold tracking-tight text-primary-900 group-hover:text-secondary-500 transition-colors duration-300">
                Quantum.
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary-50 text-secondary-500 font-semibold"
                        : "text-slate-500 hover:text-primary-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
