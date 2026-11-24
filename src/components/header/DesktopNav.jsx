
import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks';

export default function DesktopNav() {
    return (
        <nav
            aria-label="Основная навигация"
            className="
                hidden lg:flex
                absolute left-1/2 -translate-x-1/2
                items-center justify-center
                gap-7 xl:gap-9
            "
        >
            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => `
                        relative py-2
                        text-sm font-medium
                        whitespace-nowrap
                        transition-colors duration-200
                        ${isActive
                            ? 'text-slate-950'
                            : 'text-slate-600 hover:text-slate-950'
                        }
                    `}
                >
                    {({ isActive }) => (
                        <>
                            {link.title}

                            <span
                                className={`
                                    absolute -bottom-[2px]
                                    left-0 h-[2px] w-full
                                    rounded-full
                                    bg-orange-500
                                    transition-transform duration-300
                                    origin-left
                                    ${isActive
                                        ? 'scale-x-100'
                                        : 'scale-x-0'
                                    }
                                `}
                            />
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
}
