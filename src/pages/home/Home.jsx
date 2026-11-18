
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Ticker from './components/Ticker';
import Services from './components/Services';
import MaterialsBlock from './components/Material';
import ProductionCapabilities from './components/ProductionCapabilities';


export const Home = () => {
    return (
        <main>
            <Hero />
            <MaterialsBlock />
            <ProductionCapabilities/>
            <Advantages />
            <Ticker/>
            <Services />
        </main>
    );
};