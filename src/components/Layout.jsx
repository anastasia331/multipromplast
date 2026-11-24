// src/components/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ScrollToTop from './ScrollToTop';
import ErrorBoundary from './ErrorBoundary';

export default function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <ScrollToTop />
            <Header />
            <main className='flex-grow'>
                <Suspense fallback={
                    <div className='min-h-[60vh] flex items-center justify-center'>
                        <p className='text-slate-600'>Загрузка страницы...</p>
                    </div>
                }>
                    <ErrorBoundary>
                        <Outlet />
                    </ErrorBoundary>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
