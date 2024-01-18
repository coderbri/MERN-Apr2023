import React from 'react';
import axios from 'axios'

const DeleteButton = ({ authorId, sucessCallback }) => {
    
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/author/delete/${authorId}`)
            .then(res => sucessCallback())
            .catch(err => console.log(err));
    }
    
    return (
        <button onClick={deleteAuthor} className='py-1 px-3 rounded-md
            text-zinc-700 font-semibold
            bg-gradient-to-br from-rose-400 to-red-400
            hover:bg-gradient-to-br hover:from-rose-500 hover:to-red-500
        '>
            Delete
        </button>
    );
}

export default DeleteButton;