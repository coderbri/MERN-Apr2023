import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    
    const [ count, setCount ] = useState(0)
    
    useEffect(() => {
        console.log("useEffect is running...");
        // States cannot be set here since this is an infinite loop
    }, [ count ]);
    
    return (
        <div className='mt-3'>
            <h1>useEffect</h1>
            <h3>{ count }</h3>
            <button onClick={() => setCount(count+1)}
                className="btn btn-primary"
            >
                Click Me
            </button>
        </div>
    );
}

export default UseEffect;
