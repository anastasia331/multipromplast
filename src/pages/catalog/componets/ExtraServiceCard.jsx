// Карточка дополнительной услуги
import { ShieldCheck } from 'lucide-react';

export default function ExtraServiceCard({ service, image }) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-44 overflow-hidden bg-slate-100"><img src={image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /></div>
            <div className="p-6"><div className="p-3 w-max rounded-xl bg-orange-50 border border-orange-100 text-orange-500 mb-4"><ShieldCheck className="w-5 h-5" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p></div>
        </div>
    );
}
