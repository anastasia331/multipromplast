import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/home/Home';
import { ServicesHome } from './pages/catalog/ServicesHome';

// импортируй остальные страницы...

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/products', element: <ServicesHome /> },
            // добавь дочерние маршруты для about, products, contacts
        ],
    },
]);