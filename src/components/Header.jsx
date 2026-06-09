import { useState, Suspense } from 'react';
import { fetchQuote, encodedData, decodeData } from '../utilities';
import { QuoteResult } from './QuoteResult';
import { Loader_Butterflies } from './Loader_Butterflies';
import { LogoWatsonised } from './LogoWatsonised';

const FadeInComponent = ({ children }) => <div className='QuoteResult-FadeInWrapper'>{children}</div>;

export const Header = props => {
    const { currentPage, handlePageChange } = props;
    const URL = '/quotes';
    const [initialPromise] = useState(() => fetchQuote(URL));

    return (
        <>
            <header className='PageHeader'>
                <div className='PageHeader-Logo'>
                    <a
                        className={'page-link'}
                        alt='Watsonised company logo with a link to this websites portfolio page'
                        aria-label='Watsonised company logo with a link to this websites portfolio page'
                        href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                    >
                        <LogoWatsonised className='PageHeader-Logo_image' alt='Logo Mark Watson' />
                    </a>
                </div>

                <div className='PageHeader-Portrait'>
                    <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'page-link active' : 'page-link'}
                    >
                        <img
                            className='PageHeader-Portrait_image'
                            alt='portrait picture of Mark Watson'
                            src='/assets/myPortrait.webp'
                            onMouseOver={event => (event.currentTarget.src = '/assets/myPortrait_hover.webp')}
                            onMouseOut={event => (event.currentTarget.src = '/assets/myPortrait.webp')}
                        />
                    </a>
                </div>
            </header>
            <Suspense fallback={<Loader_Butterflies />}>
                <FadeInComponent>
                    <QuoteResult initialPromise={initialPromise} />
                </FadeInComponent>
            </Suspense>
        </>
    );
};
