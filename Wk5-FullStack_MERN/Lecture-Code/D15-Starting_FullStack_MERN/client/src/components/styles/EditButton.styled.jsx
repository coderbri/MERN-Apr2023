import React from 'react';

const EditButton = ({ children }) => {
    return (
        <button className='font-bold py-2 px-4 rounded 
            text-zinc-600
            bg-gradient-to-br from-yellow-100 to-rose-200 
            hover:bg-gradient-to-br hover:from-yellow-300 hover:to-red-300'
            >
            {children}
        </button>
    );
}

export default EditButton;