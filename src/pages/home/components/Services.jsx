
import { memo } from 'react';

const productionStages = [
    {
        number: '01',
        title: 'Техническая документация',
        description:
            'Изучаем исходные данные и требования к будущему изделию.',
        points: [
            'Технические задания',
            'Чертежи и 3D-модели',
            'Требования к материалу и конструкции',
        ],
    },
    {
        number: '02',
        title: 'Пресс-формы и оснастка',
        description:
            'Подготавливаем оснастку для изготовления пластиковых изделий.',
        points: [
            'Использование пресс-форм заказчика',
            'Проектирование новой оснастки',
            'Изготовление пресс-форм',
        ],
    },
    {
        number: '03',
        title: 'Подготовка производства',
        description:
            'Формируем необходимые условия для запуска производственного процесса.',
        points: [
            'Подготовка полимерного сырья',
            'Подготовка оборудования',
            'Согласование параметров литья',
        ],
    },
    {
        number: '04',
        title: 'Изготовление продукции',
        description:
            'Изготавливаем пластиковые изделия в соответствии с согласованными требованиями.',
        points: [
            'Литьё пластмасс под давлением',
            'Изготовление партий продукции',
            'Серийный выпуск изделий',
        ],
    },
];

export default memo(function ProductionProcessBlock() {
    return (
        <section
            id="production-process"
            aria-labelledby="process-heading"
            className="
                relative
                isolate
                overflow-hidden
                w-full
                bg-[#101F38]
                py-16 sm:py-20 lg:py-24 xl:py-28
                px-4 sm:px-6 lg:px-8
            "
        >

            {/* Декоративный технологический фон */}
            <div
                aria-hidden="true"
                className="
                    absolute inset-0 -z-10
                    pointer-events-none
                    bg-[radial-gradient(ellipse_at_85%_10%,rgba(37,99,235,0.18),transparent_42%),radial-gradient(ellipse_at_5%_90%,rgba(234,88,12,0.07),transparent_35%)]
                "
            />

            <div
                aria-hidden="true"
                className="
                    absolute inset-0 -z-10
                    pointer-events-none
                    opacity-[0.12]
                    bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]
                    bg-[size:56px_56px]
                "
            />

            <div className="max-w-screen-2xl mx-auto">

                {/* Заголовок */}
                <header className="
                    grid grid-cols-1
                    lg:grid-cols-12
                    gap-5 lg:gap-12
                    items-end
                    mb-12 sm:mb-14 lg:mb-16
                ">

                    <div className="lg:col-span-7">

                        <span className="
                            block
                            text-orange-400
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            mb-4
                        ">
                            Организация производства
                        </span>

                        <h2
                            id="process-heading"
                            className="
                                text-2xl
                                sm:text-3xl
                                lg:text-4xl
                                xl:text-[44px]
                                font-bold
                                tracking-tight
                                leading-tight
                                text-white
                            "
                        >
                            От технической задачи
                            до готовой продукции
                        </h2>

                    </div>

                    <div className="lg:col-span-5 lg:pb-1">

                        <p className="
                            text-sm
                            sm:text-base
                            text-slate-300
                            leading-relaxed
                            lg:border-l-2
                            lg:border-blue-500
                            lg:pl-5
                        ">
                            Организуем производственный процесс
                            с учётом технической документации,
                            требований к оснастке и материалам —
                            от подготовки проекта до серийного
                            изготовления пластиковых изделий.
                        </p>

                    </div>

                </header>

                {/* Этапы производственного процесса */}
                <div className="relative">

                    {/* Соединительная линия на больших экранах */}
                    <div
                        aria-hidden="true"
                        className="
                            hidden xl:block
                            absolute
                            top-[23px]
                            left-[12.5%]
                            right-[12.5%]
                            h-px
                            bg-gradient-to-r
                            from-orange-500/20
                            via-blue-400/50
                            to-orange-500/20
                        "
                    />

                    <ol className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-4
                        gap-4
                        lg:gap-5
                    ">

                        {productionStages.map((stage) => (
                            <li
                                key={stage.number}
                                className="
                                    relative
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-[#192B48]/90
                                    p-5
                                    sm:p-6
                                    lg:p-7
                                    transition-all
                                    duration-300
                                    hover:border-blue-400/50
                                    hover:bg-[#1D3355]
                                    hover:-translate-y-1
                                "
                            >

                                {/* Номер этапа */}
                                <div className="
                                    relative
                                    z-10
                                    flex
                                    items-center
                                    gap-3
                                    mb-7
                                ">

                                    <span className="
                                        flex
                                        items-center
                                        justify-center
                                        w-11
                                        h-11
                                        shrink-0
                                        rounded-full
                                        border
                                        border-orange-400/50
                                        bg-[#101F38]
                                        text-orange-400
                                        text-sm
                                        font-bold
                                    ">
                                        {stage.number}
                                    </span>

                                    <span className="
                                        h-px
                                        flex-1
                                        bg-white/10
                                    " />

                                </div>

                                {/* Название этапа */}
                                <h3 className="
                                    text-lg
                                    sm:text-xl
                                    font-semibold
                                    text-white
                                    leading-snug
                                    mb-3
                                ">
                                    {stage.title}
                                </h3>

                                {/* Краткое описание */}
                                <p className="
                                    text-sm
                                    text-slate-300
                                    leading-relaxed
                                    mb-6
                                ">
                                    {stage.description}
                                </p>

                                {/* Содержание этапа */}
                                <ul className="
                                    flex
                                    flex-col
                                    gap-3
                                    pt-5
                                    border-t
                                    border-white/10
                                ">

                                    {stage.points.map((point) => (
                                        <li
                                            key={point}
                                            className="
                                                flex
                                                items-start
                                                gap-2.5
                                                text-sm
                                                text-slate-200
                                                leading-relaxed
                                            "
                                        >

                                            <span
                                                aria-hidden="true"
                                                className="
                                                    shrink-0
                                                    w-1.5
                                                    h-1.5
                                                    rounded-full
                                                    bg-orange-400
                                                    mt-[7px]
                                                "
                                            />

                                            <span>{point}</span>

                                        </li>
                                    ))}

                                </ul>

                            </li>
                        ))}

                    </ol>

                </div>

                {/* Обращение к заказчику */}
                <div className="
                    relative
                    mt-10
                    sm:mt-12
                    rounded-xl
                    border
                    border-white/10
                    bg-[#192B48]
                    p-6
                    sm:p-8
                    lg:px-10
                    lg:py-9
                ">

                    <div className="
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-6
                    ">

                        <div className="max-w-3xl">

                            <span className="
                                block
                                text-orange-400
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                mb-3
                            ">
                                Сотрудничество
                            </span>

                            <h3 className="
                                text-xl
                                sm:text-2xl
                                font-bold
                                text-white
                                leading-tight
                                mb-3
                            ">
                                Есть задача на производство пластиковых изделий?
                            </h3>

                            <p className="
                                text-sm
                                sm:text-base
                                text-slate-300
                                leading-relaxed
                            ">
                                Направьте техническую документацию,
                                чертежи или 3D-модель. Рассмотрим
                                требования проекта и оценим возможности
                                его реализации на производстве.
                            </p>

                        </div>

                        <div className="
                            shrink-0
                            flex
                            flex-col
                            items-start
                            lg:items-end
                            gap-3
                        ">

                            <a
                                href="/calculate"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    w-full
                                    sm:w-auto
                                    min-h-12
                                    rounded-lg
                                    bg-orange-500
                                    px-7
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-colors
                                    duration-200
                                    hover:bg-orange-600
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-orange-400
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-[#192B48]
                                "
                            >
                                Направить проект на оценку

                                <span aria-hidden="true">
                                    →
                                </span>
                            </a>

                            <span className="
                                text-xs
                                text-slate-400
                            ">
                                Чертежи · 3D-модели · Техническое задание
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
});
