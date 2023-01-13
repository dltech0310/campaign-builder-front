import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='mainContainerHeader'>
            <div className='leftLogo'>
                <img src='https://resource.itbusinesstoday.com/whitepapers/IT-BUSINESS-TODAY-COLOUR-1.png' alt='ITBTLogo' width={150} />
            </div>
            <div className='rightLogo'>
                <p>Sponsored by</p>
                <img src='https://resource.itbusinesstoday.com/whitepapers/Gartner-Logo.jpg' alt='clientLogo' width={200} />
            </div>
        </div>
    );
};

export default Header;