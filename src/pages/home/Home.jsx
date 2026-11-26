import { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import usePageMeta from '../../hooks/usePageMeta';

const MaterialsBlock = lazy(() => import('./components/Material').then((m) => ({ default: m.default || m })));
const ProductionCapabilities = lazy(() => import('./components/ProductionCapabilities').then((m) => ({ default: m.default || m })));
// const Advantages = lazy(() => import('./components/Advantages').then((m) => ({ default: m.default || m })));
const Ticker = lazy(() => import('./components/Ticker').then((m) => ({ default: m.default || m })));
const Services = lazy(() => import('./components/Services').then((m) => ({ default: m.default || m })));

export const Home = () => {
    usePageMeta(
        'Изготовление пластиковых изделий на заказ в Липецке | Мультипромпласт',
        'Мультипромпласт — производство пластиковых изделий под заказ в Липецке: литьё на термопластавтоматах, изготовление пресс-форм, доставка по России и в Беларусь.'
    );

    return (
        <main>
            <Hero />
            <Suspense fallback={null}>
                <MaterialsBlock />
            </Suspense>
            <Suspense fallback={null}>
                <Ticker />
            </Suspense>
            <Suspense fallback={null}>
                <ProductionCapabilities />
            </Suspense>
            {/* <Suspense fallback={null}>
                <Advantages />
            </Suspense> */}

            <Suspense fallback={null}>
                <Services />
            </Suspense>
        </main>
    );
};