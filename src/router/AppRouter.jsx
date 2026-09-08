import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainLayoutNoFooter from '../layouts/MainLayoutNoFooter';
import Home from '../pages/Home';
import Research from '../pages/Research';
import People from '../pages/People';
import Gallery from '../pages/Gallery';
import Collaborations from '../pages/Collaborations';
import JoinContact from '../pages/JoinContact';
import QiskitFallFest from '../pages/QiskitFallFest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'research', element: <Research /> },
      { path: 'people', element: <People /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'collaborations', element: <Collaborations /> },
      { path: 'join', element: <JoinContact /> },
    ],
  },
  {
    // Qiskit Fall Fest has its own footer, so we skip the QuDAIS one
    path: '/qiskit-fall-fest-26',
    element: <MainLayoutNoFooter />,
    children: [
      { index: true, element: <QiskitFallFest /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
