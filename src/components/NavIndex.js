
import React from 'react';

function NavIndex({ currentPage, handlePageChange }) {

  return (
    <div className="navigator text-base sm:text-2xl flex place-content-center max-w-screen-xl pb-8">
        |
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'page-link active' : 'page-link'}
          style={{paddingLeft: "20px", paddingRight: "20px"}}
        >
          About  
        </a>
        |


        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'page-link active' : 'page-link'}
          style={{paddingLeft: "20px", paddingRight: "20px"}}
        >
          Portfolio  
        </a>

        |

        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'page-link active' : 'page-link'}
          style={{paddingLeft: "20px", paddingRight: "20px"}}
        >
          Contact    
        </a>
        |
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'page-link active' : 'page-link'}
          style={{paddingLeft: "20px", paddingRight: "20px"}}
        >
          Resume  
        </a>
        |

    </div>
  );
}

export default NavIndex;
