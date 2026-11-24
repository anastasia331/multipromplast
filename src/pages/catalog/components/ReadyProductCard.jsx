
function ProductImage({ product }) {
    if (product.image) {
        return (
            <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            />
        );
    }

    return (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
            <svg
                viewBox="0 0 48 48"
                fill="none"
                className="h-10 w-10"
                aria-hidden="true"
            >
                <rect
                    x="5"
                    y="8"
                    width="38"
                    height="32"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <circle
                    cx="17"
                    cy="19"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    d="M7 34L18 25L25 31L32 24L41 33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="text-xs">Фото товара</span>
        </div>
    );
}

export default function ReadyProductCard({ product, onDetails }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {product.inStock ? 'В наличии' : 'Нет в наличии'}
                </span>

                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Продукция
                </span>
            </div>

            <div className="mb-4 flex aspect-[5/3] items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <ProductImage product={product} />
            </div>

            <div className="flex flex-1 flex-col">
                <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
                    {product.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {product.description}
                </p>

                <button
                    type="button"
                    onClick={() => onDetails(product)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-700/80 px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors duration-200 hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    aria-label={`Подробнее о товаре: ${product.title}`}
                >
                    Подробнее
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path
                            d="M4 10h12m-5-5 5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </article>
    );
}
