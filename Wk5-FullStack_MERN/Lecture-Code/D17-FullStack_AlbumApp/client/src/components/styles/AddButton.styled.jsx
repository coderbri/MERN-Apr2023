import React from 'react';

const AddButtonStyled = () => {
    return (
        <button className='p-3 rounded-3xl text-zinc-700
            bg-gradient-to-br from-emerald-200 to-emerald-500
            hover:bg-gradient-to-br hover:from-emerald-400 hover:to-emerald-600
        '>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
        </button>
    );
}

export default AddButtonStyled;
