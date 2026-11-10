// Девять этапов запуска производства
import { LAUNCH_STEPS } from '../data/DataServices';

export default function LaunchSteps() {
    return (
        <div className="p-8 md:p-12 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="max-w-3xl mb-10"><span className="text-xs font-bold uppercase tracking-wider text-orange-500">9 шагов к готовому продукту</span><h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Разработка и запуск производства новых изделий</h3></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {LAUNCH_STEPS.map(step => <div key={step.step} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs"><span className="text-2xl font-black text-purple-600">{step.step}</span><h4 className="text-base font-bold text-slate-900 mt-1">{step.title}</h4><p className="text-xs text-slate-600 mt-1">{step.desc}</p></div>)}
            </div>
        </div>
    );
}
