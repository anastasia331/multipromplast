
import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import DesktopNav from './DesktopNav';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import { navLinks } from './navLinks';
import logo from '../../assets/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuButtonRef = useRef(null);
    const location = useLocation();

    // Определяем название текущей страницы
    const currentPage =
        navLinks.find((link) => {
            if (link.path === '/') {
                return location.pathname === '/';
            }

            return (
                location.pathname === link.path ||
                location.pathname.startsWith(`${link.path}/`)
            );
        })?.title || 'Мультипромпласт';

    // Отслеживаем прокрутку
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

 
    // Управление мобильным меню
    const openMenu = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <>
            <header
                className={`
                    sticky top-0 z-40 w-full
                    transition-all duration-300
                    ${isScrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/70'
                        : 'bg-white border-b border-slate-100'
                    }
                `}
            >
                <div className="
                    relative
                    max-w-7xl mx-auto
                    h-20
                    px-4 sm:px-6 lg:px-8
                    flex items-center justify-between
                ">
                    {/* Логотип */}
                    <div className="flex items-center shrink-0">
                        <NavLink
                            to="/"
                            aria-label="Мультипромпласт — главная"
                            className="
                                inline-flex items-center
                                rounded-lg
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-orange-500
                            "
                        >
                            <img
                                src={logo}
                                alt="Мультипромпласт"
                                className="
                                    h-14 sm:h-16 lg:h-[68px]
                                    w-auto max-w-[190px]
                                    object-contain
                                    transition-all duration-300
                                "
                            />
                        </NavLink>
                    </div>

                    {/* Навигация для компьютеров */}
                    <DesktopNav />

                    {/* Мобильная шапка */}
                    <MobileHeader
                        currentPage={currentPage}
                        isOpen={isOpen}
                        onOpen={openMenu}
                    />
                </div>
            </header>

            {/* Мобильное меню */}
            <MobileMenu
                isOpen={isOpen}
                onClose={closeMenu}
                menuButtonRef={menuButtonRef}
            />
        </>
    );
}
