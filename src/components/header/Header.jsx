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

    // Находим активную ссылку по текущему маршруту
    const activeLink = navLinks.find((link) => {
        if (link.path === '/') {
            return location.pathname === '/';
        }

        return (
            location.pathname === link.path ||
            location.pathname.startsWith(`${link.path}/`)
        );
    });

    const currentPage = activeLink?.title || 'Мультипромпласт';
    const currentPath = activeLink?.path || location.pathname;

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

    const logoNode = (
        <NavLink
            to="/"
            aria-label="Мультипромпласт — главная"
            className="
                inline-flex shrink-0 items-center
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
                    h-10 w-auto max-w-[140px] object-contain
                    transition-all duration-300 motion-reduce:transition-none
                    sm:h-11 lg:h-[68px] lg:max-w-[190px]
                "
            />
        </NavLink>
    );

    return (
        <>
            <header
                className={`
                    sticky top-0 z-40 w-full
                    transition-all duration-300 motion-reduce:transition-none
                    ${isScrolled
                        ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl'
                        : 'border-b border-slate-100 bg-white'
                    }
                `}
            >
                <div
                    className="
                        mx-auto flex h-14 max-w-7xl
                        items-center justify-between gap-2
                        px-3.5 sm:px-6 lg:h-20 lg:px-8
                    "
                >
                    {/* Логотип для десктопа */}
                    <div className="hidden shrink-0 items-center lg:flex">
                        {logoNode}
                    </div>

                    {/* Навигация для компьютеров */}
                    <DesktopNav />

                    {/* Мобильная шапка */}
                    <MobileHeader
                        currentPage={currentPage}
                        currentPath={currentPath}
                        isOpen={isOpen}
                        onOpen={openMenu}
                        logo={logoNode}
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