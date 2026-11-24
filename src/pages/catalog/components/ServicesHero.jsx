
import HeroSection from './HeroSection';
import ReadyProductsSection from './ReadyProductsSection';
import ProductsTab from './ProductsTab';
import ExtraServicesSection from './ExtraServicesSection';


export default function ServicesHero() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-500 selection:text-white">
            <HeroSection />

            <main>
                <ReadyProductsSection />
                <ProductsTab />
                <ExtraServicesSection/>
          
            </main>
        </div>
    );
}
