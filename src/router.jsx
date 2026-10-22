import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/home/Home';
import { ServicesHome } from './pages/catalog/ServicesHome';
import PageContacts from './pages/contacts/PageContacts';
import CalculateByDrawing from './pages/CalculateByDrawing';

// импортируй остальные страницы...

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/products', element: <ServicesHome /> },
            { path: '/contacts', element: <PageContacts /> },
            { path: '/calculate', element: <CalculateByDrawing/> },
            // добавь дочерние маршруты для about, products, contacts
        ],
    },
]);