import { useId } from 'react';
import { useCookieConsent } from '../../../../components/CookieConsent';

export default function ContactMap() {
    const { consent, openSettings } = useCookieConsent();
    const warningTextId = useId();

    const hasExternalConsent = consent?.external === true;

    return (
        <div
            className="
                flex min-h-[360px] w-full flex-1 flex-col
                overflow-hidden rounded-2xl
                border border-white/10 bg-slate-800 shadow-2xl
                sm:min-h-[420px]
            "
        >
            {/* Верхняя панель с адресом */}
            <div
                className="
                    z-10 shrink-0 border-b border-white/10
                    bg-[#1D2229] px-4 py-3.5
                    sm:px-5 sm:py-4
                "
            >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-400 sm:text-xs">
                    Наш адрес
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white sm:mt-1 sm:text-base">
                    г. Липецк, ул. Ферросплавная, 18
                </p>
            </div>

            {hasExternalConsent ? (
                /* Карта после получения согласия */
                <div className="relative min-h-0 flex-1 w-full">
                    <iframe
                        title="Карта расположения Мультипромпласт в Липецке"
                        src="https://yandex.ru/map-widget/v1/?text=Липецк%2C%20улица%20Ферросплавная%2C%2018&z=16"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="
                            h-full min-h-[290px] w-full border-0
                            grayscale-[25%] transition-all duration-500
                            motion-reduce:transition-none hover:grayscale-0
                            sm:min-h-[348px]
                        "
                    />
                </div>
            ) : (
                /* Заглушка, если согласие на внешние сервисы не дано */
                <div
                    className="
                        flex min-h-0 flex-1 flex-col items-center justify-center
                        overflow-y-auto bg-gradient-to-br from-slate-800 to-[#1D2229]
                        px-4 py-5 text-center sm:px-6 sm:py-6
                    "
                >
                    <div
                        aria-hidden="true"
                        className="
                            mb-3 flex h-11 w-11 shrink-0 items-center justify-center
                            rounded-full border border-orange-400/30 bg-orange-400/10
                            sm:mb-4 sm:h-14 sm:w-14
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-orange-400 sm:h-7 sm:w-7"
                        >
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                    </div>

                    <h3 className="text-base font-semibold text-white sm:text-lg">
                        Яндекс Карта
                    </h3>

                    <p
                        id={warningTextId}
                        className="
                            mt-1.5 max-w-md text-xs leading-relaxed text-slate-300
                            sm:mt-2 sm:text-sm
                        "
                    >
                        Загрузка карты приостановлена, так как не дано согласие на работу
                        внешних сервисов. Откройте настройки конфиденциальности, чтобы
                        разрешить Яндекс Карты и просмотреть схему проезда.
                    </p>

                    <button
                        type="button"
                        onClick={openSettings}
                        aria-describedby={warningTextId}
                        className="
                            mt-4 inline-flex min-h-11 shrink-0 items-center justify-center
                            rounded-lg bg-orange-500 px-5 py-2.5
                            text-xs font-semibold text-white transition-colors
                            motion-reduce:transition-none hover:bg-orange-600
                            focus-visible:outline-none focus-visible:ring-2
                            focus-visible:ring-orange-300 focus-visible:ring-offset-2
                            focus-visible:ring-offset-slate-800 sm:mt-5 sm:px-6 sm:py-3 sm:text-sm
                        "
                    >
                        Разрешить и показать карту
                    </button>
                </div>
            )}
        </div>
    );
}