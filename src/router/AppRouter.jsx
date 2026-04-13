import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Research from '../pages/Research';
import Internship from '../pages/Internship';
import People from '../pages/People';
import Gallery from '../pages/Gallery';
import Collaborations from '../pages/Collaborations';
import JoinContact from '../pages/JoinContact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'research', element: <Research /> },
      { path: 'internship', element: <Internship /> },
      { path: 'people', element: <People /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'collaborations', element: <Collaborations /> },
      { path: 'join', element: <JoinContact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
