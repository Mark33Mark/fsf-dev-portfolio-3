import React from 'react';

// https://heroicons.com/
// https://justinramel.com/how-to-use-heroicons-in-your-react-app

export const CodeIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12 text-(--royal-blue)" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
        />
    </svg>
);

export const TerminalIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-18 text-(--royal-blue)" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
    </svg>
);

export const ChevronRightIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute chevron-right h-12 w-12" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 5l7 7-7 7M5 5l7 7-7 7" 
        />
    </svg>
);

export const ChevronLeftIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute chevron-left h-12 w-12" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7" 
        />
    </svg>
);

export const DocDownloadIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-10 w-10" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
    </svg>
);
