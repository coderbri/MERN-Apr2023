import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='font-bold py-2 px-4 rounded 
            text-zinc-600
            bg-gradient-to-br from-violet-100 to-sky-200 
            hover:bg-gradient-to-br hover:from-indigo-300 hover:to-blue-300'
            >
            {children}
        </button>
    );
}

export default Button;