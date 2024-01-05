import React from 'react';

const EditButton = ({ children }) => {
    return (
        <button className='
            text-zinc-700 font-semibold
            bg-gradient-to-br from-orange-100 to-amber-300
            hover:bg-gradient-to-br hover:from-orange-300 hover:to-amber-400
            py-1 px-4 rounded-full
        '>
            { children }
        </button>
    );
}

export default EditButton;
