import React from 'react';

const HeaderStyled = ({ children }) => {
    return (
        <header className='bg-zinc-900 text-white px-10 py-4 mb-2
            lg:flex justify-between'
        >
            {children}
        </header>
    );
}

export default HeaderStyled;
