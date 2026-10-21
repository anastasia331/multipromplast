import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { LuBox, LuCpu, LuLayers, LuShieldCheck } from 'react-icons/lu';
import heroVideo from '../../../assets/heroVideo.mp4?url';
// Данные для 4 карточек ключевых преимуществ / этапов
const features = [
    {
        icon: LuBox,
        title: '3D-моделирование и чертежи',
    },
    {
        icon: LuCpu,
        title: 'Изготовление пресс-форм',
    },
    {
        icon: LuLayers,
        title: 'Литье под давлением',
    },
    {
        icon: LuShieldCheck, // Заменили на гарантированно существующую иконку
        title: 'Контроль качества и сборка',
    },
];

export default function Hero() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* ===== HERO SECTION С ФОНОВЫМ ВИДЕО ===== */}
            <section className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden pt-28 pb-12">

                {/* Фоновое видео */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>

                {/* Темная маска (оверлей) поверх видео для читаемости текста */}
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] z-10" />

                {/* Главный контент по центру */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col justify-center items-center">

                    {/* Главный заголовок */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
                    >
                        Производство и литье изделий из пластика под давлением
                    </motion.h1>

                    {/* Подзаголовок / Описание */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed font-normal"
                    >
                        Изготавливаем пластиковые детали и изделия любой сложности по вашим чертежам и образцам. Полный цикл: от разработки пресс-форм и 3D-моделирования до серийного выпуска продукции.
                    </motion.p>

                    {/* Кнопки призыва к действию */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
                    >
                        <NavLink
                            to="/contacts"
                            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 text-center"
                        >
                            Заказать расчет
                        </NavLink>
                        <NavLink
                            to="/products"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-xl shadow-lg backdrop-blur-md transition-all duration-200 text-center"
                        >
                            Каталог / Услуги
                        </NavLink>
                    </motion.div>
                </div>

                {/* 4 Белые карточки снизу */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    >
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group border border-white/20"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-200">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

            </section>
        </div>
    );
}