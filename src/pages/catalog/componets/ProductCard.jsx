import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item, image, isWide }) {
    const IconComponent = item.icon;
    const navigate = useNavigate();

    if (isWide) {
        return (
            <div className="col-span-full relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                <div className="flex-1 z-10 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-blue-400 border border-white/10 shrink-0">
                            <IconComponent className="w-6 h-6 stroke-[1.75]" />
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                            {item.tag}
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6 max-w-2xl mx-auto md:mx-0">
                        {item.desc} Изготовим уникальные детали по вашим чертежам, эскизам или 3D-моделям с гарантией качества.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate('/calculate')}
                        className="mx-auto md:mx-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <span>Заказать расчет</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

                <div className="w-full md:w-72 h-52 sm:h-56 shrink-0 rounded-xl overflow-hidden relative z-10">
                    <img
                        src={image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center scale-110"
                        loading="lazy"
                    />
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