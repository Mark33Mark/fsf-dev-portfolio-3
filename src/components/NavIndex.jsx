import { useEffect } from 'react';

export const NavIndex = props => {
    const { currentPage, handlePageChange } = props;

    return (
        <nav className='NavIndex-Container'>
            <div className="NavIndex-Bar">
            <a
                href='#about'
                onClick={() => handlePageChange('About')}
                className={'NavIndex-Link' + (currentPage === 'About' ? '_active' : '')}
            >
                About
            </a>
            <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={'NavIndex-Link' + (currentPage === 'Portfolio' ? '_active' : '')}
            >
                Portfolio
            </a>
            <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={'NavIndex-Link' + (currentPage === 'Contact' ? '_active' : '')}
            >
                Contact
            </a>
            <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={'NavIndex-Link' + (currentPage === 'Resume' ? '_active' : '')}
            >
                Resumé
            </a>
            </div>
        </nav>
    );
};
