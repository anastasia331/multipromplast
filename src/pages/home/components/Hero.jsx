
import { motion, useReducedMotion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
    LuBox,
    LuCpu,
    LuLayers,
    LuShieldCheck,
} from 'react-icons/lu';


import litiePlastmassyPodDavleniem from ' ../../../src/assets/litiePlastmassyPodDavleniem.webp';
// ==========================================
// ДАННЫЕ ПРЕИМУЩЕСТВ КОМПАНИИ
// ==========================================

const features = [
    {
        icon: LuBox,
        title: '3D-моделирование и чертежи',
        description:
            'Разработка конструкции и технической документации.',
    },
    {
        icon: LuCpu,
        title: 'Изготовление пресс-форм',
        description:
            'Проектирование и производство оснастки.',
    },
    {
        icon: LuLayers,
        title: 'Литье под давлением',
        description:
            'Изготовление деталей по заданным параметрам.',
    },
    {
        icon: LuShieldCheck,
        title: 'Контроль качества и сборка',
        description:
            'Проверка, обработка и комплектация изделий.',
    },
];

// ==========================================
// АНИМАЦИЯ КАРТОЧЕК
// ==========================================

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// ==========================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ==========================================

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main className="overflow-x-hidden bg-gray-50">

                {/* ГЛАВНЫЙ ЭКРАН */}
                    <section
                aria-label="Главная информация о компании Мультипромпласт"
                className="
                    relative
                    isolate
                    flex
                    min-h-[90vh]
                    sm:min-h-screen
                    flex-col
                    justify-between
                    overflow-hidden
                    pt-24
                    sm:pt-28
                    pb-10
                    sm:pb-12
                    bg-slate-950
                "
            >

                {/* ФОНОВОЕ ИЗОБРАЖЕНИЕ */}

                <img
                    src={litiePlastmassyPodDavleniem}
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="
                        absolute
                        inset-0
                        -z-20
                        h-full
                        w-full
                        object-cover
                        object-[65%_center]
                        pointer-events-none
                        select-none
                    "
                />

                {/* БАЗОВОЕ ЗАТЕМНЕНИЕ */}

                <div
                    aria-hidden="true"
                    className="
                        absolute
                        inset-0
                        -z-10
                        bg-slate-950/40
                    "
                />

                {/* ГРАДИЕНТ ДЛЯ КОНТРАСТНОСТИ */}

                <div
                    aria-hidden="true"
                    className="
                        absolute
                        inset-0
                        -z-10
                        bg-gradient-to-r
                        from-slate-950/75
                        via-slate-950/55
                        to-slate-950/40
                    "
                />

                {/* ДОПОЛНИТЕЛЬНОЕ ЗАТЕМНЕНИЕ НА МОБИЛЬНЫХ */}

                <div
                    aria-hidden="true"
                    className="
                        absolute
                        inset-0
                        -z-10
                        bg-slate-950/15
                        sm:hidden
                    "
                />

                {/* ==================================
                    ОСНОВНОЙ КОНТЕНТ
                ================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        w-full
                        max-w-5xl
                        flex-1
                        flex-col
                        items-center
                        justify-center
                        px-4
                        text-center
                        sm:px-6
                    "
                >

                    {/* ЗАГОЛОВОК H1 */}

                    <motion.h1
                        initial={
                            shouldReduceMotion
                                ? false
                                : { opacity: 0, y: 20 }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            max-w-5xl
                            text-3xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-white
                            drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                            sm:text-5xl
                            md:text-6xl
                        "
                    >
                        Производство и литье изделий из пластика под давлением
                    </motion.h1>

                    {/* ОПИСАНИЕ */}

                    <motion.p
                        initial={
                            shouldReduceMotion
                                ? false
                                : { opacity: 0, y: 20 }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.8,
                            delay: shouldReduceMotion ? 0 : 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            mt-6
                            max-w-3xl
                            px-2
                            text-base
                            font-normal
                            leading-relaxed
                            text-white
                            drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
                            sm:mt-8
                            sm:text-lg
                            md:text-xl
                        "
                    >
                        Изготавливаем пластиковые детали любой сложности
                        по чертежам, техническому заданию и готовым образцам.
                        Полный производственный цикл: от проектирования
                        и изготовления пресс-форм до выпуска готовой продукции.
                    </motion.p>

                    {/* КНОПКИ */}

                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : { opacity: 0, y: 20 }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.8,
                            delay: shouldReduceMotion ? 0 : 0.4,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            mt-8
                            flex
                            w-full
                            flex-col
                            items-center
                            justify-center
                            gap-3
                            px-4
                            sm:mt-10
                            sm:w-auto
                            sm:flex-row
                            sm:gap-4
                            sm:px-0
                        "
                    >

                        {/* КНОПКА РАСЧЕТА */}

                        <NavLink
                            to="/calculate"
                            className="
                                w-full
                                rounded-xl
                                bg-blue-600
                                px-8
                                py-3.5
                                text-center
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-blue-950/20
                                transition-colors
                                duration-200
                                hover:bg-blue-700
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-blue-300
                                sm:w-auto
                                sm:text-base
                            "
                        >
                            Заказать расчет
                        </NavLink>

                        {/* КНОПКА КАТАЛОГА */}

                        <NavLink
                            to="/products"
                            className="
                                w-full
                                rounded-xl
                                bg-white
                                px-8
                                py-3.5
                                text-center
                                text-sm
                                font-semibold
                                text-slate-900
                                shadow-lg
                                transition-colors
                                duration-200
                                hover:bg-gray-100
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-white
                                sm:w-auto
                                sm:text-base
                            "
                        >
                            Каталог / Услуги
                        </NavLink>

                    </motion.div>

                </div>

                {/* ==================================
                    КАРТОЧКИ ПРЕИМУЩЕСТВ
                ================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-10
                        w-full
                        max-w-7xl
                        px-4
                        sm:mt-12
                        sm:px-6
                        lg:px-8
                    "
                >

                    <motion.div
                        variants={
                            shouldReduceMotion
                                ? undefined
                                : containerVariants
                        }
                        initial={
                            shouldReduceMotion
                                ? false
                                : 'hidden'
                        }
                        animate={
                            shouldReduceMotion
                                ? undefined
                                : 'visible'
                        }
                        className="
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                            sm:gap-5
                            lg:grid-cols-4
                            lg:gap-6
                        "
                    >

                        {features.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    variants={
                                        shouldReduceMotion
                                            ? undefined
                                            : cardVariants
                                    }
                                    whileHover={
                                        shouldReduceMotion
                                            ? undefined
                                            : {
                                                y: -5,
                                                transition: {
                                                    duration: 0.25,
                                                    ease: 'easeOut',
                                                },
                                            }
                                    }
                                    className="
                                        flex
                                        h-full
                                        flex-col
                                        items-center
                                        rounded-2xl
                                        border
                                        border-white/60
                                        bg-white
                                        p-5
                                        text-center
                                        shadow-xl
                                        shadow-slate-950/15
                                        transition-shadow
                                        duration-300
                                        hover:shadow-2xl
                                        sm:p-6
                                    "
                                >

                                    {/* ИКОНКА */}

                                    <div
                                        className="
                                            mb-4
                                            flex
                                            h-12
                                            w-12
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-blue-600
                                            text-white
                                            shadow-md
                                            shadow-blue-600/20
                                            sm:h-14
                                            sm:w-14
                                        "
                                    >
                                        <Icon
                                            className="
                                                h-6
                                                w-6
                                                sm:h-7
                                                sm:w-7
                                            "
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {/* ЗАГОЛОВОК */}

                                    <h2
                                        className="
                                            mb-2
                                            flex
                                            min-h-[2.75rem]
                                            items-center
                                            justify-center
                                            text-sm
                                            font-bold
                                            leading-tight
                                            text-slate-900
                                            transition-colors
                                            duration-200
                                            hover:text-blue-600
                                            sm:min-h-[3rem]
                                            sm:text-base
                                        "
                                    >
                                        {item.title}
                                    </h2>

                                    {/* ОПИСАНИЕ */}

                                    <p
                                        className="
                                            mt-auto
                                            text-xs
                                            leading-relaxed
                                            text-slate-600
                                            sm:text-sm
                                        "
                                    >
                                        {item.description}
                                    </p>

                                </motion.article>
                            );
                        })}

                    </motion.div>

                </div>

            </section>

        </main>
    );
}
