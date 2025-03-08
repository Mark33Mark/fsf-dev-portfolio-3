import React from 'react';

function QuoteResult(props) {
    return (
        
        <div className="">
        
            {props.quotes.map((quote, index) => (
                <div key={index}>
                    <p>"{quote.quote}"</p>
                    <p className="italic">{quote.author}</p>
                </div>
            ))}
        </div>
    );
}

export default QuoteResult;