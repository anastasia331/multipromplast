
const productionStages = [
    {
        number: "01",
        title: "Техническая документация",
        description:
            "Принимаем чертежи, 3D-модели и технические задания с определёнными требованиями к изделию.",
        note: "Чертежи · 3D-модели · ТЗ",
    },
    {
        number: "02",
        title: "Пресс-формы и оснастка",
        description:
            "Работаем с пресс-формами заказчика и собственной оснасткой. При необходимости организуем изготовление новой пресс-формы.",
        note: "Оснастка заказчика · Собственная · Новая",
    },
    {
        number: "03",
        title: "Серийное производство",
        description:
            "Изготавливаем пластиковые изделия методом литья под давлением по согласованным техническим требованиям.",
        note: "Литьё под давлением · Серийный выпуск",
    },
];

export default function ProductionProcessBlock() {
    return (
        <section
            id="production-process"
            className="
        w-full bg-white
        py-12 sm:py-14 lg:py-16
        px-4 sm:px-6 lg:px-8
      "
        >
            <div className="max-w-screen-2xl mx-auto">

                {/* Заголовок секции */}
                <div className="max-w-3xl mb-8 sm:mb-9">
                    <span className="
            block text-orange-500
            text-xs font-bold
            uppercase tracking-widest
            mb-2
          ">
                        Формат сотрудничества
                    </span>

                    <h2 className="
            text-2xl sm:text-3xl lg:text-4xl
            font-bold tracking-tight
            text-blue-950 leading-tight
            mb-3
          ">
                        Серийное производство по технической документации
                    </h2>

                    <p className="
            text-sm sm:text-base
            text-slate-600 leading-relaxed
            max-w-2xl
          ">
                        Изготавливаем пластиковые изделия методом
                        литья под давлением по чертежам, 3D-моделям
                        и техническим заданиям заказчика. Работаем
                        с готовыми пресс-формами или организуем
                        изготовление новой оснастки.
                    </p>
                </div>

                {/* Карточки этапов */}
                <div className="
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-3 sm:gap-4
        ">
                    {productionStages.map((stage) => (
                        <article
                            key={stage.number}
                            className="
                flex flex-col
                min-w-0
                rounded-xl
                border border-slate-200
                bg-slate-50/70
                p-5 sm:p-6
                transition-colors duration-200
                hover:border-blue-300
                hover:bg-white
              "
                        >
                            <span className="
                text-orange-500
                text-sm font-bold
                mb-4
              ">
                                {stage.number}
                            </span>

                            <h3 className="
                text-lg sm:text-xl
                font-semibold
                text-blue-950
                mb-3
              ">
                                {stage.title}
                            </h3>

                            <p className="
                text-sm
                text-slate-600
                leading-relaxed
                mb-5
              ">
                                {stage.description}
                            </p>

                            <div className="
                mt-auto
                pt-4
                border-t border-slate-200
              ">
                                <span className="
                  text-xs
                  font-medium
                  text-blue-800
                ">
                                    {stage.note}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Нижний блок с призывом к действию */}
                <div className="
          mt-6 sm:mt-8
          rounded-xl
          bg-blue-950
          px-5 py-7
          sm:px-8 sm:py-9
          text-center
        ">
                    <h3 className="
            text-xl sm:text-2xl
            font-bold
            text-white
            mb-2
          ">
                        Есть чертёж или 3D-модель изделия?
                    </h3>

                    <p className="
            max-w-2xl
            mx-auto
            text-sm sm:text-base
            leading-relaxed
            text-blue-100
            mb-6
          ">
                        Направьте техническую документацию.
                        Мы оценим возможность производства
                        и подготовим расчёт стоимости.
                    </p>

                    <a
                        href="#calculation"
                        className="
              inline-flex
              items-center
              justify-center
              gap-2
              w-full sm:w-auto
              min-h-12
              rounded-lg
              bg-orange-500
              px-7 py-3.5
              text-sm font-bold
              text-white
              shadow-sm
              transition-colors duration-200
              hover:bg-orange-600
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-orange-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-blue-950
            "
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="M12 18v-6" />
                            <path d="m9 15 3-3 3 3" />
                        </svg>

                        Отправить чертёж на расчёт
                    </a>

                    <p className="
            mt-4
            text-xs
            text-blue-200
          ">
                        Чертёж · 3D-модель · Техническое задание
                    </p>
                </div>

            </div>
        </section>
    );
}
