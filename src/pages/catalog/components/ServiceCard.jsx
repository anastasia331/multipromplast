
import { Check } from 'lucide-react';

export default function ServiceCard({ service, image }) {
    return (
        <article className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div>
                <div className="h-48 overflow-hidden bg-slate-100">
                    {image ? (
                        <img
                            src={image}
                            alt={service.title}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-slate-400">
                            Изображение будет добавлено
                        </div>
                    )}
                </div>

                <div className="p-6 sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                            {service.badge}
                        </span>

                        <span className="text-xs text-slate-500">
                            {service.subtitle}
                        </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-slate-900">
                        {service.title}
                    </h3>

                    <p className="mb-6 text-sm leading-7 text-slate-600">
                        {service.desc}
                    </p>

                    <div className="space-y-3">
                        {service.features.map((feature, index) => (
                            <div
                                key={`${service.id}-${index}`}
                                className="flex items-start gap-2.5 text-sm text-slate-700"
                            >
                                <Check
                                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-700"
                                    aria-hidden="true"
                                />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
