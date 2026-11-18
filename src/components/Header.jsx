import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 👉 Импорт твоего логотипа (без белого фона)
import logo from '../assets/logo.png';
const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'О компании', path: '/about' },
    { title: 'Товары и услуги', path: '/products' },
    { title: 'Контакты', path: '/contacts' },
];
export default function Header() {
    console.log('HEADER RENDER');
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Эффект скролла для изменения прозрачности шапки

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;

            setIsScrolled(prev => {
                if (prev === scrolled) {
                    return prev;
                }

                return scrolled;
            });
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const closeMenu = () => setIsOpen(false);

  

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/35 backdrop-blur-md shadow-sm border-b border-gray-100/50'
                    : 'bg-white border-b border-gray-100'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">

                {/* 1. Логотип (Абсолютно по центру на мобиле/планшете, слева на ПК `lg:`) */}
                <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex-1 flex items-center">
                    <NavLink to="/" onClick={closeMenu} className="inline-block focus:outline-none">
                        <img
                            src={logo}
                            alt="Мультипромпласт"
                            className="h-30 sm:h-30 lg:h-30 w-auto object-contain transition-all"
                        />
                    </NavLink>
                </div>

                {/* 2. Десктопное меню по центру (вично только на `lg` и выше, от 1024px) */}
                <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium 
                            whitespace-nowrap transition-colors duration-200 relative py-1 group ${isActive ? 'text-black font-semibold' : 'text-black-700 hover:text-black'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.title}
                                    {/* Линия снизу от начала до конца слова */}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* 3. Правый блок: Соцсети (ПК) + Гамбургер (Планшет/Мобилка) */}
                <div className="ml-auto lg:ml-0 lg:flex-1 flex justify-end items-center gap-2 sm:gap-4">
                    {/* Соцсети (скрыты на мобилках/планшетах, появляются только на ноутах/ПК `lg:flex`) */}
                    <div className="hidden lg:flex items-center gap-3 text-gray-600">
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

                    {/* Кнопка гамбургер-меню (видна на экранах меньше 1024px) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none z-10"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* 4. Анимированное Мобильное / Планшетное меню */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-gray-100 text-black font-semibold' : 'text-gray-700 hover:bg-gray-50'
                                        }`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            ))}

                            {/* Соцсети внутри мобильного меню */}
                            <div className="pt-4 border-t border-gray-100 flex items-center gap-6 justify-center text-gray-600">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black">
                                    <FaTelegramPlane className="w-6 h-6" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black">
                                    <FaFacebookF className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}