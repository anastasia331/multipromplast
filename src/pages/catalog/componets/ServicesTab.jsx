// Вкладка производственных услуг
import { SERVICES } from '../data/DataServices';
import { SERVICE_IMAGES } from '../data/servicesImages';
import ServiceCard from './ServiceCard';
import LaunchSteps from './LaunchSteps';
import MaterialsSelector from './MaterialsSelector';

export default function ServicesTab() {
    return (
        <div className="space-y-16 animate-fadeIn">
            <div>
                <div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-3xl font-extrabold text-slate-900">Производственные услуги</h2><p className="text-slate-600 mt-2">Обеспечиваем полный цикл производства от проектирования оснастки до серийной отливки</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{SERVICES.map((service, index) => <ServiceCard key={service.id} service={service} image={SERVICE_IMAGES[index % SERVICE_IMAGES.length]} />)}</div>
            </div>
            <LaunchSteps />
            <MaterialsSelector />
        </div>
    );
}
