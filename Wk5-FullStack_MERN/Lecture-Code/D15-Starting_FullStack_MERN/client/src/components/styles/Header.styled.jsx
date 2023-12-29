import React from 'react';

const HeaderStyled = ({ children }) => {
    return (
        <header className='
            bg-zinc-900 text-white py-4 mb-2
        '>
            {children}
        </header>
    );
}

export default HeaderStyled;
