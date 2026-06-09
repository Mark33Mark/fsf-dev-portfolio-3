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
