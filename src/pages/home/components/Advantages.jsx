import { motion } from 'framer-motion';
import {
    LuCog,
    LuLayers,
    LuShieldCheck,
    LuZap,
    LuBox,
    LuCpu,
    LuLeaf,
    LuComponent
} from 'react-icons/lu';

const advantages = [
    {
        icon: LuCog,
        title: 'Полный цикл работ',
        description: 'От 3D-модели и конструкторского бюро до готовой партии на складе.',
    },
    {
        icon: LuBox,
        title: 'Гибкость в сырье',
        description: 'Работаем как со своим материалом, так и с сертифицированным сырьём заказчика.',
    },
    {
        icon: LuComponent,
        title: 'Пресс-формы под задачу',
        description: 'Используем собственные надежные оснастки или пресс-формы клиента.',
    },
    {
        icon: LuShieldCheck,
        title: 'Высокая точность',
        description: 'Строгий контроль допусков, геометрии и качества на каждом этапе.',
    },
    {
        icon: LuZap,
        title: 'Быстрый расчет за 24ч',
        description: 'Оперативная оценка стоимости и сроков производства по вашему чертежу.',
    },
    {
        icon: LuLayers,
        title: 'Любая сложность',
        description: 'Профессиональная работа с любыми типами инженерных задач и конструкций.',
    },
    {
        icon: LuLeaf,
        title: 'Экологичность',
        description: 'Безопасное производство с возможностью повторной переработки отходов.',
    },
    {
        icon: LuCpu,
        title: 'Технологичность',
        description: 'Современный парк ТПА и полностью автоматизированные процессы.',
    },
];

export default function Advantages() {
    return (
        <section
            aria-labelledby="advantages-heading"
            className="relative py-20 lg:py-28 bg-[#F4F7FC] text-slate-900 overflow-hidden"
        >
            {/* Очень деликатные, мягкие голубые свечения на фоне */}
            <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-24 w-[480px] h-[480px] bg-[#E5EFFF]/60 rounded-full blur-3xl pointer-events-none z-0"
            />
            <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#E5EFFF]/70 rounded-full blur-3xl pointer-events-none z-0"
            />

            {/* ВЕРТИКАЛЬНАЯ ЛИНИЯ (для мобильных): деликатная и тонкая */}
            <div
                aria-hidden="true"
                className="lg:hidden absolute left-8 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#8DB5FF] to-transparent opacity-55 z-0 pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Доработанный заголовок секции */}
                <div className="text-center mb-16 sm:mb-20">
                    <motion.h2
                        id="advantages-heading"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 tracking-tight mb-4 leading-tight"
                    >
                        Наши преимущества
                    </motion.h2>

                    {/* Короткая анимированная линия под заголовком (около 200px) */}
                    <div className="relative w-48 sm:w-52 h-1.5 mx-auto flex items-center justify-center" aria-hidden="true">
                        <div className="absolute inset-x-2 h-[1.5px] bg-[#8DB5FF]/30 rounded-full" />
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            whileInView={{ x: '100%', opacity: [0, 1, 1, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
                            className="absolute h-[2px] w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_#2563eb] rounded-full"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed font-normal"
                    >
                        Мы предлагаем комплексные решения в области производства пластиковых изделий,
                        обеспечивая высокое качество на каждом этапе.
                    </motion.p>
                </div>

                {/* Контейнер карточек */}
                <div className="relative">

                    {/* --- МОБИЛЬНАЯ ВЕРСИЯ --- */}
                    <div className="lg:hidden relative pl-8 space-y-6 py-2">
                        {advantages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title} className="relative flex items-center pl-6 py-2">
                                    {/* Ярко-синяя акцентная точка */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-[-23px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#2563EB] rounded-full ring-4 ring-[#F4F7FC] shadow-sm shadow-blue-500/40 z-10"
                                    />
                                    {/* Тонкая деликатная соединительная линия */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-8 h-[1.5px] bg-[#8DB5FF] opacity-55 z-10"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, x: 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 60 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.03 }}
                                        className="w-full bg-[#FFFFFF] p-6 sm:p-7 min-h-[160px] rounded-[18px] border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.04)] flex items-center gap-4 relative z-20"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-[#2563EB] text-white shadow-md shadow-blue-500/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6" aria-hidden="true" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                    {/* --- ДЕСКТОПНАЯ ВЕРСИЯ --- */}
                    <div className="hidden lg:block relative py-6">

                        {/* SVG тонких линий-микросхем (#8DB5FF, 1.5px, opacity 0.55) */}
                        <svg
                            className="absolute left-1/2 -translate-x-1/2 w-screen inset-y-0 h-full pointer-events-none z-0"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                            viewBox="0 0 1920 600"
                            fill="none"
                        >
                            <path
                                d="M 0 68 L 220 68 L 260 195 L 490 195 L 530 68 L 760 68 L 800 195 L 1030 195 L 1070 68 L 1300 68 L 1340 195 L 1570 195 L 1610 68 L 1920 68"
                                stroke="#8DB5FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.55"
                            />
                            <path
                                d="M 0 348 L 220 348 L 260 475 L 490 475 L 530 348 L 760 348 L 800 475 L 1030 475 L 1070 348 L 1300 348 L 1340 475 L 1570 475 L 1610 348 L 1920 348"
                                stroke="#8DB5FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.55"
                            />
                        </svg>

                        <div className="grid grid-cols-4 gap-7 relative z-10">
                            {advantages.map((item, index) => {
                                const Icon = item.icon;
                                const isOffset = index % 2 === 1;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.08 }}
                                        className={`relative z-10 flex flex-col items-center group ${isOffset ? 'translate-y-16' : '-translate-y-4'
                                            }`}
                                    >
                                        {/* Иконка и ярко-синяя акцентная точка */}
                                        <div className="relative mb-3 flex flex-col items-center">
                                            <div className="w-13 h-13 p-3 rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-500/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                <Icon className="w-6 h-6" aria-hidden="true" />
                                            </div>
                                            {/* Оставили ярко-синей */}
                                            <span
                                                aria-hidden="true"
                                                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#2563EB] rounded-full ring-4 ring-[#F4F7FC] z-20 group-hover:scale-125 transition-transform duration-300"
                                            />
                                        </div>

                                       
                                        <div className="w-full bg-[#FFFFFF] px-[26px] py-[28px] min-h-[185px] rounded-[18px] border border-slate-200/60 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-start text-left">
                                            <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}