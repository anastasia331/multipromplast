
import { PRODUCT_CATEGORIES } from '../data/DataServices';
import ProductCard from './ProductCard';


export default function ProductsTab() {
    return (
        <section
            id="custom-manufacturing"
            aria-labelledby="production-directions-title"
            className="space-y-10"
        >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm sm:p-8">
                <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                        Наши компетенции
                    </span>
                </div>

                <h2
                    id="production-directions-title"
                    className="text-xl font-bold text-slate-900 sm:text-2xl"
                >
                    Основные направления производства
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                    Производим широкий спектр пластиковых изделий и
                    комплектующих для различных отраслей промышленности,
                    строительства и бизнеса.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {PRODUCT_CATEGORIES.map((item, index) => {
                    const isLastAndOdd =
                        index === PRODUCT_CATEGORIES.length - 1 &&
                        PRODUCT_CATEGORIES.length % 3 !== 0;

                    return (
                        <ProductCard
                            key={item.id}
                            item={item}
                            image={item.image}
                            isWide={isLastAndOdd}
                        />
                    );
                })}
            </div>
        </section>
    );
}
