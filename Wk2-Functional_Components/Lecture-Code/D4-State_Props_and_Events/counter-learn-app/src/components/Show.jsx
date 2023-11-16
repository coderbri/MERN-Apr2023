import React, { useState } from 'react';

const Shows = ({ showTitle, releaseYear, likes }) => {
    const [ likeCount, setLikeCount ] = useState(likes);
    
    return (
        <div className='mb-3'>
            <h3>Title: { showTitle }</h3>
            <p>Release Year: { releaseYear }</p>
            <p>Likes: <strong>{ likeCount }</strong></p>
            
            <button onClick={ ()=>setLikeCount(likeCount+1) }
            className="btn btn-primary mt-2">
                <strong>Like Show</strong>
            </button>
        </div>
    );
}

export default Shows;