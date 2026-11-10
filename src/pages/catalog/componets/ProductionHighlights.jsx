// Серийное производство и индивидуализация
import { CheckCircle2 } from 'lucide-react';

export default function ProductionHighlights() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Серийность</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Серийное и массовое производство</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                    {['Повторяемость геометрии и размеров деталей.', 'Стабильность качества от партии к партии.', 'Возможность регулярного выпуска по долгосрочным контрактам.'].map(text => (
                        <li key={text} className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />{text}</li>
                    ))}
                </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Индивидуализация</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Детали по чертежам и образцам</h3>
                <p className="text-sm text-slate-700 leading-relaxed">Принимаем заказы на изготовление по предоставленным 3D-моделям, чертежам или физическим образцам деталей. Оптимально для импортозамещения и запуска новых изделий.</p>
            </div>
        </div>
    );
}
