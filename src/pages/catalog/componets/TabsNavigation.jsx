// Переключение вкладок
import { Layers, Wrench, Package } from 'lucide-react';

export default function TabsNavigation({ activeTab, setActiveTab, productCount, serviceCount, extraCount }) {
    const tabs = [
        { id: 'products', title: 'Наши товары', count: productCount, Icon: Layers, active: 'bg-blue-600 text-white shadow-sm' },
        { id: 'services', title: 'Наши услуги', count: serviceCount, Icon: Wrench, active: 'bg-purple-600 text-white shadow-sm' },
        { id: 'extra', title: 'Доп. Услуги', count: extraCount, Icon: Package, active: 'bg-orange-500 text-white shadow-sm' },
    ];
    return (
        <section id="products-section" className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center py-4">
                    <div className="flex items-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-xl">
                        {tabs.map(({ id, title, count, Icon, active }) => (
                            <button key={id} onClick={() => setActiveTab(id)} className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${activeTab === id ? active : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}>
                                <Icon className="w-4 h-4" /> {title} ({count})
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
