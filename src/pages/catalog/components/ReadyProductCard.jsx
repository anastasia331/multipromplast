import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Модалка просмотра только изображения товара
function ProductImageModal({ src, alt, title, onClose, triggerRef }) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!src) return;

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

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
            document.body.style.paddingRight = previousPaddingRight;
            triggerRef?.current?.focus();
        };
    }, [src, onClose, triggerRef]);

    if (!src || typeof document === 'undefined') return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/85 px-4 pb-6 pt-20 backdrop-blur-sm sm:px-8 sm:pt-24 lg:pt-28"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={alt || title || 'Просмотр изображения товара'}
                className="relative flex max-h-[80dvh] w-full max-w-4xl items-center justify-center rounded-2xl border border-white/15 bg-slate-900 p-3 shadow-2xl sm:p-5"
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть просмотр изображения"
                    className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 5l10 10M15 5 5 15"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <img
                    src={src}
                    alt={alt || title}
                    className="max-h-[72dvh] w-auto max-w-full rounded-xl object-contain"
                />
            </div>
        </div>,
        document.body
    );
}

// Компонент изображения или заглушки товара
function ProductImage({ product, priority = false, onOpenImage, buttonRef }) {
    if (product.image) {
        return (
            <button
                ref={buttonRef}
                type="button"
                onClick={onOpenImage}
                aria-label={`Увеличить изображение: ${product.title}`}
                className="relative block h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600"
            >
                <img
                    src={product.image}
                    alt={product.imageAlt || product.title}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    itemProp="image"
                    className="h-full w-full object-cover object-center transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
                />
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/70 text-white opacity-90 transition-colors duration-200 motion-reduce:transition-none group-hover:bg-slate-950 sm:bottom-2.5 sm:right-2.5 sm:h-8 sm:w-8"
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    >
                        <circle
                            cx="9"
                            cy="9"
                            r="5.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                        />
                        <path
                            d="M13.5 13.5 17 17M9 6.8v4.4M6.8 9h4.4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            </button>
        );
    }

    return (
        <div
            className="flex h-full w-full flex-col items-center justify-center gap-1.5 px-2 text-center text-slate-400"
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 48 48"
                fill="none"
                className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
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
            <span className="text-[11px] font-medium leading-tight sm:text-xs">
                Фото товара
            </span>
        </div>
    );
}

// Основная карточка товара
export default function ReadyProductCard({ product, onDetails, priority = false }) {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const imageButtonRef = useRef(null);
    const isInStock = Boolean(product.inStock);

    const handleOpenImage = useCallback(() => {
        if (!product.image) return;
        setIsImageModalOpen(true);
    }, [product.image]);

    const handleCloseImage = useCallback(() => {
        setIsImageModalOpen(false);
    }, []);

    return (
        <>
            <article
                itemScope
                itemType="https://schema.org/Product"
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 motion-reduce:hover:translate-y-0 sm:p-5"
            >
                {/* Статус наличия */}
                <div className="mb-3 flex min-w-0 items-center justify-between gap-2 sm:mb-4">
                    <span
                        className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none ${isInStock
                                ? 'bg-emerald-50 text-emerald-800'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                    >
                        <span
                            aria-hidden="true"
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${isInStock ? 'bg-emerald-500' : 'bg-slate-400'
                                }`}
                        />
                        {isInStock ? 'В наличии' : 'Нет в наличии'}
                    </span>

                    <link
                        itemProp="availability"
                        href={
                            isInStock
                                ? 'https://schema.org/InStock'
                                : 'https://schema.org/OutOfStock'
                        }
                    />
                </div>

                {/* Крупный блок изображения на весь размер плашки */}
                <div className="mb-3.5 flex aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100 sm:mb-4 sm:aspect-[5/3]">
                    <ProductImage
                        product={product}
                        priority={priority}
                        onOpenImage={handleOpenImage}
                        buttonRef={imageButtonRef}
                    />
                </div>

                {/* Контентная часть */}
                <div className="flex min-w-0 flex-1 flex-col">
                    <h3
                        itemProp="name"
                        className="min-h-[2.75rem] text-sm font-bold leading-snug text-slate-900 sm:min-h-[3rem] sm:text-base"
                    >
                        {product.title}
                    </h3>

                    <p
                        itemProp="description"
                        className="mt-2 line-clamp-3 flex-1 text-xs leading-5 text-slate-600 sm:line-clamp-4 sm:text-sm sm:leading-6"
                    >
                        {product.description}
                    </p>

                    <button
                        type="button"
                        onClick={() => onDetails?.(product)}
                        aria-label={`Подробнее о товаре: ${product.title}`}
                        className="mt-4 inline-flex w-full shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-blue-700/80 px-3 py-2.5 text-xs font-semibold text-blue-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:mt-5 sm:gap-2 sm:px-4 sm:text-sm"
                    >
                        <span className="truncate">Подробнее</span>
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-4 w-4 shrink-0"
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

            {isImageModalOpen && product.image && (
                <ProductImageModal
                    src={product.image}
                    alt={product.imageAlt}
                    title={product.title}
                    onClose={handleCloseImage}
                    triggerRef={imageButtonRef}
                />
            )}
        </>
    );
}