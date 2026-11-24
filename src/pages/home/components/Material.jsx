
import { useMemo, useState } from 'react';
import { materials } from './ListMaterials';

const categories = [
    'Все',
    'Базовые',
    'Инженерные',
    'Суперполимеры',
    'Эластомеры и композиты',
];

export default function MaterialsBlock() {
    const [activeCategory, setActiveCategory] = useState('Все');
    const [isExpanded, setIsExpanded] = useState(false);

    // Фильтрация материалов
    const filteredMaterials = useMemo(() => {
        return activeCategory === 'Все'
            ? materials
            : materials.filter(
                (item) => item.category === activeCategory
            );
    }, [activeCategory]);

    // Количество отображаемых карточек
    const displayedMaterials =
        activeCategory === 'Все' && !isExpanded
            ? filteredMaterials.slice(0, 10)
            : filteredMaterials;

    // Переключение категории
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setIsExpanded(false);
    };

    return (
        <section
            id="materials"
            aria-labelledby="materials-heading"
            className="
                relative
                w-full
                bg-white
                py-14
                sm:py-16
                lg:py-20
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div className="max-w-screen-2xl mx-auto">

                {/* ==================================
                    ЗАГОЛОВОК СЕКЦИИ
                ================================== */}

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-5
                    lg:gap-12
                    items-end
                    mb-10
                    lg:mb-12
                ">

                    <div>
                        <span className="
                            inline-flex
                            items-center
                            gap-2
                            text-blue-700
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            mb-3
                        ">
                            <span className="
                                w-7
                                h-[2px]
                                bg-orange-500
                            " />
                            Материальная база производства
                        </span>

                        <h2
                            id="materials-heading"
                            className="
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-bold
                                tracking-tight
                                text-slate-950
                                leading-tight
                            "
                        >
                            Материалы и полимеры
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="
                            text-sm
                            sm:text-base
                            text-slate-600
                            leading-relaxed
                            max-w-2xl
                        ">
                            Работаем с термопластами различных групп —
                            от базовых до высокотехнологичных инженерных
                            материалов. Подбираем сырьё с учётом требований
                            технической документации, условий эксплуатации
                            и характеристик готовых изделий.
                        </p>
                    </div>

                </div>

                {/* ==================================
                    НАВИГАЦИЯ ПО КАТЕГОРИЯМ
                ================================== */}

                <div className="
                    border-y
                    border-slate-200
                    py-4
                    mb-7
                ">

                    <div
                        className="
                            flex
                            gap-2
                            overflow-x-auto
                            pb-1
                            sm:flex-wrap
                            sm:overflow-visible
                            sm:pb-0
                        "
                        role="group"
                        aria-label="Фильтр материалов по категориям"
                    >
                        {categories.map((category) => {
                            const isActive =
                                activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        handleCategoryChange(category)
                                    }
                                    aria-pressed={isActive}
                                    className={`
                                        shrink-0
                                        rounded-md
                                        px-4
                                        py-2.5
                                        text-xs
                                        sm:text-sm
                                        font-semibold
                                        border
                                        transition-colors
                                        duration-200
                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-blue-600
                                        focus-visible:ring-offset-2
                                        ${isActive
                                            ? 'bg-blue-950 text-white border-blue-950'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-800'
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                </div>

                {/* ==================================
                    ИНФОРМАЦИЯ О РЕЗУЛЬТАТАХ
                ================================== */}

                <div className="
                    flex
                    flex-wrap
                    justify-between
                    items-center
                    gap-2
                    mb-5
                ">
                    <p className="
                        text-xs
                        sm:text-sm
                        font-medium
                        text-slate-500
                    ">
                        {activeCategory === 'Все'
                            ? 'Ассортимент материалов'
                            : activeCategory
                        }
                    </p>

                    <p
                        className="
                            text-xs
                            sm:text-sm
                            font-semibold
                            text-slate-500
                            tabular-nums
                        "
                        aria-live="polite"
                    >
                        Найдено: {filteredMaterials.length}
                    </p>
                </div>

                {/* ==================================
                    КАТАЛОГ МАТЕРИАЛОВ
                ================================== */}

                <div
                    id="materials-list"
                    className="
                        grid
                        grid-cols-1
                        min-[480px]:grid-cols-2
                        md:grid-cols-3
                        xl:grid-cols-4
                        2xl:grid-cols-5
                        gap-3
                        sm:gap-4
                    "
                >
                    {displayedMaterials.map((item) => (
                        <article
                            key={`${item.category}-${item.code}`}
                            className="
                                group
                                relative
                                flex
                                min-w-0
                                min-h-[190px]
                                flex-col
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                p-5
                                transition-all
                                duration-200
                                hover:border-blue-300
                                hover:shadow-lg
                                hover:shadow-slate-200/60
                            "
                        >

                            {/* КАТЕГОРИЯ */}

                            <div className="
                                flex
                                items-center
                                justify-between
                                gap-2
                                mb-5
                            ">
                                <span className="
                                    inline-flex
                                    items-center
                                    rounded-sm
                                    bg-slate-100
                                    px-2.5
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-slate-600
                                ">
                                    {item.category}
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-blue-600
                                        opacity-60
                                    "
                                />
                            </div>

                            {/* МАРКА МАТЕРИАЛА */}

                            <h3 className="
                                text-xl
                                sm:text-2xl
                                font-bold
                                tracking-tight
                                text-blue-950
                                leading-tight
                                break-words
                                transition-colors
                                duration-200
                                group-hover:text-blue-700
                            ">
                                {item.code}
                            </h3>

                            {/* НАЗВАНИЕ */}

                            <p className="
                                mt-2
                                text-sm
                                font-semibold
                                text-slate-700
                                leading-snug
                            ">
                                {item.name}
                            </p>

                            {/* ОПИСАНИЕ */}

                            <div className="
                                mt-auto
                                pt-5
                            ">
                                <div className="
                                    border-t
                                    border-slate-100
                                    pt-3
                                ">

                                    <p className="
        text-sm
    sm:text-base
    font-normal
    leading-[1.65]
    text-[#334155]
">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        </article>
                    ))}
                </div>

                {/* ==================================
                    ПУСТОЙ РЕЗУЛЬТАТ
                ================================== */}

                {filteredMaterials.length === 0 && (
                    <div className="
                        rounded-lg
                        border
                        border-slate-200
                        bg-slate-50
                        py-12
                        px-5
                        text-center
                    ">
                        <p className="
                            text-base
                            font-semibold
                            text-slate-800
                        ">
                            Материалы этой категории пока не добавлены.
                        </p>
                    </div>
                )}

                {/* ==================================
                    ПОКАЗАТЬ ВСЕ МАТЕРИАЛЫ
                ================================== */}

                {activeCategory === 'Все' &&
                    materials.length > 10 && (

                        <div className="
                        flex
                        justify-center
                        mt-9
                    ">
                            <button
                                type="button"
                                onClick={() =>
                                    setIsExpanded((prev) => !prev)
                                }
                                aria-expanded={isExpanded}
                                aria-controls="materials-list"
                                className="
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                rounded-lg
                                border
                                border-slate-300
                                bg-white
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-blue-950
                                transition-all
                                duration-200
                                hover:border-blue-600
                                hover:bg-blue-50
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-blue-600
                                focus-visible:ring-offset-2
                            "
                            >
                                {isExpanded
                                    ? 'Свернуть список'
                                    : `Показать все материалы (${materials.length})`
                                }

                                <svg
                                    className={`
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-200
                                    ${isExpanded ? 'rotate-180' : ''}
                                `}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                        </div>
                    )}

            </div>
        </section>
    );
}
