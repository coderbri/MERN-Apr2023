import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='
            text-zinc-700 hover:text-zinc-500 font-semibold
            bg-gradient-to-br from-sky-100 to-indigo-300
            hover:bg-gradient-to-br hover:from-sky-100 hover:to-indigo-100
            py-1 px-4 rounded-md
        '>
            { children }
        </button>
    );
}

export default Button;