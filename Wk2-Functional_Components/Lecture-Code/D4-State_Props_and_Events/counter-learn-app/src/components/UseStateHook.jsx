import React, { useState } from 'react';

const UseStateHook = () => {
    // ?    Getter  Setter
    const [ count, setCount ] = useState(10);
    // ? onClick Synthetic Event function:
    const incrementCount = () => setCount(count+1);
    
    return (
        <div className='mb-3'>
            
            <h4>Using the useState hook:</h4>
            <p>The current count is: <strong>{ count }</strong></p>
            <button onClick={ incrementCount } className="btn btn-dark">Increment Count</button>
            
        </div>
    );
}

export default UseStateHook;
