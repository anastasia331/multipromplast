import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ReadyProductModal({ product, onClose }) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!product) return;

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement;

        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus?.();
        };
    }, [product, onClose]);

    if (!product || typeof document === 'undefined') return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/60 px-3 pb-6 pt-20 backdrop-blur-sm sm:items-center sm:px-6 sm:pt-24 lg:pt-28"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-modal-title"
                aria-describedby="product-modal-description"
                className="relative my-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-8"
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть окно"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                    &times;
                </button>

                <div className="pr-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        Готовая продукция
                    </span>

                    <h2
                        id="product-modal-title"
                        className="mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl"
                    >
                        {product.title}
                    </h2>
                </div>

                <div className="mt-6 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-slate-50 sm:aspect-[16/10]">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.imageAlt || product.title}
                            className="h-full w-full object-contain p-1.5"
                        />
                    ) : (
                        <span className="text-sm text-slate-400">
                            Фотография товара будет добавлена
                        </span>
                    )}
                </div>

                <div className="mt-6">
                    <h3 className="text-base font-semibold text-slate-900">
                        Описание
                    </h3>

                    <p
                        id="product-modal-description"
                        className="mt-2 text-sm leading-7 text-slate-600"
                    >
                        {product.details}
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="text-base font-semibold text-slate-900">
                        Характеристики
                    </h3>

                    <dl className="mt-3 divide-y divide-slate-100">
                        {Object.entries(product.characteristics).map(
                            ([name, value]) => (
                                <div
                                    key={name}
                                    className="flex justify-between gap-4 py-3 text-sm"
                                >
                                    <dt className="text-slate-500">{name}</dt>
                                    <dd className="text-right font-medium text-slate-800">
                                        {value}
                                    </dd>
                                </div>
                            )
                        )}
                    </dl>
                </div>

                <div className="mt-6">
                    <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${product.inStock
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-slate-100 text-slate-600'
                            }`}
                    >
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${product.inStock
                                ? 'bg-emerald-500'
                                : 'bg-slate-400'
                                }`}
                        />
                        {product.inStock ? 'В наличии' : 'Нет в наличии'}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 w-full rounded-xl bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                    Закрыть
                </button>
            </section>
        </div>,
        document.body
    );
}