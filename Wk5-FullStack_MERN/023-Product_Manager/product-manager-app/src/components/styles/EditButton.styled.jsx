import React from 'react';

const EditButton = ({ children }) => {
    // ! Add Later... and remove opacity-75
    // hover:bg-gradient-to-br hover:from-orange-300/75 hover:to-amber-400/75
    return (
        <button className='
            text-zinc-700 font-semibold
            bg-gradient-to-br from-orange-100/75 to-amber-300/75
            py-1 px-4 rounded-full
        ' disabled>
            { children }
        </button>
    );
}

export default EditButton;
