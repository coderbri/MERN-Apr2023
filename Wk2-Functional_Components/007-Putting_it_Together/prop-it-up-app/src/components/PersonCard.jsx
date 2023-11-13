import React from 'react';
import { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    
    const [ currentAge, setCurrentAge ] = useState(age)
    
    return (
        <div className='border border-3 rounded p-3 mb-3 text-center'>
            <h2 className='fw-bold'>{ lastName }, { firstName }</h2>
            <p><strong>Age:</strong> { currentAge }</p>
            <p><strong>Hair Color:</strong> { hairColor }</p>
            
            <button onClick={ (e) => setCurrentAge(currentAge+1) }
            className="btn btn-dark">
                Birthday
            </button>
        </div>
    );
}

export default PersonCard;
