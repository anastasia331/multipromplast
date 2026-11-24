
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackMetrikaGoal } from '../../utils/metrika';

import { navLinks } from './navLinks';
import logo from '../../assets/logo.png';

export default function MobileMenu({
    isOpen,
    onClose,
    menuButtonRef,
}) {
    // Блокировка прокрутки и управление клавиатурой
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';

        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        const closeButton = document.getElementById(
            'mobile-menu-close'
        );

        closeButton?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
                return;
            }

            if (event.key === 'Tab') {
                const dialog = document.getElementById(
                    'mobile-navigation'
                );

                const elements = dialog?.querySelectorAll(
                    'a[href], button:not([disabled])'
                );

                if (!elements?.length) return;

                const first = elements[0];
                const last = elements[elements.length - 1];

                if (
                    event.shiftKey &&
                    document.activeElement === first
                ) {
                    event.preventDefault();
                    last.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                ) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;

            document.removeEventListener('keydown', handleKeyDown);

            menuButtonRef?.current?.focus();
        };
    }, [isOpen, onClose, menuButtonRef]);

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-menu"
                    className="
                        fixed inset-0 z-[100]
                        lg:hidden
                        flex items-start justify-center
                        overflow-y-auto
                        bg-slate-950/30
                        backdrop-blur-xl
                        overscroll-contain
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={onClose}
                >
                    {/* Светлая панель */}
                    <motion.section
                        id="mobile-navigation"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Меню сайта"
                        className="
                            relative
                            min-h-[100dvh]
                            w-full
                            max-w-[600px]
                            ml-auto
                            bg-white
                            shadow-2xl
                            flex flex-col
                            px-6 sm:px-10
                            pt-5
                            pb-8
                        "
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Верхняя панель */}
                        <div className="
                            flex items-center
                            justify-between
                            min-h-[68px]
                            border-b border-slate-100
                        ">
                            <NavLink
                                to="/"
                                onClick={onClose}
                                aria-label="Мультипромпласт — главная"
                            >
                                <img
                                    src={logo}
                                    alt="Мультипромпласт"
                                    className="
                                        h-14 sm:h-16
                                        w-auto max-w-[190px]
                                        object-contain
                                    "
                                />
                            </NavLink>

                            <button
                                id="mobile-menu-close"
                                type="button"
                                onClick={onClose}
                                aria-label="Закрыть меню"
                                className="
                                    w-11 h-11
                                    flex items-center justify-center
                                    rounded-xl
                                    border border-slate-200
                                    text-slate-700
                                    hover:text-orange-600
                                    hover:bg-slate-50
                                    transition-colors
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-orange-500
                                "
                            >
                                <X size={23} strokeWidth={1.8} />
                            </button>
                        </div>

                        {/* Информация о компании */}
                        <div className="pt-10 pb-6">
                            <p className="
                                text-xs
                                font-semibold
                                tracking-[0.2em]
                                uppercase
                                text-orange-600
                            ">
                                Мультипромпласт
                            </p>

                            <p className="
                                mt-3
                                text-sm
                                leading-relaxed
                                text-slate-500
                                max-w-sm
                            ">
                                Производство пластиковых изделий
                                и комплексные решения для бизнеса.
                            </p>
                        </div>

                        {/* Пункты меню */}
                        <nav
                            aria-label="Мобильная навигация"
                            className="flex flex-col"
                        >
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.path === '/'}
                                    onClick={onClose}
                                    className="
                                        group
                                        flex items-center
                                        justify-between
                                        gap-4
                                        min-h-[76px]
                                        py-4
                                        border-b border-slate-100
                                        transition-colors duration-200
                                    "
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className="flex items-center gap-5">
                                                <span className={`
                                                    text-xs
                                                    font-semibold
                                                    tabular-nums
                                                    ${isActive
                                                        ? 'text-orange-600'
                                                        : 'text-slate-300'
                                                    }
                                                `}>
                                                    0{index + 1}
                                                </span>

                                                <span className={`
                                                    text-lg sm:text-xl
                                                    font-medium
                                                    tracking-tight
                                                    ${isActive
                                                        ? 'text-slate-950'
                                                        : 'text-slate-600 group-hover:text-slate-950'
                                                    }
                                                `}>
                                                    {link.title}
                                                </span>
                                            </div>

                                            <ArrowUpRight
                                                size={19}
                                                strokeWidth={1.7}
                                                className={`
                                                    transition-all duration-200
                                                    ${isActive
                                                        ? 'text-orange-600'
                                                        : 'text-slate-300 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                                                    }
                                                `}
                                            />
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Нижний блок */}
                        <div className="mt-auto pt-10">
                            <div className="
                                rounded-2xl
                                bg-slate-50
                                border border-slate-100
                                p-5 sm:p-6
                            ">
                                <p className="
                                    text-sm
                                    font-semibold
                                    text-slate-900
                                ">
                                    Надёжные решения для бизнеса
                                </p>

                                <p className="
                                    mt-2
                                    text-sm
                                    leading-relaxed
                                    text-slate-500
                                ">
                                    Ознакомьтесь с направлениями
                                    производства и возможностями
                                    нашей компании.
                                </p>

                                <NavLink
                                    to="/contacts"
                                    onClick={() => {
                                        trackMetrikaGoal('click_contact_mobile');
                                        onClose();
                                    }}
                                    className="
                                        inline-flex items-center
                                        gap-2
                                        mt-5
                                        text-sm
                                        font-semibold
                                        text-orange-600
                                        hover:text-orange-700
                                        transition-colors
                                    "
                                >
                                    Связаться с нами
                                    <ArrowUpRight size={17} />
                                </NavLink>
                            </div>

                            <p className="
                                mt-6
                                text-xs
                                text-slate-400
                                tracking-wide
                            ">
                                © {new Date().getFullYear()}
                                {' '}Мультипромпласт
                            </p>
                        </div>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
