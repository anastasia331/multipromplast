
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileHeader({
    currentPage,
    onOpen,
    isOpen,
}) {
    return (
        <div className="
            relative
            flex lg:hidden
            items-center justify-between
            w-full
        ">
            {/* Название текущей страницы */}
            <div className="
                absolute
                left-1/2 top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[44%]
                text-center
                pointer-events-none
            ">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentPage}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="
                            block
                            text-sm sm:text-base
                            font-semibold
                            tracking-tight
                            text-slate-900
                            truncate
                        "
                        aria-live="polite"
                    >
                        {currentPage}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Бургер справа */}
            <button
                type="button"
                onClick={onOpen}
                aria-label="Открыть меню"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="
                    ml-auto
                    flex items-center justify-center
                    w-11 h-11
                    rounded-xl
                    border border-slate-200
                    text-slate-800
                    bg-white
                    hover:bg-slate-50
                    hover:border-orange-500
                    active:scale-95
                    transition-all duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-orange-500
                "
            >
                <Menu size={23} strokeWidth={1.8} />
            </button>
        </div>
    );
}
