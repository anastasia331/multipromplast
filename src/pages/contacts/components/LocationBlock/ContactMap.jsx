
import { useCookieConsent } from '../../../../components/CookieConsent';

export default function ContactMap() {
    const { consent, openSettings } = useCookieConsent();

    const hasExternalConsent = consent?.external === true;

    return (
        <div className="
            relative min-h-[320px]
            w-full flex-1
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-slate-800
            shadow-2xl
            sm:min-h-[400px]
        ">

            {/* Адрес организации */}
            <div className="
                absolute left-0 right-0 top-0 z-10
                border-b border-white/10
                bg-[#1D2229]/95
                px-5 py-4
                backdrop-blur-sm
            ">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                    Наш адрес
                </p>

                <p className="mt-1 text-base font-semibold text-white">
                    г. Липецк, ул. Ферросплавная, 18
                </p>
            </div>

            {hasExternalConsent ? (
                /* Карта после получения согласия */
                <iframe
                    title="Карта расположения Мультипромпласт в Липецке"
                    src="https://yandex.ru/map-widget/v1/?text=Липецк%2C%20улица%20Ферросплавная%2C%2018&z=16"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="
                        absolute inset-0
                        h-full w-full
                        border-0
                        pt-[76px]
                        grayscale-[25%]
                        transition-all duration-500
                        hover:grayscale-0
                    "
                />
            ) : (
                /* Заглушка, если согласие не дано */
                <div className="
                    absolute inset-0
                    flex flex-col items-center justify-center
                    bg-gradient-to-br from-slate-800 to-[#1D2229]
                    px-6 pb-6 pt-24
                    text-center
                ">
                    <div className="
                        mb-4 flex h-14 w-14
                        items-center justify-center
                        rounded-full border border-orange-400/30
                        bg-orange-400/10
                    ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-orange-400"
                            aria-hidden="true"
                        >
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                        Яндекс Карта
                    </h3>

                    <p className="
                        mt-2 max-w-sm
                        text-sm leading-relaxed
                        text-slate-300
                    ">
                            Карта Яндекса пока не отображается, поскольку вы не разрешили загрузку внешних сервисов.
                            Чтобы увидеть расположение нашего офиса на карте, нажмите кнопку ниже и разрешите использование внешних сервисов.
                    </p>

                    <button
                        type="button"
                        onClick={openSettings}
                        className="
                            mt-6 rounded-lg
                            bg-orange-500 px-6 py-3
                            text-sm font-semibold text-white
                            transition-colors
                            hover:bg-orange-600
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-orange-300
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-slate-800
                        "
                    >
                            Разрешить и показать карту
                    </button>
                </div>
            )}
        </div>
    );
}
