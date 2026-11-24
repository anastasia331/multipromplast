
const stats = [
    { value: "100%", label: "Контроль качества" },
    { value: "7+", label: "Видов термопластов" },
    { value: "0,01 мм", label: "Точность отливки" },
    { value: "B2B / B2G", label: "Промышленные поставки" },
];

export default function HeroSection() {
    return (
        <section
            aria-labelledby="products-title"
            className="bg-white"
        >
            {/* FULL WIDTH HERO BANNER */}

            <div className="relative isolate overflow-hidden min-h-[390px] sm:min-h-[440px] lg:min-h-[480px] flex items-center bg-slate-950">

                {/* Background image */}
                <img
                    src="https://media.anhp.vn/files/2024/05z5456037886514_f7ef29cca8c41fca030cc0a67ed795ca%20%281%29.jpg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />

                {/* Dark overlay for text readability */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/25"
                />

                {/* Additional contrast on mobile */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-slate-950/15 lg:bg-transparent"
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">

                    <div className="max-w-2xl">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-8 h-[2px] bg-blue-500" />

                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                                МУЛЬТИПРОМПЛАСТ
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            id="products-title"
                            className="text-[30px] sm:text-4xl lg:text-[42px] font-semibold leading-[1.18] tracking-tight text-white"
                        >
                            Производство пластиковых изделий
                            <span className="block mt-2 text-blue-300">
                                для промышленного бизнеса
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 text-sm sm:text-base lg:text-[17px] leading-relaxed text-white max-w-xl">
                            Разработка и изготовление пресс-форм,
                            литьё пластмасс под давлением и серийное
                            производство готовых изделий для предприятий.
                        </p>

                        {/* Additional information */}
                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">

                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <span className="text-sm text-white font-medium">
                                    Полный цикл производства
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <span className="text-sm text-white font-medium">
                                    Серийные поставки
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Bottom decorative line */}
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600"
                />

            </div>

            {/* COMPANY STATISTICS */}

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 py-7 sm:py-9">

                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`px-4 sm:px-7 py-2 ${index >= 2 ? "border-t border-slate-200 lg:border-t-0" : ""
                                }`}
                        >

                            <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                                {stat.value}
                            </div>

                            <div className="mt-1 text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                                {stat.label}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
