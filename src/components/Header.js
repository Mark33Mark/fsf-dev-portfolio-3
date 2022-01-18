import React, { useState, useEffect } from 'react';

import QuoteResult from './QuoteResult';
import quoteGenerator from '../QuotesData';


export default function Header({ currentPage, handlePageChange }) {
    
    // Declare a new state variable, "quotes"
    const [quotes, setQuotes] = useState([]);

    // Declare a new state variable for time interval
    const [counter, setCounter] = useState(0);

    // set state
    const searchForQuotes = () => {
        const response = quoteGenerator();
        setQuotes(response);
    };


    useEffect(() => { 
        searchForQuotes();
        const timer = setInterval(() => { setCounter(counter + 1); searchForQuotes(); }, 10000);
        return () => clearInterval(timer);
        },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return ( 

            <header className="px-4 pt-4 flex justify-between max-w-screen-xl" >

                    <div className="logo inline-flex h-20 sm:h-28">
                        <a 
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'page-link active' : 'page-link'}
                        >
                            <img
                                className=" rounded inline-flex h-20 sm:h-28"
                                alt="Logo Mark Watson"
                                src="../assets/Logo.svg"
                                onMouseOver= {(e) => e.currentTarget.src = "../assets/Logo_hover.svg"}
                                onMouseOut= {(e) => e.currentTarget.src = "../assets/Logo.svg"}
                            />
                        </a>
                    </div>

                    <div className="quote-animate-fading text-gray-600 flex justify-center items-center px-3 w-98 text-sm">

                        <QuoteResult quotes = {quotes} />
                        
                    </div>

                    <div className="portrait inline-flex h-20 sm:h-28">
                        <a 
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'page-link active' : 'page-link'}
                        >
                            <img
                                className="portrait object-cover object-center inline-flex h-20 sm:h-28"
                                alt="Mark Watson portrait"
                                src= "../assets/myPortrait.png"
                                onMouseOver= {(e) => e.currentTarget.src = "../assets/myPortrait_hover.png"}
                                onMouseOut= {(e) => e.currentTarget.src = "../assets/myPortrait.png"}
                            />
                        </a>
                    </div>

            </header>

    );
}