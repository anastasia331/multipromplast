import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 text-gray-700">
            {/* Основной контейнер футера */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

                    {/* 1. Колонка слева: Логотип и описание */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <img src={logo} alt="Мультипромпласт" className="h-20 w-auto object-contain" />
                        <p className="text-sm text-gray-500 max-w-xs">
                            Производство качественных пластиковых изделий для любых задач.
                        </p>
                    </div>

                    {/* 2. Колонка по центру: Меню и соцсети прямо под ним */}
                    <div className="flex flex-col items-center space-y-6">
                        {/* Ссылки меню */}
                        <nav className="flex flex-wrap justify-center gap-6">
                            <NavLink to="/" className="text-sm font-medium hover:text-black transition-colors">Главная</NavLink>
                            <NavLink to="/about" className="text-sm font-medium hover:text-black transition-colors">О компании</NavLink>
                            <NavLink to="/products" className="text-sm font-medium hover:text-black transition-colors">Товары и услуги</NavLink>
                            <NavLink to="/contacts" className="text-sm font-medium hover:text-black transition-colors">Контакты</NavLink>
                        </nav>

                        {/* Иконки соцсетей строго под меню по центру */}
                        <div className="flex items-center gap-4 text-gray-600">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black hover:scale-110 transition-transform">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black hover:scale-110 transition-transform">
                                <FaTelegramPlane className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black hover:scale-110 transition-transform">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 3. Колонка справа (пустая для баланса сетки на ПК, либо можно добавить контакты) */}
                    <div className="hidden md:flex flex-col items-end text-right text-sm text-gray-500">
                        <p>Липецк, Россия</p>
                        <p className="mt-1">multipromplast@mail.ru</p>
                    </div>

                </div>

                {/* Нижняя полоса с копирайтом */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Мультипромпласт. Все права защищены.
                </div>
            </div>
        </footer>
    );
}