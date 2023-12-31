import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='
            text-zinc-700 font-semibold
            bg-gradient-to-br from-sky-100 to-indigo-300
            hover:bg-gradient-to-br hover:from-sky-300 hover:to-indigo-400
            py-1 px-4 rounded-full
        '>
            { children }
        </button>
    );
}

export default Button;
