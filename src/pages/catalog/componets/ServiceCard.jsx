// Карточка услуги
import { Check } from 'lucide-react';

export default function ServiceCard({ service, image }) {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs">
            <div>
                <div className="mb-6 -mx-8 -mt-8 h-48 overflow-hidden rounded-t-2xl bg-slate-100"><img src={image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" /></div>
                <div className="flex items-center justify-between mb-4"><span className="text-xs font-bold uppercase tracking-wider text-purple-600 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">{service.badge}</span><span className="text-xs text-slate-500">{service.subtitle}</span></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="space-y-2">{service.features.map((feature, index) => <div key={`${service.id}-${index}`} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>{feature}</span></div>)}</div>
            </div>
        </div>
    );
}
