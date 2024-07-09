import React from 'react';
import logo from '../assets/NAaas-logo.png';

function Logo() {
    return (
        <div className='md:pl-20 h-20 flex items-center'>
            <img 
                src={logo} 
                alt="logo" 
                className="max-h-full max-w-full h-auto w-auto"
            />
        </div>
    );
}

export default Logo;