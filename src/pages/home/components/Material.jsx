import { useEffect, useMemo, useRef, useState } from 'react';
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

    // Реф на нижний блок управления для возврата к концу списка при сворачивании
    const listEndRef = useRef(null);
    const shouldScrollOnCollapse = useRef(false);

    // Фильтрация материалов по выбранной категории
    const filteredMaterials = useMemo(() => {
        return activeCategory === 'Все'
            ? materials
            : materials.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    // Ограничиваем стартовый список в режиме «Все» для компактности страницы
    const displayedMaterials =
        activeCategory === 'Все' && !isExpanded
            ? filteredMaterials.slice(0, 10)
            : filteredMaterials;

    useEffect(() => {
        if (!shouldScrollOnCollapse.current) return;
        shouldScrollOnCollapse.current = false;

        const prefersReduced =
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

        // Ждём следующий кадр, чтобы DOM успел сжаться до 10 карточек
        const frameId = requestAnimationFrame(() => {
            listEndRef.current?.scrollIntoView({
                behavior: prefersReduced ? 'auto' : 'smooth',
                block: 'nearest',
            });
        });

        return () => cancelAnimationFrame(frameId);
    }, [isExpanded]);

    const handleCategoryChange = (category) => {
        shouldScrollOnCollapse.current = false;
        setActiveCategory(category);
        setIsExpanded(false);
    };

    const handleToggleExpand = () => {
        setIsExpanded((prev) => {
            const next = !prev;
            if (prev && !next) {
                shouldScrollOnCollapse.current = true;
            }
            return next;
        });
    };

    return (
        <section
            id="materials"
            aria-labelledby="materials-heading"
            className="relative w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <div className="mx-auto max-w-screen-2xl">
                {/* ==================================
                    ЗАГОЛОВОК СЕКЦИИ
                ================================== */}
                <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-12 lg:grid-cols-2 lg:items-end lg:gap-12">
                    <div>
                        <span className="mb-2.5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:mb-3 sm:text-xs">
                            <span aria-hidden="true" className="h-[2px] w-7 bg-orange-600" />
                            Материальная база производства
                        </span>

                        <h2
                            id="materials-heading"
                            className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
                        >
                            Материалы и полимеры
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-base">
                            Работаем с термопластами различных групп — от базовых до
                            высокотехнологичных инженерных материалов. Подбираем сырьё с учётом
                            требований технической документации, условий эксплуатации и
                            характеристик готовых изделий.
                        </p>
                    </div>
                </div>

                {/* ==================================
                    НАВИГАЦИЯ ПО КАТЕГОРИЯМ
                ================================== */}
                <div className="mb-5 border-y border-slate-200 py-3 sm:mb-7 sm:py-4">
                    <div
                        className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-0"
                        role="group"
                        aria-label="Фильтр материалов по категориям"
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => handleCategoryChange(category)}
                                    aria-pressed={isActive}
                                    className={`shrink-0 rounded-md border px-3 py-2 text-xs font-semibold transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm ${isActive
                                            ? 'border-blue-950 bg-blue-950 text-white'
                                            : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-800'
                                        }`}
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
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-5">
                    <p className="text-xs font-medium text-slate-600 sm:text-sm">
                        {activeCategory === 'Все' ? 'Ассортимент материалов' : activeCategory}
                    </p>

                    <p
                        className="text-xs font-semibold tabular-nums text-slate-600 sm:text-sm"
                        aria-live="polite"
                    >
                        Найдено: {filteredMaterials.length}
                    </p>
                </div>

                {/* ==================================
                    КАТАЛОГ МАТЕРИАЛОВ (2 В РЯД НА МОБИЛКЕ)
                ================================== */}
                {filteredMaterials.length > 0 ? (
                    <ul
                        id="materials-list"
                        className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                    >
                        {displayedMaterials.map((item) => (
                            <li
                                key={`${item.category}-${item.code}`}
                                itemScope
                                itemType="https://schema.org/Thing"
                                className="flex min-w-0"
                            >
                                <article className="group flex w-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-3 transition-all duration-200 motion-reduce:transition-none hover:border-blue-300 hover:shadow-md hover:shadow-slate-900/5 sm:p-5">
                                    {/* КАТЕГОРИЯ */}
                                    <div className="mb-2.5 flex items-center justify-between gap-1.5 sm:mb-4">
                                        <span className="inline-flex max-w-full truncate rounded-sm bg-slate-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-700 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
                                            {item.category}
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                                        />
                                    </div>

                                    {/* МАРКА МАТЕРИАЛА */}
                                    <h3
                                        itemProp="name"
                                        className="break-words text-base font-bold leading-snug tracking-tight text-blue-950 tabular-nums transition-colors duration-200 motion-reduce:transition-none group-hover:text-blue-700 sm:text-2xl"
                                    >
                                        {item.code}
                                    </h3>

                                    {/* НАЗВАНИЕ */}
                                    <p className="mt-1 text-xs font-semibold leading-snug text-slate-800 sm:mt-2 sm:text-sm">
                                        {item.name}
                                    </p>

                                    {/* ОПИСАНИЕ */}
                                    <div className="mt-auto pt-3 sm:pt-5">
                                        <div className="border-t border-slate-100 pt-2 sm:pt-3">
                                            <p
                                                itemProp="description"
                                                className="line-clamp-3 text-[11px] font-normal leading-[1.45] text-slate-600 sm:line-clamp-none sm:text-sm sm:leading-[1.65]"
                                            >
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div
                        id="materials-list"
                        className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-12 text-center"
                    >
                        <p className="text-sm font-semibold text-slate-800 sm:text-base">
                            Материалы этой категории пока не добавлены.
                        </p>
                    </div>
                )}

                {/* ==================================
                    ПОКАЗАТЬ ВСЕ МАТЕРИАЛЫ
                ================================== */}
                {activeCategory === 'Все' && materials.length > 10 && (
                    <div
                        ref={listEndRef}
                        className="mt-7 flex scroll-mb-6 justify-center sm:mt-9"
                    >
                        <button
                            type="button"
                            onClick={handleToggleExpand}
                            aria-expanded={isExpanded}
                            aria-controls="materials-list"
                            className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-blue-950 transition-all duration-200 motion-reduce:transition-none hover:border-blue-600 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
                        >
                            {isExpanded
                                ? 'Свернуть список'
                                : `Показать все материалы (${materials.length})`}

                            <svg
                                className={`h-4 w-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? 'rotate-180' : ''
                                    }`}
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