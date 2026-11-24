
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

const CookieConsentContext = createContext(null);

const STORAGE_KEY = 'multipromplast_cookie_consent';
const CONSENT_VERSION = 1;

const defaultConsent = {
    necessary: true,
    analytics: false,
    external: false,
};

function readConsent() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) return null;

        const parsed = JSON.parse(saved);

        if (parsed.version !== CONSENT_VERSION) return null;

        return {
            necessary: true,
            analytics: Boolean(parsed.analytics),
            external: Boolean(parsed.external),
        };
    } catch {
        return null;
    }
}

export function CookieConsentProvider({ children }) {
    const [consent, setConsent] = useState(readConsent);
    const [settingsOpen, setSettingsOpen] = useState(false);

    function saveConsent(value) {
        const updated = {
            necessary: true,
            analytics: Boolean(value.analytics),
            external: Boolean(value.external),
        };

        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    ...updated,
                    version: CONSENT_VERSION,
                    updatedAt: new Date().toISOString(),
                })
            );
        } catch (error) {
            console.error(
                'Не удалось сохранить настройки cookie:',
                error
            );
        }

        setConsent(updated);
        setSettingsOpen(false);
    }

    function acceptAll() {
        saveConsent({
            analytics: true,
            external: true,
        });
    }

    function rejectOptional() {
        saveConsent(defaultConsent);
    }

    function openSettings() {
        setSettingsOpen(true);
    }

    function closeSettings() {
        setSettingsOpen(false);
    }

    return (
        <CookieConsentContext.Provider
            value={{
                consent,
                openSettings,
            }}
        >
            {children}

            {!consent && !settingsOpen && (
                <div
                    className="
                        fixed inset-x-0 bottom-0 z-[100]
                        border-t border-white/10
                        bg-[#1D2229] text-white
                        shadow-[0_-8px_30px_rgba(0,0,0,0.25)]
                    "
                >
                    <div className="
                        mx-auto flex max-w-7xl
                        flex-col gap-4 px-5 py-5
                        sm:px-8 lg:flex-row
                        lg:items-center lg:justify-between
                        lg:gap-8 lg:px-10
                    ">
                        <div className="max-w-2xl">
                            <h2 className="text-base font-semibold">
                                Мы используем cookie
                            </h2>

                            <p className="
                                mt-1 text-sm leading-relaxed
                                text-slate-300
                            ">
                                Необходимые cookie обеспечивают работу сайта.
                                С вашего разрешения мы также используем
                                аналитические и внешние сервисы.
                                Подробнее — в{' '}
                                <a
                                    href="/privacy"
                                    className="
                                        text-orange-400 underline
                                        underline-offset-2
                                        hover:text-orange-300
                                    "
                                >
                                    политике конфиденциальности
                                </a>.
                            </p>
                        </div>

                        <div className="
                            flex flex-col gap-2
                            sm:flex-row sm:flex-wrap
                            lg:shrink-0
                        ">
                            <button
                                type="button"
                                onClick={acceptAll}
                                className="
                                    rounded-lg bg-orange-500
                                    px-5 py-2.5 text-sm font-semibold
                                    text-white transition-colors
                                    hover:bg-orange-600
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-orange-300
                                "
                            >
                                Принять все
                            </button>

                            <button
                                type="button"
                                onClick={rejectOptional}
                                className="
                                    rounded-lg border border-white/20
                                    px-5 py-2.5 text-sm font-medium
                                    text-white transition-colors
                                    hover:bg-white/10
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-orange-300
                                "
                            >
                                Отклонить
                            </button>

                            <button
                                type="button"
                                onClick={openSettings}
                                className="
                                    rounded-lg border border-white/20
                                    px-5 py-2.5 text-sm font-medium
                                    text-white transition-colors
                                    hover:bg-white/10
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-orange-300
                                "
                            >
                                Настроить
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {settingsOpen && (
                <CookieSettings
                    currentConsent={consent}
                    onSave={saveConsent}
                    onClose={closeSettings}
                />
            )}
        </CookieConsentContext.Provider>
    );
}

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);

    if (!context) {
        throw new Error(
            'useCookieConsent должен использоваться внутри CookieConsentProvider'
        );
    }

    return context;
}

function CookieSettings({ currentConsent, onSave, onClose }) {
    const [analytics, setAnalytics] = useState(
        currentConsent?.analytics ?? false
    );

    const [external, setExternal] = useState(
        currentConsent?.external ?? false
    );

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="
                fixed inset-0 z-[110]
                flex items-center justify-center
                bg-black/65 p-4
            "
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-settings-title"
                className="
                    w-full max-w-lg rounded-2xl
                    border border-white/10
                    bg-[#1D2229] p-6 text-white
                    shadow-2xl
                "
            >
                <h2
                    id="cookie-settings-title"
                    className="text-xl font-bold"
                >
                    Настройки cookie
                </h2>

                <p className="
                    mt-2 text-sm leading-relaxed
                    text-slate-300
                ">
                    Вы можете выбрать, какие дополнительные
                    технологии разрешить на сайте.
                </p>

                <div className="mt-6 space-y-5">
                    <div className="
                        flex items-start justify-between gap-4
                        border-b border-white/10 pb-4
                    ">
                        <div>
                            <h3 className="font-semibold">
                                Необходимые
                            </h3>
                            <p className="
                                mt-1 text-sm text-slate-400
                            ">
                                Нужны для основных функций сайта.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked
                            disabled
                            aria-label="Необходимые cookie всегда включены"
                            className="mt-1 h-5 w-5 accent-orange-500"
                        />
                    </div>

                    <div className="
                        flex items-start justify-between gap-4
                        border-b border-white/10 pb-4
                    ">
                        <div>
                            <h3 className="font-semibold">
                                Аналитические
                            </h3>
                            <p className="
                                mt-1 text-sm text-slate-400
                            ">
                                Яндекс Метрика: посещения,
                                источники трафика и действия на сайте.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={analytics}
                            onChange={(event) =>
                                setAnalytics(event.target.checked)
                            }
                            aria-label="Разрешить аналитические cookie"
                            className="mt-1 h-5 w-5 shrink-0 accent-orange-500"
                        />
                    </div>

                    <div className="
                        flex items-start justify-between gap-4
                    ">
                        <div>
                            <h3 className="font-semibold">
                                Внешние сервисы
                            </h3>
                            <p className="
                                mt-1 text-sm text-slate-400
                            ">
                                Яндекс Карты и другие сторонние
                                сервисы, если они используются.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={external}
                            onChange={(event) =>
                                setExternal(event.target.checked)
                            }
                            aria-label="Разрешить внешние сервисы"
                            className="mt-1 h-5 w-5 shrink-0 accent-orange-500"
                        />
                    </div>
                </div>

                <div className="
                    mt-7 flex flex-col gap-2
                    sm:flex-row sm:justify-end
                ">
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-lg border border-white/20
                            px-4 py-2.5 text-sm
                            hover:bg-white/10
                        "
                    >
                        Закрыть
                    </button>

                    <button
                        type="button"
                        onClick={() => onSave({ analytics, external })}
                        className="
                            rounded-lg bg-orange-500
                            px-5 py-2.5 text-sm font-semibold
                            hover:bg-orange-600
                        "
                    >
                        Сохранить выбор
                    </button>
                </div>
            </section>
        </div>
    );
}
