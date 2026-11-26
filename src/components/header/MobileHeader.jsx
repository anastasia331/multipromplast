import { Menu } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

// Цвета заголовка раздела под B2B-палитру сайта
function getPageTitleColorClass(path = '') {
    if (path.startsWith('/about')) {
        return 'text-blue-700';
    }
    if (path.startsWith('/products') || path.startsWith('/catalog') || path.startsWith('/services')) {
        return 'text-orange-600';
    }
    if (path.startsWith('/contacts')) {
        return 'text-slate-700';
    }
    return 'text-slate-900';
}

export default function MobileHeader({
    currentPage,
    currentPath = '',
    onOpen,
    isOpen,
    logo = null,
}) {
    const prefersReducedMotion = useReducedMotion();
    const titleColorClass = getPageTitleColorClass(currentPath);

    return (
        <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 lg:hidden">
            {/* Левый слот: логотип */}
            <div className="flex shrink-0 items-center">{logo}</div>

            {/* Центральный слот: название раздела строго по центру */}
            <div className="min-w-0 px-1 text-center">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={`${currentPath}-${currentPage}`}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className={`block truncate text-xs font-semibold tracking-tight transition-colors duration-200 sm:text-sm ${titleColorClass}`}
                        aria-live="polite"
                    >
                        {currentPage}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Правый слот: кнопка бургер-меню */}
            <button
                type="button"
                onClick={onOpen}
                aria-label="Открыть меню"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-all duration-200 hover:border-orange-500 hover:bg-slate-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
                <Menu size={21} strokeWidth={1.8} aria-hidden="true" />
            </button>
        </div>
    );
}