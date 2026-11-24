
import { useCallback, useState } from 'react';

import { READY_PRODUCTS } from '../data/readyProducts';
import ReadyProductCard from './ReadyProductCard';
import ReadyProductModal from './ReadyProductModal';

export default function ReadyProductsSection() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const closeModal = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    const visibleProducts = READY_PRODUCTS;

    return (
        <section
            id="ready-products"
            aria-labelledby="ready-products-title"
            className="relative isolate overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
        >
            {/* Тонкая инженерная сетка */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(15, 23, 42, 0.045) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(15, 23, 42, 0.045) 1px, transparent 1px)
                    `,
                    backgroundSize: '44px 44px',
                }}
            />

            {/* Декоративная геометрия */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 top-10 -z-10 h-80 w-80 rounded-full border border-slate-300/60"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-24 -z-10 h-56 w-56 rounded-full border border-blue-200/70"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full border border-slate-300/60"
            />

            <div className="mx-auto max-w-7xl">
                {/* Заголовок */}
                <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-8 bg-orange-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                                Каталог продукции
                            </span>
                        </div>

                        <h2
                            id="ready-products-title"
                            className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
                        >
                            Готовая продукция
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            Пластиковые изделия и комплектующие для мебельного,
                            строительного и промышленного применения.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:self-auto">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        {READY_PRODUCTS.length} товаров в каталоге
                    </div>
                </div>

                {/* Сетка товаров */}
                <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-3">
                    {visibleProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={
                                index >= 4 && !showAll
                                    ? 'hidden sm:block'
                                    : 'block'
                            }
                        >
                            <ReadyProductCard
                                product={product}
                                onDetails={setSelectedProduct}
                            />
                        </div>
                    ))}
                </div>

                {/* Раскрытие каталога на мобильных устройствах */}
                {READY_PRODUCTS.length > 4 && (
                    <div className="mt-7 flex justify-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setShowAll((current) => !current)}
                            aria-expanded={showAll}
                            className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                        >
                            {showAll ? 'Свернуть каталог' : 'Показать все товары'}

                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''
                                    }`}
                                aria-hidden="true"
                            >
                                <path
                                    d="m5 7 5 5 5-5"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <ReadyProductModal
                product={selectedProduct}
                onClose={closeModal}
            />
        </section>
    );
}
