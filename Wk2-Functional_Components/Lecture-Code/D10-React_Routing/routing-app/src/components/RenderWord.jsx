import React from 'react';
import { useParams } from 'react-router-dom';

const RenderWord = () => {
    
    // useParams :
    const { usersword, color } = useParams(); // must match the key word in the route path
    
    return (
        <div>
            <h2>Render Word</h2>
            <p>This is useful to pass data but not necessarily display to the user (i.e., user id).</p>
            <p>
                You typed in this word: <span style={{ color: color }}><b>{ usersword }</b></span>.
            </p>
        </div>
    );
}

export default RenderWord;
