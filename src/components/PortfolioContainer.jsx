import React, { useState } from 'react';

import {Header} from './Header';
import {NavIndex} from './NavIndex';
import { Footer } from './Footer';
import {About, Portfolio, Contact, Resume } from './pages';



export default function PortfolioContainer() {

  const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact  />;
    }
    return <Resume />;
  };

const [currentPage, setCurrentPage] = useState('About');
const handlePageChange = ( page ) => setCurrentPage( page );

  return (
    <div className="flex flex-col min-h-screen border-solid sm:border-6 md:border-16 border-4 border-(--royal-blue) rounded-3xl bg-(--bg)">
      <Header 
            currentPage       ={currentPage} 
            handlePageChange  ={handlePageChange} 
      />
          <NavIndex 
            currentPage       ={currentPage} 
            handlePageChange  ={handlePageChange} 
          />

          {renderPage()}

      <Footer />
    </div>

  );
}
