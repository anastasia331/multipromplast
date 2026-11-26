import usePageMeta from '../../hooks/usePageMeta'

import ServicesHero from "./components/ServicesHero";
export const ServicesHome = () => {
    usePageMeta(
        'Товары и услуги: пластиковые изделия под заказ | Мультипромпласт',
        'Литьё пластмасс под давлением, изготовление пресс-формы под заказ, пластиковые изделия по чертежам клиента. Работаем с вашими материалами и нашими.'
    )

    return (
        <main>
          <ServicesHero/>
        </main>
    );
};
