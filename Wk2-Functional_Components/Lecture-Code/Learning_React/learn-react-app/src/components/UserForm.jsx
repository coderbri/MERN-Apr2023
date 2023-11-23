import React, { useState } from 'react';

const UserForm = (props) => {
    
    // * Using State, Setting State
    /* Long-Hand Version:    */
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    // * Form Functionality with synthetic events: onChange and onSubmit.
    const createUser = (e) => {
        // ? Prevent the browser's default refresh to keep our state from being reset:
        e.preventDefault();
        
        // * ES6 shorthand syntax for building an object
        // ? Set the destructured properties to the values that each form's key will manage
        const newUser = { username, email, password };
    // Short-Hand Ver - useful to target keynames all at once
        setUsername("");
        setEmail("");
        setPassword("");
        console.log("Welcome", newUser);
            // Output:'Welcome' newUser: { username: 'JaneDoe', email: 'janeycakes@mail.com', password: '1234567890' }
        /* Equivalent to:
            const newUser = {
                username: username,
                email: email,
                password: password,
            };
        */
    }
    
    return (
        <div className='container-fluid col-lg-8'>
            
            <form onSubmit={ createUser }>
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded border border-dark-subtle">
                    <label className="col-md-3 col-form-label fw-semibold">Username: </label>
                    <div className="col-md-9">
                        <input type="text" onChange={ (e)=>setUsername(e.target.value) }
                        value={ username } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded border border-dark-subtle">
                    <label className="col-md-3 col-form-label fw-semibold">Email Address: </label>
                    <div className="col-md-9">
                        <input type="text" onChange={ (e)=>setEmail(e.target.value) }
                        value={ email } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded border border-dark-subtle">
                    <label className="col-md-3 col-form-label fw-semibold">Password: </label>
                    <div className="col-md-9">
                        <input type="password" onChange={ (e)=>setPassword(e.target.value) }
                        value={ password } className="form-control" />
                    </div>
                </div>
                <div className="row col-3 mx-auto">
                    <input type="submit" value="Create User" className='btn btn-dark' />
                </div>
            </form>
            
        </div>
    );
}

export default UserForm;
