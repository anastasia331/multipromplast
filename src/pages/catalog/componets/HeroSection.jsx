// Заголовок, описание и баннер
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden py-10 md:py-16 bg-slate-50/70 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-slate-800">
                        Производство пластиковых изделий <br className="hidden sm:inline" />
                        <span className="font-normal text-blue-600">под заказ любой сложности</span>
                    </h1>
                    <p className="mt-3 text-sm sm:text-base font-light text-slate-500 max-w-2xl leading-relaxed">
                        От разработки и изготовления пресс-форм до серийного выпуска готовой продукции.
                        Работаем как с собственными пресс-формами, так и с пресс-формами заказчиков.
                    </p>
                    <div className="mt-8 w-full relative overflow-hidden rounded-2xl h-44 sm:h-60 lg:h-72 shadow-lg">
                        <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1800&q=90" alt="Промышленное производство и оборудование" className="w-full h-full object-cover" loading="eager" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-transparent" />
                        <div className="absolute inset-y-0 left-0 flex flex-col justify-center text-left p-5 sm:p-8 md:p-10 max-w-xl">
                            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-blue-200 font-semibold">Полный цикл производства</span>
                            <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">От пресс-формы до готового изделия</p>
                            <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-md">Разработка, литьё под давлением, контроль качества и подготовка продукции к отгрузке.</p>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full pt-6 border-t border-slate-200">
                        <Stat value="100%" label="Контроль качества" valueClass="text-blue-600" />
                        <Stat value="7+" label="Видов термопластов" valueClass="text-purple-600" />
                        <Stat value="0.01 мм" label="Точность отливки" valueClass="text-orange-500" />
                        <Stat value="B2B / B2G" label="Серийные поставки" valueClass="text-slate-800" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({ value, label, valueClass }) {
    return (
        <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <p className={`text-xl sm:text-2xl font-semibold ${valueClass}`}>{value}</p>
            <p className="text-[11px] sm:text-xs font-light text-slate-500 mt-0.5">{label}</p>
        </div>
    );
}
