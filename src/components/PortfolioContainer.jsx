import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { About, Portfolio, Contact, Resume } from './pages';
import { ErrorFallback, Header, NavIndex, Footer } from '../components';

export const PortfolioContainer = () => {
    const [crashedStack, setCrashedStack] = useState('');
    const [quotesDb, setQuotesDb] = useState('');
    const [currentPage, setCurrentPage] = useState(() => {
        const hash = window.location.hash;
        if (hash) {
            const pageFromHash = hash.replace('#', '');
            const formattedPage = pageFromHash.charAt(0).toUpperCase() + pageFromHash.slice(1);

            if (['About', 'Portfolio', 'Contact', 'Resume'].includes(formattedPage)) {
                return formattedPage;
            }
        }
        return 'About';
    });

    const handlePageChange = page => {
        // good practice: update URL hash all to lower case, avoids issues with URL encoding and consistency.
        window.location.hash = page.toLowerCase();

        // fallback for browsers that don't support the view-transitions api.
        if (!document.startViewTransition) {
            setCurrentPage(page);
            return;
        }

        // using flushSync to force React to update the DOM immediately for the browser to take its snapshot.
        document.startViewTransition(() => {
            flushSync(() => {
                setCurrentPage(page);
            });
        });
    };

    useEffect(() => {
        const handleHashChange = () => {
            const currentHash = window.location.hash;

            if (currentHash === '#about') {
                setCurrentPage('About');
            } else if (currentHash === '#portfolio') {
                setCurrentPage('Portfolio');
            } else if (currentHash === '#contact') {
                setCurrentPage('Contact');
            } else if (currentHash === '#resume') {
                setCurrentPage('Resume');
            } else {
                setCurrentPage('About');
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        // Check hash immediately on first render
        handleHashChange();

        // Clean-up
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <ErrorBoundary
            FallbackComponent={props => <ErrorFallback {...props} componentStack={crashedStack} />}
            onError={(error, info) => {
                setCrashedStack(info.componentStack);
            }}
            onReset={() => setCrashedStack('')}
        >
            <main role='main' className='PortfolioContainer GlowingOutline'>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <NavIndex currentPage={currentPage} handlePageChange={handlePageChange} />

                <div className='PortfolioContainer-PageTransitionWrapper'>
                    <section
                        id='about'
                        className={`PortfolioContainer-About_${currentPage === 'About' ? 'block' : 'hidden'}`}
                    >
                        <About />
                    </section>

                    <section
                        id='portfolio'
                        className={`PortfolioContainer-Portfolio_${currentPage === 'Portfolio' ? 'block' : 'hidden'}`}
                    >
                        <Portfolio />
                    </section>

                    <section
                        id='contact'
                        className={`PortfolioContainer-Contact_${currentPage === 'Contact' ? 'block' : 'hidden'}`}
                    >
                        <Contact />
                    </section>

                    <section
                        id='resume'
                        className={`PortfolioContainer-Resume_${currentPage === 'Resume' ? 'block' : 'hidden'}`}
                    >
                        <Resume />
                    </section>
                </div>

                <Footer />
            </main>
        </ErrorBoundary>
    );
};
