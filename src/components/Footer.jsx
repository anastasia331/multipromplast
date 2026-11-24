import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 text-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
                    {/* Колонка 1: Логотип и описание */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <img src={logo} alt="Мультипромпласт" className="h-20 w-auto object-contain" loading="lazy" decoding="async" />
                        <p className="text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
                            Производство качественных пластиковых изделий для любых задач.
                        </p>
                    </div>

                    {/* Колонка 2: Меню навигации (центрировано) */}
                    <div className="flex flex-col items-center space-y-6">
                        <nav className="flex flex-wrap justify-center gap-6">
                            <NavLink to="/" className="text-sm font-medium hover:text-black transition-colors">Главная</NavLink>
                            <NavLink to="/about" className="text-sm font-medium hover:text-black transition-colors">О компании</NavLink>
                            <NavLink to="/products" className="text-sm font-medium hover:text-black transition-colors">Товары и услуги</NavLink>
                            <NavLink to="/contacts" className="text-sm font-medium hover:text-black transition-colors">Контакты</NavLink>
                        </nav>
                    </div>

                    {/* Колонка 3: Город и email */}
                    <div className="hidden md:flex flex-col items-end text-right text-sm text-gray-500">
                        <p>Липецк, Россия</p>
                        <p className="mt-1">multipromplast@mail.ru</p>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Мультипромпласт. Все права защищены.
                </div>
            </div>
        </footer>
    );
}