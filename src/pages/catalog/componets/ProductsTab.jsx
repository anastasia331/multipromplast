	// Вкладка производственных услуг
import { PRODUCT_CATEGORIES } from '../data/DataServices';
import ProductCard from './ProductCard';
import ProductionHighlights from './ProductionHighlights';

export default function ProductsTab({ onOpenCalculator }) {
    return (
        <div className="space-y-10 animate-fadeIn relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Каталог продукции</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Категории производимой продукции</h2>
                <p className="text-sm text-slate-600 mt-1">Изготавливаем практически любые детали методом литья под давлением</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                {PRODUCT_CATEGORIES.map((item, index) => {
                    const isLastAndOdd = index === PRODUCT_CATEGORIES.length - 1 && (PRODUCT_CATEGORIES.length % 3 !== 0);

                    return (
                        <ProductCard
                            key={item.id}
                            item={item}
                            index={index}
                            image={item.image}
                            isWide={isLastAndOdd}
                            // Передаем функцию открытия модалки в карточку:
                            onOpenCalculator={onOpenCalculator}
                        />
                    );
                })}
            </div>

            <ProductionHighlights />
        </div>
    );
}