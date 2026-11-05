
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Ticker from './components/Ticker';
import Services from './components/Services';
import MaterialsBlock from './components/Material';
// import { Advantages } from './components/Advantages';
// import { Services } from './components/Services';

export const Home = () => {
    return (
        <main>
            {/* 1. Первый экран, который ты уже сверстала */}
            <Hero />
            <MaterialsBlock/>
            {/* 2. Блок "Наши преимущества" со скриншота */}
            <Advantages />
            <Ticker/>

            {/* 3. Блок услуг и производства */}
            <Services />
        </main>
    );
};