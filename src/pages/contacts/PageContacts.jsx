import usePageMeta from '../../hooks/usePageMeta';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import LocationBlock from './components/LocationBlock/LocationBlock';

export default function PageContacts() {
    usePageMeta(
        'Контакты Мультипромпласт: Липецк',
        'Свяжитесь с нами, чтобы обсудить заказ на производство пластиковых изделий. Адрес, телефон и форма заявки.'
    );

    return (
        <main>
            <FeedbackForm />
            <LocationBlock />
        </main>
    );
}