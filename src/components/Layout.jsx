// src/components/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop/>
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}