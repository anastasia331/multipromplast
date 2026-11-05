export default function MaterialsBlock() {
    // Полный список всех видов пластика для производства
    const materials = [
        {
            code: "ABS",
            name: "АБС-пластик",
            desc: "Ударная прочность, корпуса, автодетали",
            tag: "Популярное",
        },
        {
            code: "PP",
            name: "Полипропилен",
            desc: "Химостойкость, емкости, автопром",
            tag: "Базовый",
        },
        {
            code: "PE / HDPE",
            name: "Полиэтилен (ПНД/ПВД)",
            desc: "Износостойкость, тара, трубы",
            tag: "Базовый",
        },
        {
            code: "PA6 / PA66",
            name: "Полиамид (Капролон)",
            desc: "Высокое трение, шестерни, втулки",
            tag: "Инженерный",
        },
        {
            code: "PC",
            name: "Поликарбонат",
            desc: "Прозрачность, ударопрочность, оптика",
            tag: "Инженерный",
        },
        {
            code: "POM",
            name: "Полиацеталь (ПОМ)",
            desc: "Точная механика, жесткость, подшипники",
            tag: "Инженерный",
        },
        {
            code: "PET / PETG",
            name: "ПЭТ / ПЭТГ",
            desc: "Прозрачность, бутылки, корпусные детали",
            tag: "Популярное",
        },
        {
            code: "PS / HIPS",
            name: "Полистирол",
            desc: "Легкая формовка, одноразовая посуда, корпуса",
            tag: "Базовый",
        },
        {
            code: "PVC",
            name: "ПВХ (Поливинилхлорид)",
            desc: "Жесткий и гибкий, профили, изоляция",
            tag: "Спецпластик",
        },
        {
            code: "PMMA",
            name: "Акрил (Оргстекло)",
            desc: "Высокая прозрачность, светотехника",
            tag: "Спецпластик",
        },
        {
            code: "TPU / TPE",
            name: "Термоэластопласты",
            desc: "Гибкость, резиноподобность, уплотнители",
            tag: "Эластомер",
        },
        {
            code: "PEEK",
            name: "ПИИК (PEEK)",
            desc: "Сверхтермостойкость, авиация, медицина",
            tag: "Премиум",
        },
    ];

    return (
        <section className="w-full py-12 px-6 sm:px-10 bg-slate-900 border-y border-slate-800">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок блока */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <span className="text-xs text-indigo-400 uppercase tracking-widest font-semibold block mb-1">
                            Сырьевая база
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Материалы, с которыми мы работаем
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm max-w-md">
                        Подбираем полимеры под любые задачи: от стандартных бытовых изделий до высоконагруженных инженерных деталей.
                    </p>
                </div>

                {/* Сетка материалов */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {materials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
                        >
                            <div>
                                {/* Иконка / Код полимера */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        ⬡
                                    </span>
                                    <span className="text-[10px] text-slate-500 group-hover:text-slate-400">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Название и код */}
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                    {item.code}
                                </h3>
                                <p className="text-xs font-medium text-slate-300 mb-2">
                                    {item.name}
                                </p>
                            </div>

                            {/* Короткое описание применения */}
                            <p className="text-[11px] text-slate-400 leading-tight pt-2 border-t border-slate-700/40">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}