import React from 'react';

const ButtonStyled = ({ children }) => {
    return (
        <button className='py-2 px-4 rounded-full text-zinc-700
            ease-out duration-200 font-semibold
            bg-gradient-to-br from-emerald-200 to-emerald-500
            hover:bg-gradient-to-br hover:from-emerald-400 hover:to-emerald-600
        '>
            { children }
        </button>
    );
}

export default ButtonStyled;
