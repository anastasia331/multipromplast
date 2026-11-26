import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks';

// Единая цветовая схема для текста и нижней полосы по маршруту
function getTabTheme(path = '') {
    if (path.startsWith('/about')) {
        return {
            text: 'text-blue-700',
            bar: 'bg-blue-700',
        };
    }

    if (
        path.startsWith('/products') ||
        path.startsWith('/catalog') ||
        path.startsWith('/services')
    ) {
        return {
            text: 'text-orange-600',
            bar: 'bg-orange-600',
        };
    }

    if (path.startsWith('/contacts')) {
        return {
            text: 'text-slate-700',
            bar: 'bg-slate-700',
        };
    }

    return {
        text: 'text-slate-900',
        bar: 'bg-slate-900',
    };
}

export default function DesktopNav() {
    return (
        <nav
            aria-label="Основная навигация"
            className="hidden h-full w-full items-center justify-center gap-7 lg:flex xl:gap-8"
        >
            {navLinks.map((link) => {
                const theme = getTabTheme(link.path);

                return (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === '/'}
                        className="group relative flex h-full items-center px-1 text-sm font-semibold tracking-tight transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className={`whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none ${isActive
                                            ? theme.text
                                            : 'text-slate-600 group-hover:text-slate-950'
                                        }`}
                                >
                                    {link.title}
                                </span>

                                {/* Нижняя полоса активной вкладки */}
                                <span
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-t-full transition-all duration-200 motion-reduce:transition-none ${isActive
                                            ? `${theme.bar} opacity-100`
                                            : `${theme.bar} scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40`
                                        }`}
                                />
                            </>
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
}