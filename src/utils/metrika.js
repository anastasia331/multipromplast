
export function trackMetrikaGoal(goalName) {
    if (typeof window === 'undefined') return;

    const counterId = Number(
        import.meta.env.VITE_YANDEX_METRIKA_ID || 0
    );

    if (!counterId) return;

    if (!window.__multipromplastAnalyticsAllowed) return;

    if (typeof window.ym !== 'function') return;

    window.ym(counterId, 'reachGoal', goalName);
}
