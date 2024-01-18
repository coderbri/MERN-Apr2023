import React from 'react';

const DeleteButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className='py-1 px-3 rounded-md
            text-zinc-700 font-semibold
            bg-gradient-to-br from-rose-400 to-red-400
            hover:bg-gradient-to-br hover:from-rose-500 hover:to-red-500
        '>
            Delete
        </button>
    );
}

export default DeleteButton;