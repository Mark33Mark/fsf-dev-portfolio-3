import React, { useState } from 'react';

import Header from './Header';
import NavIndex from './NavIndex';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';



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
    <div className="flex flex-col min-h-screen border-solid border-16 border-regal-blue rounded-3xl bg-cream">
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
