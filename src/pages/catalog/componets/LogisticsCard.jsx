// Международная доставка
export default function LogisticsCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
            <div className="h-52 md:h-auto min-h-[220px]"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85" alt="Складская логистика и подготовка грузов к отправке" className="w-full h-full object-cover" loading="lazy" /></div>
            <div className="p-8 md:p-10 flex flex-col justify-center"><div className="space-y-2 text-center md:text-left"><span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Логистика</span><h3 className="text-xl font-bold text-slate-900">Международная доставка и отгрузка</h3><p className="text-sm text-slate-600 max-w-2xl">Ориентируемся на сотрудничество с компаниями из разных стран. Условия, способы и логистические расходы согласовываются индивидуально.</p></div></div>
        </div>
    );
}
