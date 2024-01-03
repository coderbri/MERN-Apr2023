import React from 'react';

const HeaderStyled = ({ children }) => {
    return (
        <header className='
            text-center md:text-start
            bg-zinc-800 text-header p-4 mb-4
            sm:flex justify-between align-middle
        '>
            { children }
        </header>
    );
}

export default HeaderStyled;
