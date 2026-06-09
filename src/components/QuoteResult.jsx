import { use, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { fetchQuote } from '../utilities';

export const QuoteResult = props => {
    const { initialPromise } = props;
    const SERVER_REQUEST_INTERVAL = 12000;
    const URL = '/quotes';

    const initialQuote = use(initialPromise);
    const [currentQuote, setCurrentQuote] = useState(initialQuote);

    useEffect(() => {
        const interval = setInterval(async () => {
            const newQuote = await fetchQuote(URL);

            if (!document.startViewTransition) {
                setCurrentQuote(newQuote);
                return;
            }

            document.startViewTransition(() => {
                flushSync(() => {
                    setCurrentQuote(newQuote);
                });
            });
        }, SERVER_REQUEST_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    if (!currentQuote) return null;

    return (
        <div className='QuoteResult-QuoteContainer'>
            <p className='QuoteResult-QuoteText'>
                "{currentQuote.quote}" <span className='QuoteResult-QuoteAuthor'> - {currentQuote.credited}</span>
            </p>
        </div>
    );
};
