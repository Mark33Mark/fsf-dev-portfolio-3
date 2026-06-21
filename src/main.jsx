import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PortfolioContainer } from './components';
import './styling/styles.css';

const root = createRoot(document.getElementById('root'));

    // useEffect(() => {
        const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth').get;

        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
            get: function () {
                // This will trigger ONLY when something tries to read offsetWidth
                // You can filter by a class or ID if it's too noisy
                console.trace('Forced Reflow Read Detected!');
                return originalOffsetWidth.call(this);
            },
        });
    // }, []);

root.render(
    <StrictMode>
        <PortfolioContainer />
    </StrictMode>
);

// register service worker, only when in production
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully in production:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
