import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-transparent">
      <Navbar />
      <main className="flex-grow pt-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
