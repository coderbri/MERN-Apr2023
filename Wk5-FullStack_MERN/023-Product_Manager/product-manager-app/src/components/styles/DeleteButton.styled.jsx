import React from 'react';

const DeleteButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='
            text-zinc-700 font-semibold
            bg-gradient-to-br from-rose-400 to-red-400
            hover:bg-gradient-to-br hover:from-rose-500 hover:to-red-500
            py-1 px-4 rounded-full
        '>
            { children }
        </button>
    );
}

export default DeleteButton;
