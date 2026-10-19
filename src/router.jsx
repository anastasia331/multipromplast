import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
// import Home from './pages/Home';

// импортируй остальные страницы...

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            // { index: true, element: <Home /> },
            // добавь дочерние маршруты для about, products, contacts
        ],
    },
]);