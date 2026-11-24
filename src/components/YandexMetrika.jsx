
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from './CookieConsent';

const COUNTER_ID = Number(
    import.meta.env.VITE_YANDEX_METRIKA_ID || 0
);

const SCRIPT_ID = 'yandex-metrika-script';

export default function YandexMetrika() {
    const { consent } = useCookieConsent();
    const location = useLocation();
    const previousLocation = useRef('');

    useEffect(() => {
        if (!consent?.analytics || !COUNTER_ID) {
            window.__multipromplastAnalyticsAllowed = false;

            if (window.ym && COUNTER_ID) {
                window.ym(COUNTER_ID, 'destruct');
                window.__multipromplastMetrikaInitialized = false;
            }

            const script = document.getElementById(SCRIPT_ID);

            if (script) {
                script.remove();
            }

            previousLocation.current =
                location.pathname + location.search + location.hash;

            return;
        }

        const currentLocation =
            location.pathname + location.search + location.hash;

        if (!window.ym) {
            window.ym = function () {
                (window.ym.a = window.ym.a || []).push(arguments);
            };

            window.ym.l = Date.now();
        }

        if (!document.getElementById(SCRIPT_ID)) {
            const script = document.createElement('script');

            script.id = SCRIPT_ID;
            script.async = true;
            script.src = 'https://mc.yandex.ru/metrika/tag.js';

            document.head.appendChild(script);
        }

        if (!window.__multipromplastMetrikaInitialized) {
            window.__multipromplastAnalyticsAllowed = true;
            window.ym(COUNTER_ID, 'init', {
                defer: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: false,
                sendTitle: false,
            });

            window.__multipromplastMetrikaInitialized = true;

            window.ym(COUNTER_ID, 'hit', window.location.href);
        } else if (previousLocation.current !== currentLocation) {
            window.ym(COUNTER_ID, 'hit', window.location.href);
        }

        previousLocation.current = currentLocation;
    }, [
        consent?.analytics,
        location.pathname,
        location.search,
        location.hash,
    ]);

    return null;
}
