import React from 'react';

const DeleteButton = ({ children, onClick }) => {
    return (
        <button className='font-bold py-2 px-4 rounded 
            bg-rose-300 text-zinc-600 
            hover:bg-rose-400 hover:text-zinc-700'
            onClick={ onClick }
            >
            { children }
        </button>
    );
}

export default DeleteButton;
