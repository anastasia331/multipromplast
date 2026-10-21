import { motion } from 'framer-motion';
import { LuCog, LuLayers, LuShieldCheck, LuZap } from 'react-icons/lu';

// Данные преимуществ с текстами из макета
const advantages = [
    {
        icon: LuCog,
        title: 'Полный цикл работ',
        description: 'От идеи и 3D-модели до готовой партии на складе.',
        position: 'top',
    },
    {
        icon: LuLayers,
        title: 'Любая сложность',
        description: 'Работаем с любыми типами полимеров и формами.',
        position: 'bottom',
    },
    {
        icon: LuShieldCheck,
        title: 'Высокая точность',
        description: 'Строгий контроль допусков и геометрии деталей.',
        position: 'top',
    },
    {
        icon: LuZap,
        title: 'Быстрый расчет и запуск',
        description: 'Оценка стоимости по чертежу за 24 часа.',
        position: 'bottom',
    },
];

export default function Advantages() {
    return (
        <section className="relative py-24 bg-gray-950 text-white overflow-hidden">

            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-950/95 to-gray-950 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
                    >
                        Наши преимущества
                    </motion.h2>
                    <div className="mt-3 w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Сетка преимуществ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Горизонтальная линия таймлайна */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-600/40 -translate-y-1/2 z-0" />

                    {advantages.map((item, index) => {
                        const Icon = item.icon;
                        const isTop = item.position === 'top';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`relative z-10 flex flex-col items-center text-center group ${isTop ? 'lg:-translate-y-12' : 'lg:translate-y-12'
                                    }`}
                            >
                                {/* Иконка и точка на линии */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="hidden lg:block absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-gray-950" />
                                </div>

                                {/* Карточка с текстом */}
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all duration-300 w-full flex-1 flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}