import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

/** Same as MainLayout but without the QuDAIS footer.
 *  Used for pages (like Qiskit Fall Fest) that ship their own footer. */
export default function MainLayoutNoFooter() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar fixed />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
