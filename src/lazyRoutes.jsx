import React from 'react';
import RouteLoadError from './components/RouteLoadError';

export const Home = React.lazy(() =>
    import('./pages/home/Home')
        .then((m) => ({ default: m.Home || m.default }))
        .catch(() => ({ default: RouteLoadError }))
);

export const ServicesHome = React.lazy(() =>
    import('./pages/catalog/ServicesHome')
        .then((m) => ({ default: m.ServicesHome || m.default }))
        .catch(() => ({ default: RouteLoadError }))
);

export const CalculateByDrawing = React.lazy(() =>
    import('./pages/CalculateByDrawing').catch(() => ({ default: RouteLoadError }))
);

export const PageContacts = React.lazy(() =>
    import('./pages/contacts/PageContacts').catch(() => ({ default: RouteLoadError }))
);

export const About = React.lazy(() =>
    import('./pages/About')
        .then((m) => ({ default: m.About || m.default }))
        .catch(() => ({ default: RouteLoadError }))
);

export const Privacy = React.lazy(() =>
    import('./pages/Privacy').catch(() => ({ default: RouteLoadError }))
);
