import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <div className="flex flex-wrap gap-4">
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/people">People</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/collaborations">Collaborations</Link>
        <Link to="/join">Join Us / Contact</Link>
      </div>
    </nav>
  );
}
