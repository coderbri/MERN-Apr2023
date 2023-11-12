import React from 'react';

const Shows = (props) => {
    // console.log(props) // ? prints object
    // console.log(props.title) // ? prints value in the key of the object
    return (
        <div className='mb-4'>
            <h3>Title: { props.title }</h3>
            <h5>Release Year: { props.releaseYear }</h5>
        </div>
    );
}

export default Shows;
