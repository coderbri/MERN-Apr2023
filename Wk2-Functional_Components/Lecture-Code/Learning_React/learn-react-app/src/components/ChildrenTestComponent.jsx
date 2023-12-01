import React from 'react';

const ChildrenTestComponent = ({ header, children }) => {
    return (
        <div>
            <p>The text below is passed as a children prop:</p>
            <h1 className='text-center'>{ header }</h1>
            { children }
        </div>
    );
}

export default ChildrenTestComponent;
