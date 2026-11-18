
const capabilities = [
    {
        number: "01",
        title: "Производственное оборудование",
        highlight: "8 термопластавтоматов",
        description:
            "Производственный парк включает восемь термопластавтоматов различной мощности и возможностей. Оборудование регулярно обновляется и пополняется.",
    },
    {
        number: "02",
        title: "Пресс-формы и оснастка",
        highlight: "Собственная и заказная оснастка",
        description:
            "Работаем с пресс-формами заказчика, используем собственные и организуем изготовление новой оснастки у производственных партнёров.",
    },
    {
        number: "03",
        title: "Сырьё и материалы",
        highlight: "Гибкие условия обеспечения сырьём",
        description:
            "Самостоятельно закупаем необходимые полимерные материалы или работаем с давальческим сырьём заказчика.",
    },
    {
        number: "04",
        title: "Организация производства",
        highlight: "От проработки проекта до серийного выпуска",
        description:
            "Организуем производственный процесс с нуля: от определения необходимых ресурсов и изготовления оснастки до выпуска готовых пластиковых изделий.",
    },
];

export default function ProductionCapabilities() {
    return (
        <section
            id="production"
            className="bg-slate-50 py-12 sm:py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-screen-2xl mx-auto">

                {/* Заголовок */}
                <div className="max-w-2xl mb-8">
                    <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                        Наше производство
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mt-2 mb-3">
                        Производственные возможности
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Организуем производство пластиковых изделий —
                        от изготовления необходимой оснастки до выпуска
                        готовой продукции. Работаем с собственными
                        ресурсами и решениями, а также учитываем
                        требования заказчика.
                    </p>
                </div>

                {/* Карточки */}
                <div className="
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-3 sm:gap-4
        ">
                    {capabilities.map((item) => (
                        <article
                            key={item.number}
                            className="
                flex flex-col
                min-w-0
                rounded-xl
                border border-slate-200
                bg-white
                p-5
                transition-colors duration-200
                hover:border-blue-300
              "
                        >
                            <span className="text-orange-500 text-xs font-bold mb-4">
                                {item.number}
                            </span>

                            <h3 className="text-base font-semibold text-blue-950 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm font-semibold text-blue-700 mb-3">
                                {item.highlight}
                            </p>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
