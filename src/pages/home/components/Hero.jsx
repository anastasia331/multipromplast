import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { LuBox, LuCpu, LuLayers, LuShieldCheck } from 'react-icons/lu';
import heroVideo from '../../../assets/heroVideo.mp4?url';

// Данные для 4 карточек ключевых преимуществ с уточнениями
const features = [
    {
        icon: LuBox,
        title: '3D-моделирование и чертежи',
        description: 'Разработка конструкции и технической документации.',
    },
    {
        icon: LuCpu,
        title: 'Изготовление пресс-форм',
        description: 'Проектирование и производство оснастки.',
    },
    {
        icon: LuLayers,
        title: 'Литье под давлением',
        description: 'Изготовление деталей по заданным параметрам.',
    },
    {
        icon: LuShieldCheck,
        title: 'Контроль качества и сборка',
        description: 'Проверка, обработка и комплектация изделий.',
    },
];

// Плавные и мягкие настройки анимации (без резкости)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Плавный интервал между появлением карточек
            delayChildren: 0.4,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Очень мягкий easeOutExpo для плавного торможения
    },
};

export default function Hero() {
    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            {/* ===== HERO SECTION С ФОНОВЫМ ВИДЕО ===== */}
            <section
                className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-10 sm:pb-12"
                aria-label="Главная информация о компании"
            >

                {/* Фоновое видео */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Ваш браузер не поддерживает встроенные видео.
                </video>

                {/* Затемняющий оверлей */}
                <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] z-10" />

                {/* Главный контент по центру */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col justify-center items-center my-auto">

                    {/* Главный заголовок */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg"
                    >
                        Производство и литье изделий из пластика под давлением
                    </motion.h1>

                    {/* Подзаголовок: возвращен правильный отступ (mt-6/mt-8) и легкий мягкий оттенок для иерархии */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed font-normal px-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                    >
                        Изготавливаем пластиковые детали любой сложности по чертежам, техническому заданию и готовым образцам. Полный производственный цикл: от проектирования и изготовления пресс-форм до выпуска готовой продукции.
                    </motion.p>

                    {/* Кнопки призыва к действию */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
                    >
                        <NavLink
                            to="/contacts"
                            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 text-center text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-blue-400"
                        >
                            Заказать расчет
                        </NavLink>
                        <NavLink
                            to="/products"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl shadow-lg backdrop-blur-md transition-all duration-200 text-center text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-white/50"
                        >
                            Каталог / Услуги
                        </NavLink>
                    </motion.div>
                </div>

                {/* 4 Карточки снизу */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    >
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                                    className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center group border border-white/20 h-full cursor-pointer"
                                >
                                    {/* Иконка */}
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                                    </div>

                                    {/* Заголовок */}
                                    <div className="min-h-[2.75rem] sm:min-h-[3rem] flex items-center justify-center mb-2">
                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Описание */}
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-auto">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

            </section>
        </div>
    );
}