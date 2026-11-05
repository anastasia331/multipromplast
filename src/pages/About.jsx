import { useState, useRef, useEffect } from 'react';

// Импорт ваших картинок из папки assets
import img1 from '../assets/img1.jpg'; // Фоновая черно-белая
import img2 from '../assets/img2.jpg'; // Левая верхняя
import img3 from '../assets/img3.jpg'; // Правая
import img4 from '../assets/img4.jpg'; // Левая нижняя

// Вспомогательный компонент для анимации карточек при скролле
const AnimatedCard = ({ children, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isGlowing, setIsGlowing] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Включаем краткосрочную подсветку при полном выплывании
                    const glowTimer = setTimeout(() => {
                        setIsGlowing(true);
                        // Гасим подсветку через 800мс
                        const fadeGlowTimer = setTimeout(() => {
                            setIsGlowing(false);
                        }, 800);
                        return () => clearTimeout(fadeGlowTimer);
                    }, 300);

                    return () => clearTimeout(glowTimer);
                } else {
                    // При уходе карточки из экрана возвращаем её в исходное скрытое состояние
                    setIsVisible(false);
                    setIsGlowing(false);
                }
            },
            {
                threshold: 0.2, // Срабатывает, когда 20% карточки видно на экране
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            style={{
                transitionDelay: `${(index % 4) * 100}ms`,
            }}
            className={`group relative bg-white p-6 rounded-2xl border transition-all duration-700 ease-out flex flex-col justify-between overflow-hidden ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-90'
                } ${isGlowing
                    ? 'border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.5)]'
                    : 'border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
        >
            {/* Градиентная вспышка/подсветка при всплытии */}
            <div
                className={`absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-indigo-500/10 transition-opacity duration-700 pointer-events-none ${isGlowing ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Верхняя декоративная полоса при наведении */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {children}
        </div>
    );
};

export const About = () => {
    const containerRef = useRef(null);
    const [transform, setTransform] = useState({ x: 0, y: 0 });

    // Параллакс-эффект слежения за курсором в пределах блока картинок
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Координаты от центра блока (-0.5 до 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        setTransform({ x, y });
    };

    const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0 });
    };

    // Данные для ключевых направлений
    const keyDirections = [
        'Изготовление изделий из пластмасс методом литья под давлением',
        'Проектирование и изготовление пресс-форм',
        'Разработка и адаптация конструкций пластиковых изделий',
        'Подбор полимерных материалов с учётом назначения продукции',
        'Изготовление опытных образцов и установочных партий',
        'Серийное и крупносерийное производство',
        'Контроль геометрических параметров и качества изделий',
        'Подготовка продукции к дальнейшей сборке, упаковке или отгрузке',
    ];

    return (
        <section className="bg-slate-50/50 text-slate-900 py-10 px-4 sm:px-8 md:py-20 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">
                {/* ================= ЗАГОЛОВОК ================= */}
                <div className="w-full lg:pl-[50%] mb-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                        О компании
                    </h2>
                    <p className="text-indigo-600 font-semibold text-lg sm:text-xl mt-2">
                        Технологичные решения в области переработки пластмасс
                    </p>
                </div>

                {/* ================= ОСНОВНОЙ БЛОК С ОБТЕКАНИЕМ И АДАПТИВНЫМ КОЛЛАЖЕМ ================= */}
                <div className="relative block text-slate-700 text-base sm:text-lg leading-relaxed">

                    {/* БЛОК С КАРТИНКАМИ: На десктопе float-left с параллаксом, на мобильных — компактный красивый сетчатый коллаж */}
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="float-none lg:float-left w-full lg:w-[46%] my-6 lg:my-0 select-none mr-0 lg:mr-12 mb-8 lg:mb-6"
                    >
                        {/* 1. МОБИЛЬНАЯ ВЕРСИЯ КОЛЛАЖА (видны только до lg экрана) */}
                        <div className="grid lg:hidden grid-cols-2 gap-3 p-2 bg-white rounded-3xl border border-slate-200/80 shadow-md">
                            <div className="col-span-1 h-44 rounded-2xl overflow-hidden shadow-sm">
                                <img src={img1} alt="Арт 1" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="col-span-1 h-44 rounded-2xl overflow-hidden shadow-sm">
                                <img src={img2} alt="Арт 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-1 h-44 rounded-2xl overflow-hidden shadow-sm">
                                <img src={img3} alt="Арт 3" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-1 h-44 rounded-2xl overflow-hidden shadow-sm">
                                <img src={img4} alt="Арт 4" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* 2. ДЕСКТОПНАЯ ВЕРСИЯ КОЛЛАЖА С ПАРАЛЛАКСОМ (скрыта на мобилках) */}
                        <div className="hidden lg:block relative min-h-[520px]">
                            {/* Главное черно-белое фото (Основа, img1) */}
                            <div className="absolute top-16 left-20 w-64 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white z-0">
                                <img
                                    src={img1}
                                    alt="Основное фото"
                                    className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                                />
                            </div>

                            {/* Левая верхняя картинка (img2) */}
                            <div
                                className="absolute top-[-15%] left-[-15%] w-52 h-40 rounded-xl overflow-hidden shadow-2xl z-30 transition-transform duration-200 ease-out border-2 border-white"
                                style={{
                                    transform: `translate3d(${transform.x * 35}px, ${transform.y * 35}px, 0)`,
                                }}
                            >
                                <img src={img2} alt="Арт 1" className="w-full h-full object-cover" />
                            </div>

                            {/* Правая картинка (img3) */}
                            <div
                                className="absolute top-[22%] right-[4%] w-56 h-72 rounded-2xl overflow-hidden shadow-2xl z-20 transition-transform duration-200 ease-out"
                                style={{
                                    transform: `translate3d(${transform.x * 65}px, ${transform.y * 65}px, 0)`,
                                }}
                            >
                                <img src={img3} alt="Арт 2" className="w-full h-full object-cover" />
                            </div>

                            {/* Левая нижняя картинка (img4) */}
                            <div
                                className="absolute bottom-[-5%] left-[-10%] w-44 h-52 rounded-xl overflow-hidden shadow-2xl z-20 transition-transform duration-200 ease-out"
                                style={{
                                    transform: `translate3d(${transform.x * -30}px, ${transform.y * -30}px, 0)`,
                                }}
                            >
                                <img src={img4} alt="Арт 3" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* ТЕКСТ ОПИСАНИЯ */}
                    <div className="space-y-4 text-slate-700">
                        <p className="font-medium text-slate-900 text-lg sm:text-xl">
                            Мы специализируемся на производстве изделий из пластмасс методом литья под давлением, изготовлении пресс-форм и реализации проектов различной сложности. Основное направление нашей деятельности — создание качественных пластиковых компонентов, отвечающих техническим требованиям и задачам заказчиков.
                        </p>
                        <p>
                            Мы рассматриваем каждый проект комплексно, уделяя внимание конструкции изделия, подбору материала, особенностям технологического процесса и требованиям к готовой продукции. Такой подход позволяет находить оптимальные решения для изготовления деталей различного назначения — от небольших функциональных элементов до сложных пластиковых компонентов.
                        </p>
                        <p>
                            В зависимости от поставленной задачи работа может включать анализ технического задания, подготовку конструкторской документации, разработку или адаптацию изделия, изготовление технологической оснастки, настройку процесса литья и выпуск готовой продукции.
                        </p>
                        <p>
                            Мы стремимся выстраивать долгосрочные партнёрские отношения с заказчиками, основанные на профессиональном взаимодействии, прозрачности производственных процессов и ответственном отношении к согласованным требованиям.
                        </p>
                        <p>
                            Наша задача — обеспечить надёжную производственную основу для реализации проектов наших клиентов, предлагая технически обоснованные решения и индивидуальный подход к каждому заказу.
                        </p>
                    </div>
                </div>

                {/* ================= НИЖНИЙ БЛОК: КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ С АНИМАЦИЕЙ ================= */}
                <div className="clear-both pt-16 mt-12 border-t border-slate-200">
                    <div className="mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            Наши ключевые направления
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                            * Состав направлений уточняется после согласования фактических возможностей предприятия.
                        </p>
                    </div>

                    {/* Сетка анимированных карточек */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {keyDirections.map((direction, index) => (
                            <AnimatedCard key={index} index={index}>
                                <div>
                                    {/* Номер пункта */}
                                    <span className="inline-block text-xs font-black tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        0{index + 1}
                                    </span>

                                    {/* Текст направления */}
                                    <p className="text-slate-800 font-semibold text-base leading-snug group-hover:text-slate-900">
                                        {direction}
                                    </p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};