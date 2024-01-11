import React from 'react';

const HeaderStyled = ({ children }) => {
    return (
        <header className='text-center md:text-start
            flex justify-between align-middle
            bg-slate-50 dark:bg-zinc-900 p-4 mb-4
        '>
            { children }
        </header>
    );
}

export default HeaderStyled;