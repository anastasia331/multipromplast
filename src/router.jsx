import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import { Home } from './pages/home/Home';
import {ServicesHome}  from './pages/catalog/ServicesHome';
import CalculateByDrawing from './pages/CalculateByDrawing';
import PageContacts from './pages/contacts/PageContacts';
import { About } from './pages/About';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/products', element: <ServicesHome /> },
            { path: '/contacts', element: <PageContacts /> },
            { path: '/calculate', element: <CalculateByDrawing/> },
            { path: '/about', element: <About/> },
        
            // добавь дочерние маршруты для about, products, contacts
        ],
    },
]);