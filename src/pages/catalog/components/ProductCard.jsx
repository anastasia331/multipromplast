import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item, image, isWide }) {
    const IconComponent = item.icon;
    const navigate = useNavigate();


    if (isWide) {
        return (
            <div className="col-span-full relative mt-4 mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 px-6 py-10 sm:px-10 sm:py-14">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-orange-100/50 blur-3xl" />

                <div className="relative mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        Индивидуальные решения
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        Изготовление изделий по вашему проекту
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                        Нужна нестандартная пластиковая деталь или изделие?
                        Изготовим продукцию по вашим чертежам, эскизам или
                        3D-моделям с учётом технических требований.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate('/calculate')}
                        className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Заказать расчёт
                        <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    // Стандартная карточка (на мобилке всё по центру, на ноутбуке — классический вид)
    return (
        <div className="relative bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xs">
            <div className="w-full flex flex-col items-center sm:items-start">

                {/* Шапка: иконка и тег (на мобилке по центру, на десктопе по краям) */}
                <div className="flex items-center justify-between sm:justify-between w-full mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-blue-600 shrink-0">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 shrink-0">
                        {item.tag}
                    </span>
                </div>

                {/* Заголовок (на мобилке текст по центру) */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 text-center sm:text-left w-full">
                    {item.title}
                </h3>

                {/* Блок картинки и описания */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 w-full items-center">

                    {/* Описание (на мобилке по центру) */}
                    <p className="order-2 sm:order-1 flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-light text-center sm:text-left">
                        {item.desc}
                    </p>

                    {/* Аккуратная картинка */}
                    <div className="order-1 sm:order-2 w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-2xs self-center sm:self-auto">
                        <img
                            src={image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}