import React, { useState } from 'react';

const ConditionallyRenderedEx = () => {
    
    // ? Set the default submission to false
    const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);
    
    const [ username, setUsername ] = useState("");
    const [ usernameError, setUsernameError ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    // * Handle Validations with Ternary Operators
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if (e.target.value.length < 3) {
            setUsernameError("Username must be at least 3 characters!");
        } else {
            setUsernameError(""); // ? Empty String is equivalent to "falsy" value
        }
    }
    
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { username, email, password };
        setUsername("");
        setEmail("");
        setPassword("");
        setHasBeenSubmitted(true); // ? Update the submission to true
        console.log("Welcome", newUser);
        // Output:'Welcome' newUser: { username: 'JaneDoe', email: 'janeycakes@mail.com', password: '1234567890' }
    }
    
    return (
        <div className='container-fluid col-lg-8'>
            
            <form onSubmit={ createUser }>
                
                { hasBeenSubmitted ?
                    <h5 className='mx-auto text-center col-8 alert alert-success'>Thank you for submitting the form!</h5> :
                    <h5 className='mx-auto text-center col-8 alert alert-secondary'>Welcome. Please submit the form.</h5>
                }
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded border border-dark-subtle">
                    <label className="col-md-3 col-form-label fw-semibold">Username: </label>
                    <div className="col-md-9">
                        <input type="text" onChange={ handleUsername }
                            value={ username } className="form-control" />
                        { usernameError ?
                            <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{ usernameError }</p> :
                            ''
                        }
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
                { usernameError ?
                        <input type="submit" value="Create User" className='btn btn-dark' disabled /> :
                        <input type="submit" value="Create User" className='btn btn-dark' />
                }
                </div>
                
            </form>
            
        </div>
    );
}

export default ConditionallyRenderedEx;
