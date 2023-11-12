import React from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
        <div className='col-4 mx-auto text-start mb-2'>
            <h2 className='fw-bold'>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
        </div>
    );
}

export default PersonCard;
