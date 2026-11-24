
import { EXTRA_SERVICES } from '../data/DataServices';

export default function ExtraServicesSection() {
    return (
        <section
            id="extra-services"
            aria-labelledby="extra-services-title"
            className="relative overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
            {/* Декоративные элементы фона */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                        Сопровождение заказов
                    </span>

                    <h2
                        id="extra-services-title"
                        className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Дополнительные услуги
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                        Берём на себя важные задачи после производства:
                        контроль качества, подготовку продукции и организацию
                        поставок.
                    </p>

                    <div className="mt-6 h-1 w-16 rounded-full bg-orange-500" />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
                    {EXTRA_SERVICES.map((service, index) => (
                        <article
                            key={service.title}
                            className={`group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/50 hover:bg-white/[0.11] hover:shadow-2xl hover:shadow-blue-950/40 sm:p-7 ${index < 2
                                    ? 'md:col-span-3'
                                    : 'md:col-span-2'
                                }`}
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-4xl font-light tracking-tight text-white/20 transition-colors duration-300 group-hover:text-orange-400">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span className="h-2 w-2 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_14px_rgba(249,115,22,0.8)]" />
                            </div>

                            <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-orange-300 sm:text-xl">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                {service.desc}
                            </p>

                            <div className="mt-auto pt-7">
                                <div className="h-px w-10 bg-orange-500/70 transition-all duration-500 group-hover:w-full" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
