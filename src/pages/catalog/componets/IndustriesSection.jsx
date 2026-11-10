// Отрасли применения
import { INDUSTRIES } from '../data/DataServices';

function IndustryColumn({ items, startIndex, color }) {
    const lineColor = color === 'blue'
        ? 'bg-gradient-to-b from-blue-600 to-purple-500'
        : 'bg-gradient-to-b from-purple-500 to-orange-500';
    const hoverBorder = color === 'blue' ? 'hover:border-blue-300' : 'hover:border-orange-300';
    const hoverText = color === 'blue' ? 'group-hover:text-blue-600' : 'group-hover:text-orange-500';
    const dotHover = color === 'blue'
        ? 'group-hover:border-blue-600 group-hover:bg-blue-600'
        : 'group-hover:border-orange-500 group-hover:bg-orange-500';
    return (
        <div className="relative pl-6 sm:pl-10">
            <div className={`absolute top-2 bottom-2 left-2 sm:left-3.5 w-[2px] ${lineColor} rounded-full`} />
            <div className="space-y-4">
                {items.map((industry, i) => {
                    const number = startIndex + i + 1;
                    return <div key={`${number}-${industry}`} style={{ animationDelay: `${(number - 1) * 60}ms` }} className={`group relative flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 ${hoverBorder} hover:shadow-md hover:-translate-x-1 transition-all duration-300 animate-fadeInLeft`}>
                        <div className={`absolute -left-[1.65rem] sm:-left-[2.65rem] w-3 h-3 rounded-full bg-white border-2 border-slate-300 ${dotHover} group-hover:scale-125 transition-all duration-300 shadow-xs`} />
                        <span className={`font-mono text-xs font-semibold text-slate-400 ${hoverText} transition-colors`}>{String(number).padStart(2, '0')}</span>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{industry}</span>
                    </div>;
                })}
            </div>
        </div>
    );
}

export default function IndustriesSection() {
    return (
        <section className="mt-20 pt-16 border-t border-slate-200">
            <div className="max-w-3xl mb-12"><div className="flex items-center gap-3 mb-2"><span className="h-px w-8 bg-blue-600" /><span className="text-xs font-bold uppercase tracking-widest text-blue-600">Сферы применения</span></div><h2 className="text-2xl sm:text-4xl font-light text-slate-900 tracking-tight">Отрасли применения <span className="font-normal text-blue-600">нашей продукции</span></h2><p className="text-sm sm:text-base text-slate-500 mt-2 font-light">Выпускаем детали и комплектующие для крупнейших секторов промышленности</p></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <IndustryColumn items={INDUSTRIES.slice(0, 6)} startIndex={0} color="blue" />
                <IndustryColumn items={INDUSTRIES.slice(6, 12)} startIndex={6} color="orange" />
            </div>
        </section>
    );
}
