import React from 'react';

const HeaderStyled = ({ isDarkMode, children, h1Child }) => {
    return (
        <header className={`shadow-md px-8 py-4 mb-4
            ${isDarkMode ? 'bg-zinc-800 text-header' : 'bg-zinc-50 text-header-dark'}
            text-center md:text-start sm:flex justify-between align-middle
        `}>
            <h1 className={`text-3xl font-bold font-serif ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`}>
                { h1Child }
            </h1>
            { children }
        </header>
    );
}

export default HeaderStyled;
