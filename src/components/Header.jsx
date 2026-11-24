import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'О компании', path: '/about' },
    { title: 'Товары и услуги', path: '/products' },
    { title: 'Контакты', path: '/contacts' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const closeButtonRef = useRef(null);

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
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const openMenu = useCallback(() => setIsOpen(true), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeMenu();
        };
        document.addEventListener('keydown', handleKeyDown);
        closeButtonRef.current?.focus();
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, closeMenu]);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/35 backdrop-blur-md shadow-sm border-b border-gray-100/50' : 'bg-white border-b border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center relative">
                {/* Логотип слева */}
                <div className="absolute left-0 flex items-center">
                    <NavLink to="/" onClick={closeMenu} className="inline-block focus:outline-none">
                        <img src={logo} alt="Мультипромпласт" className="h-30 sm:h-30 lg:h-30 w-auto object-contain transition-all" />
                    </NavLink>
                </div>

                {/* Навигация строго по центру всей ширины шапки */}
                <nav className="hidden lg:flex w-full justify-center items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-sm font-medium whitespace-nowrap transition-colors duration-200 relative py-1 group ${isActive ? 'text-black font-semibold' : 'text-black-700 hover:text-black'}`}>
                            {() => (
                                <>
                                    {link.title}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Кнопка гамбургер-меню справа (только мобильные) */}
                <div className="absolute right-0 lg:hidden">
                    <button
                        onClick={openMenu}
                        className="p-2 text-gray-700 hover:text-black focus:outline-none z-10"
                        aria-label="Открыть меню"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Мобильное меню — полноэкранное оверлей-меню поверх всей страницы, только 4 основных раздела */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 lg:hidden overflow-x-hidden"
                        onClick={closeMenu}
                    >
                        {/* Затемнённый размытый фон меню на весь экран */}
                        <div
                            className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
                            onClick={closeMenu}
                        />
                        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 py-12 text-center overflow-y-auto">
                            <button
                                onClick={closeMenu}
                                className="absolute top-4 right-4 z-30 p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                                aria-label="Закрыть меню"
                                ref={closeButtonRef}
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <NavLink to="/" onClick={closeMenu} className="mb-10 block">
                                <img src={logo} alt="Мультипромпласт" className="h-24 w-auto object-contain mx-auto" />
                            </NavLink>

                            <nav className="space-y-3 w-full">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) => `block py-3.5 px-6 rounded-xl text-xl font-medium transition-colors text-center ${isActive ? 'text-orange-400 bg-white/10' : 'text-white hover:bg-white/10'}`}
                                    >
                                        {link.title}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}