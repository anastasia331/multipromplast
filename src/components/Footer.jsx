
import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useCookieConsent } from './CookieConsent';
import logoMultipromplast from '../../public/logoMultipromplast.png';
import { trackMetrikaGoal } from '../utils/metrika';

const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'О компании', path: '/about' },
    { title: 'Товары и услуги', path: '/products' },
    { title: 'Контакты', path: '/contacts' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { openSettings } = useCookieConsent();

    return (
        <footer className="bg-[#1D2229] text-white">

            {/* Основная часть */}
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-9">

                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">

                    {/* Бренд */}
                    <div className="max-w-md">

                        <NavLink
                            to="/"
                            aria-label="Мультипромпласт — главная страница"
                            className="group inline-flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        >
                            <img
                                src={logoMultipromplast}
                                alt="Логотип Мультипромпласт"
                                className="h-[68px] w-[68px] shrink-0 object-contain"
                                loading="eager"
                                decoding="async"
                            />

                            <div className="flex flex-col gap-1">
                                <span className="text-base font-normal tracking-wide text-white sm:text-lg">
                                    МУЛЬТИПРОМПЛАСТ
                                </span>
                            </div>
                        </NavLink>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
                            Производство пластиковых изделий.
                            Решения для бизнеса и промышленности
                            с вниманием к качеству и требованиям каждого проекта.
                        </p>
                    </div>

                    {/* Навигация */}
                    <div>
                        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                            Разделы сайта
                        </h2>

                        <nav aria-label="Навигация в подвале сайта">
                            <ul className="flex flex-col gap-2.5">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) => `
                                                group inline-flex items-center gap-2 rounded
                                                text-sm transition-colors duration-200
                                                focus-visible:outline-none
                                                focus-visible:ring-2
                                                focus-visible:ring-orange-400
                                                ${isActive
                                                    ? 'text-orange-400'
                                                    : 'text-slate-300 hover:text-white'
                                                }
                                            `}
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {link.title}

                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full bg-orange-400 transition-opacity ${isActive
                                                                ? 'opacity-100'
                                                                : 'opacity-0 group-hover:opacity-100'
                                                            }`}
                                                    />
                                                </>
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                            Контактная информация
                        </h2>

                        <div className="flex flex-col gap-3.5">

                            {/* Адрес */}
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-orange-400"
                                    aria-hidden="true"
                                />

                                <div>
                                    <p className="text-sm font-medium text-white">
                                        Липецк, Россия
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        ул. Ферросплавная, 18
                                    </p>
                                </div>
                            </div>

                            {/* Телефон */}
                            <a
                                href="tel:+79202487722"
                                onClick={() => trackMetrikaGoal('click_phone')}
                                className="flex items-center gap-3 text-sm text-slate-200 transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                            >
                                <Phone
                                    size={18}
                                    className="shrink-0 text-orange-400"
                                    aria-hidden="true"
                                />
                                +7 (920) 248-77-22
                            </a>

                            {/* Почта */}
                            <a
                                onClick={() => trackMetrikaGoal('click_email')}
                                href="mailto:multipromplast@mail.ru"
                                className="flex items-center gap-3 break-all text-sm text-slate-200 transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                            >
                                <Mail
                                    size={18}
                                    className="shrink-0 text-orange-400"
                                    aria-hidden="true"
                                />
                                multipromplast@mail.ru
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Нижняя строка */}
            <div className="border-t border-white/10 bg-[#191E25]">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-3.5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">

                    <p className="text-xs text-slate-400">
                        © {currentYear} Мультипромпласт. Все права защищены.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">

                        <NavLink
                            to="/privacy"
                            className="rounded text-xs text-slate-400 transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                        >
                            Политика конфиденциальности
                        </NavLink>

                        <button
                            type="button"
                            onClick={openSettings}
                            className="rounded text-xs text-slate-400 transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                        >
                            Настройки cookie
                        </button>

                    </div>
                </div>
            </div>
        </footer>
    );
}
