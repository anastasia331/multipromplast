
import { SERVICES } from '../data/DataServices';
import { SERVICE_IMAGES } from '../data/servicesImages';
import ServiceCard from './ServiceCard';

export default function OurServicesSection() {
    return (
        <section
            id="our-services"
            aria-labelledby="our-services-title"
            className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
        >
            <div className="mb-10 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                    Производственные возможности
                </span>

                <h2
                    id="our-services-title"
                    className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                >
                    Наши услуги
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Предлагаем технологические решения для изготовления
                    пластиковых изделий — от создания оснастки до серийного
                    производства.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {SERVICES.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        image={SERVICE_IMAGES[index] || null}
                    />
                ))}
            </div>
        </section>
    );
}
