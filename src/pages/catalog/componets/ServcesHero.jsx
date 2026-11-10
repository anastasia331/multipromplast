// Главный компонент, объединяющий страницу
import { useState } from 'react';
import { PRODUCT_CATEGORIES, SERVICES, EXTRA_SERVICES } from '../data/DataServices';



import HeroSection from './HeroSection';
import TabsNavigation from './TabsNavigation';
import ProductsTab from './ProductsTab';
import ServicesTab from './ServicesTab';
import ExtraServicesTab from './ExtraServicesTab';
import IndustriesSection from './IndustriesSection';
import CalculateByDrawing from '../../CalculateByDrawing';


export default function ServicesHero() {
    const [activeTab, setActiveTab] = useState('products');
    const [isCalcOpen, setIsCalcOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
            <HeroSection />
            <TabsNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                productCount={PRODUCT_CATEGORIES.length}
                serviceCount={SERVICES.length}
                extraCount={EXTRA_SERVICES.length}
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {activeTab === 'products' && <ProductsTab />}
                {activeTab === 'services' && <ServicesTab />}
                {activeTab === 'extra' && <ExtraServicesTab />}
                <IndustriesSection />
            </main>
            {isCalcOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">

                        {/* Кнопка закрытия (крестик) */}
                        <button
                            onClick={() => setIsCalcOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl p-2 cursor-pointer z-20"
                        >
                            ✕
                        </button>

                        {/* Сам компонент калькулятора */}
                        <CalculateByDrawing />

                    </div>
                </div>
            )}
        </div>
    );
}
