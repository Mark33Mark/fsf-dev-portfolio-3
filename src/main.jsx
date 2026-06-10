import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PortfolioContainer } from './components';
import './styling/styles.css';

const root = createRoot(document.getElementById('root'));

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
