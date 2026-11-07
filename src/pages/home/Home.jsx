
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Ticker from './components/Ticker';
import Services from './components/Services';
import MaterialsBlock from './components/Material';


export const Home = () => {
    return (
        <main>
            <Hero />
            <Advantages />
            <MaterialsBlock/>
            <Ticker/>
            <Services />
        </main>
    );
};