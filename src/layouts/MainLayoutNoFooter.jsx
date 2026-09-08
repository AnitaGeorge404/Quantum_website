import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

/** Same as MainLayout but without the QuDAIS footer.
 *  Used for pages (like Qiskit Fall Fest) that ship their own footer. */
export default function MainLayoutNoFooter() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-transparent">
      <Navbar />
      <main className="flex-grow pt-2">
        <Outlet />
      </main>
    </div>
  );
}
