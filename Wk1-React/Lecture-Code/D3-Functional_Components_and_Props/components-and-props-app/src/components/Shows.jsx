import React from 'react';

const Shows = ({ title, releaseYear }) => {
    // console.log(props) // ? prints object
    // console.log(props.title) // ? prints value in the key of the object
    
    return (
        <div className='p-4 border border-3 rounded mb-4'>
            <h3>Title: { title }</h3>
            <p>Release Year: { releaseYear }</p>
        </div>
    );
}

export default Shows;