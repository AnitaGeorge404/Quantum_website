import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/facilities", label: "Facilities" },
  { to: "/people", label: "People" },
  { to: "/gallery", label: "Gallery" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/join", label: "Join / Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-blue-900">
          Quantum Research Lab
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-blue-900 text-white" : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
