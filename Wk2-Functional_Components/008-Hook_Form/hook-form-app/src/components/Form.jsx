import React, { useState } from 'react';

const Form = () => {
    
    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const changeHandler = (e) => {
        console.log(`>> Name: ${e.target.name}\n>> Value: ${e.target.value}`);
        setUser({ ...user, [e.target.name]:e.target.value });
        console.log(`>> UPDATED: ${ user }`);
    }
    
    return (
        <div className="mx-auto col-lg-10">
            
            <form>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">First Name:</label>
                    <div className="col-md-9">
                        <input type="text" name="firstName"
                            onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Last Name:</label>
                    <div className="col-md-9">
                        <input type="text" name="lastName"
                            onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Email:</label>
                    <div className="col-md-9">
                        <input type="text" name="email"
                            onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Password:</label>
                    <div className="col-md-9">
                        <input type="password" name="password"
                            onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Confirm Password:</label>
                    <div className="col-md-9">
                        <input type="password" name="confirmPassword"
                            onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
            </form>
            
            <div className="bg-secondary-subtle bordered rounded p-3">
                <h2 className="text-center fs-5">Your Form Data</h2>
                <div className="mx-auto row col-6">
                    <p className="col-md-6 fw-semibold">First Name:</p>
                    <p className="col-md-6">{ user.firstName }</p>
                </div>
                <div className="mx-auto row col-6">
                    <p className="col-md-6 fw-semibold">Last Name:</p>
                    <p className="col-md-6">{ user.lastName }</p>
                </div>
                <div className="mx-auto row col-6">
                    <p className="col-md-6 fw-semibold">Email:</p>
                    <p className="col-md-6">{ user.email }</p>
                </div>
                <div className="mx-auto row col-6">
                    <p className="col-md-6 fw-semibold">Password:</p>
                    <p className="col-md-6">{ user.password }</p>
                </div>
                <div className="mx-auto row col-6">
                    <p className="col-md-6 fw-semibold">Confirm Password:</p>
                    <p className="col-md-6">{ user.confirmPassword }</p>
                </div>
            </div>
        </div>
    );
}

export default Form;
