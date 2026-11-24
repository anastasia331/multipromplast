
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';

export default function LocationBlock() {
    return (
        <section
            aria-labelledby="location-title"
            className="
                relative w-full
                bg-slate-950
                px-4 py-12
                sm:px-6 sm:py-16
                lg:px-8 lg:py-20
            "
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <span className="
                        text-xs font-semibold
                        uppercase tracking-[0.2em]
                        text-orange-400
                    ">
                        Как нас найти
                    </span>

                    <h2
                        id="location-title"
                        className="
                            mt-2 text-2xl sm:text-3xl
                            font-bold text-white
                        "
                    >
                        Мы всегда на связи
                    </h2>

                    <p className="
                        mt-2 max-w-xl
                        text-sm sm:text-base
                        leading-relaxed text-white/55
                    ">
                        Свяжитесь с нами или приезжайте
                        на наше предприятие в Липецке.
                    </p>
                </div>

                <div className="
                    flex flex-col gap-5
                    md:flex-row
                    md:items-stretch
                ">
                    <ContactInfo />
                    <ContactMap />
                </div>
            </div>
        </section>
    );
}
