// Вкладка дополнительных услуг
import { EXTRA_SERVICES } from '../data/DataServices';
import { EXTRA_IMAGES } from '../data/servicesImages';
import ExtraServiceCard from './ExtraServiceCard';
import LogisticsCard from './LogisticsCard';

export default function ExtraServicesTab() {
    return (
        <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl font-extrabold text-slate-900">Дополнительные производственные услуги</h2><p className="text-slate-600 mt-2">Полный комплекс постобработки, логистики и подготовки продукции к сдаче</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{EXTRA_SERVICES.map((service, index) => <ExtraServiceCard key={service.id ?? index} service={service} image={EXTRA_IMAGES[index % EXTRA_IMAGES.length]} />)}</div>
            <LogisticsCard />
        </div>
    );
}
