
import { useState } from "react";
import { materials } from "./ListMaterials";

const categories = [
    "Все",
    "Базовые",
    "Инженерные",
    "Суперполимеры",
    "Эластомеры и композиты",
];

export default function MaterialsBlock() {
    const [activeCategory, setActiveCategory] = useState("Все");
    const [isExpanded, setIsExpanded] = useState(false);

    const filteredMaterials =
        activeCategory === "Все"
            ? materials
            : materials.filter(
                (item) => item.category === activeCategory
            );

    const displayedMaterials =
        activeCategory === "Все" && !isExpanded
            ? filteredMaterials.slice(0, 10)
            : filteredMaterials;

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setIsExpanded(false);
    };

    return (
        <section
            id="materials"
            className="w-full bg-white py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-screen-2xl mx-auto">

                {/* Заголовок */}
                <div className="
          grid grid-cols-1 lg:grid-cols-2
          gap-3 lg:gap-10
          items-start mb-7
        ">
                    <div>
                        <span className="
              block text-orange-500 text-[11px] sm:text-xs
              font-bold uppercase tracking-widest mb-2
            ">
                            Материалы для производства
                        </span>

                        <h2 className="
              text-2xl sm:text-3xl lg:text-4xl
              font-bold tracking-tight text-blue-950
              leading-tight
            ">
                            Материалы и полимеры
                        </h2>
                    </div>

                    <p className="
            text-sm sm:text-base text-slate-600
            leading-relaxed max-w-2xl
            lg:pt-6
          ">
                        Работаем с термопластами различных групп —
                        от базовых до инженерных материалов.
                        Используем сырьё компании и заказчика
                        с учётом требований технической документации
                        и характеристик готового изделия.
                    </p>
                </div>

                {/* Фильтры */}
                <div
                    className="
            flex flex-wrap gap-2
            mb-5 sm:mb-6
          "
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
                                className={`
                  rounded-md px-3 py-2
                  text-xs sm:text-sm font-semibold
                  border transition-colors duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-600
                  focus-visible:ring-offset-2
                  ${isActive
                                        ? "bg-blue-950 text-white border-blue-950"
                                        : "bg-white text-blue-950 border-slate-200 hover:border-blue-400 hover:bg-blue-50"
                                    }
                `}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Сетка материалов */}
                <div className="
          grid grid-cols-1  min-[480px]:grid-cols-2
          md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3
        ">
                    {displayedMaterials.map((item) => (
                        <article
                            key={`${item.category}-${item.code}`}
                            className="
                group min-w-0 h-full min-h-[180px]  flex flex-col
                rounded-lg  border border-slate-200
                bg-slate-50/60  p-4  transition-colors duration-200
                hover:bg-white  hover:border-blue-300
              ">
                            {/* Верхняя часть */}
                            <div>
                                <span className="
                  inline-flex items-center
                  rounded px-2 py-1 mb-2.5
                  bg-blue-50
                  text-[10px] font-semibold
                  text-blue-800
                ">
                                    {item.category}
                                </span>

                                <h3 className="
                  text-lg sm:text-xl
                  font-bold tracking-tight
                  text-blue-950 leading-tight
                  mb-1
                  group-hover:text-blue-700
                  transition-colors
                ">
                                    {item.code}
                                </h3>

                                <p className="
                  text-xs sm:text-sm
                  font-medium text-slate-700
                  leading-snug
                ">
                                    {item.name}
                                </p>
                            </div>

                            {/* Нижняя часть — выравнивается по низу */}
                            <div className="mt-auto pt-3">
                                <div className="border-t border-slate-200 pt-3">
                                    <p className="
                    text-xs leading-relaxed
                    text-slate-600
                  ">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Показать все / Свернуть */}
                {activeCategory === "Все" && materials.length > 10 && (
                    <div className="flex justify-center mt-6">
                        <button
                            type="button"
                            onClick={() => setIsExpanded((prev) => !prev)}
                            aria-expanded={isExpanded}
                            className="
                inline-flex items-center gap-2
                rounded-lg border border-blue-200
                bg-white px-5 py-2.5
                text-sm font-semibold text-blue-800
                transition-colors duration-200
                hover:bg-blue-50 hover:border-blue-400
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
                focus-visible:ring-offset-2
              "
                        >
                            {isExpanded
                                ? "Свернуть список"
                                : `Показать все материалы (${materials.length})`}

                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
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
