import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import {
    Home,
    ServicesHome,
    CalculateByDrawing,
    PageContacts,
    About,
    Privacy,
} from './lazyRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/products', element: <ServicesHome /> },
            { path: '/contacts', element: <PageContacts /> },
            { path: '/calculate', element: <CalculateByDrawing /> },
            { path: '/about', element: <About /> },
            { path: '/privacy', element: <Privacy /> },
        ],
    },
]);
