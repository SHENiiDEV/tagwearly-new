import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { CurrencyProvider } from '@/Components/CurrencyContext';

const appName = import.meta.env.VITE_APP_NAME || 'Tagwearly AI';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <CurrencyProvider>
                <App {...props} />
            </CurrencyProvider>
        );
    },
    progress: {
        color: '#6366f1',
    },
});
