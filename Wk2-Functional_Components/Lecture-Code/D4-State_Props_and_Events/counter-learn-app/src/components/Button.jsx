import React from 'react';

const Button = () => {
    // ? We can write functions here instead of inline in the HTML
    //  ? to make it cleaner to write, as well as reduce redundancy
    const alertBtn = () => alert("You clicked me!")
    
    return (
        <div className='mb-3'>
            <p>We can create <strong>Synthetic Events</strong> via JS/JSX to declutter the HTML:</p>
            
            <button onClick={ alertBtn }
            className="btn btn-dark">
                Click Me!
            </button>
        </div>
    );
}

export default Button;
