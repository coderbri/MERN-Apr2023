import React from 'react'; // Use snippet "rfc" to generate boilerplate component code.

// * In React, components are defined as functions taht take in props (input) and return a description of the UI (output)

const Nav = ({ name }) => {
    // ? ({name}) is the short-hand version of destructuring
    //  ? the name from the props object
    //  ! Long-hand form: let { name } = props
    
    return (
        <div className='py-2 px-5 bg-dark text-light mb-4'>
            
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