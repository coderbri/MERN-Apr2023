import React from 'react';

const DeleteButton = ({ children, onClick }) => {
    // ! Add Later... and remove opacity-75
    // hover:bg-gradient-to-br hover:from-rose-500/75 hover:to-red-500/75
    return (
        <button onClick={onClick} className='
            text-zinc-700 font-semibold
            bg-gradient-to-br from-rose-400/75 to-red-400/75
            py-1 px-4 rounded-full
        '>
            { children }
        </button>
    );
}

export default DeleteButton;
