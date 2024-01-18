import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='py-1 px-4 rounded-md
            text-zinc-700 font-semibold
            bg-gradient-to-br from-sky-100 to-indigo-300
            hover:bg-gradient-to-br hover:from-sky-300 hover:to-indigo-400
        '>
            { children }
        </button>
    );
}

export default Button;