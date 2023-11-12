import React from 'react';

// * In React, components are defined as functions taht take in props (input) and return a description of the UI (output)

const Nav = ( props ) => {
    // console.log(props)
    let { name } = props // destructure the user's name from the props object
    
    return (
        <div className='py-2 px-5 bg-dark text-light mb-3'>
            
            <nav className="d-flex justify-content-between">
                <h1 className='fw-bold'>Hello, { name }.</h1>
                
                <div className="Links d-flex align-items-center gap-3 fw-semibold">
                    <span>Link</span>
                    <span>Link</span>
                    <span>Link</span>
                    <span>Link</span>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

// Use snippet to generate boilerplate component code: rfc