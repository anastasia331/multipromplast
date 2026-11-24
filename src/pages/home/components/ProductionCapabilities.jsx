
import { memo } from 'react';

const capabilities = [
    {
        number: '01',
        title: 'Производственное оборудование',
        highlight: '8 термопластавтоматов',
        points: [
            'Литьё пластмасс под давлением',
            'Оборудование различной мощности',
            'Изготовление пластиковых изделий',
        ],
    },
    {
        number: '02',
        title: 'Проектирование и изготовление пресс-форм',
        highlight: 'Собственная разработка оснастки',
        points: [
            'Проектирование пресс-форм',
            'Изготовление новой оснастки',
            'Работа с пресс-формами заказчика',
        ],
    },
    {
        number: '03',
        title: 'Полимерные материалы',
        highlight: 'Сырьё предприятия и заказчика',
        points: [
            'Использование собственного сырья',
            'Работа с материалами заказчика',
            'Учёт требований к материалу изделия',
        ],
    },
    {
        number: '04',
        title: 'Организация производства',
        highlight: 'От проекта до серийного выпуска',
        points: [
            'Анализ технической документации',
            'Подготовка производственного процесса',
            'Изготовление серийной продукции',
        ],
    },
];

export default memo(function ProductionCapabilities() {
    return (
        <section
            id="production"
            aria-labelledby="production-heading"
            className="
                w-full
                bg-[#F4F7FC]
                py-14 sm:py-16 lg:py-20 xl:py-24
                px-4 sm:px-6 lg:px-8
            "
        >
            <div className="max-w-screen-2xl mx-auto">

                {/* Заголовок секции */}
                <header className="
                    grid grid-cols-1
                    lg:grid-cols-12
                    gap-5 lg:gap-12
                    items-end
                    mb-9 sm:mb-11 lg:mb-12
                ">

                    <div className="lg:col-span-7">
                        <span className="
                            block
                            text-orange-600
                            text-xs font-bold
                            uppercase tracking-[0.18em]
                            mb-3
                        ">
                            Производственные возможности
                        </span>

                        <h2
                            id="production-heading"
                            className="
                                text-2xl
                                sm:text-3xl
                                lg:text-4xl
                                xl:text-[42px]
                                font-bold
                                tracking-tight
                                leading-tight
                                text-blue-950
                            "
                        >
                            Всё необходимое для производства
                            пластиковых изделий
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pb-1">
                        <p className="
                            text-sm sm:text-base
                            text-slate-600
                            leading-relaxed
                            lg:border-l-2
                            lg:border-blue-200
                            lg:pl-5
                        ">
                            Производственные мощности, проектирование
                            и изготовление пресс-форм, обеспечение
                            материалами и организация серийного
                            выпуска продукции.
                        </p>
                    </div>

                </header>

                {/* Карточки производственных компетенций */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3 sm:gap-4 lg:gap-5
                ">

                    {capabilities.map((item) => (
                        <article
                            key={item.number}
                            className="
                                group
                                flex
                                gap-4 sm:gap-5
                                min-w-0
                                rounded-xl
                                border border-slate-200
                                bg-white
                                p-5 sm:p-6 lg:p-7
                                transition-all duration-300
                                hover:border-blue-200
                                hover:shadow-[0_12px_32px_rgba(15,23,42,0.05)]
                            "
                        >

                            {/* Номер */}
                            <div className="shrink-0 w-8 pt-1">
                                <span className="
                                    text-sm
                                    font-bold
                                    tracking-wider
                                    text-orange-600
                                ">
                                    {item.number}
                                </span>

                                <div className="
                                    w-6 h-px
                                    bg-orange-300
                                    mt-3
                                    group-hover:w-8
                                    group-hover:bg-orange-500
                                    transition-all duration-300
                                " />
                            </div>

                            {/* Содержимое */}
                            <div className="flex-1 min-w-0">

                                <h3 className="
                                    text-base
                                    sm:text-lg
                                    lg:text-xl
                                    font-semibold
                                    text-blue-950
                                    leading-snug
                                    mb-3
                                ">
                                    {item.title}
                                </h3>

                                <p className="
                                    text-sm
                                    font-semibold
                                    text-blue-700
                                    leading-relaxed
                                    mb-4
                                ">
                                    {item.highlight}
                                </p>

                                <ul className="
                                    flex flex-col
                                    gap-2.5
                                    text-sm
                                    text-slate-600
                                    leading-relaxed
                                ">
                                    {item.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-2.5"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="
                                                    shrink-0
                                                    w-1.5 h-1.5
                                                    rounded-full
                                                    bg-orange-500
                                                    mt-[7px]
                                                "
                                            />

                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
});
