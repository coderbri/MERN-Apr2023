import React, { useState } from 'react';

const Form = () => {
    
    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const [ errors, setErrors ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    // ! No longer needed as each field is handled separately for
        // ! conditional rendering and front-end validations
    // const changeHandler = (e) => {
    //     console.log(`>> Name: ${e.target.name}\n>> Value: ${e.target.value}`);
    //     setUser({ ...user, [e.target.name]:e.target.value });
    //     console.log(`>> UPDATED: ${ user }`);
    // }
    
    const handleFirstName = (e) => {
        setUser({ ...user, firstName: e.target.value });
        if (e.target.value.length < 1) {
            setErrors({ ...errors, firstName: "First Name is required!" });
        } else if (e.target.value.length < 2) {
            setErrors({ ...errors, firstName: "First Name must be at least 2 characters!" });
        } else {
            setErrors({ ...errors, firstName: "" });
        }
    }
    const handleLastName = (e) => {
        setUser({ ...user, lastName: e.target.value });
        if (e.target.value.length < 1) {
            setErrors({ ...errors, lastName: "Last Name is required!" });
        } else if (e.target.value.length < 2) {
            setErrors({ ...errors, lastName: "Last Name must be at least 2 characters!" });
        } else {
            setErrors({ ...errors, lastName: "" });
        }
    }
    const handleEmail = (e) => {
        setUser({ ...user, email: e.target.value });
        if (e.target.value.length < 1) {
            setErrors({ ...errors, email: "Email is required!" });
        } else if (e.target.value.length < 5) {
            setErrors({ ...errors, email: "Email must be at least 5 characters!" });
        } else {
            setErrors({ ...errors, email: "" });
        }
    }
    
    const handlePassword = (e) => {
        const passwordValue = e.target.value;
        const confirmPasswordValue = user.confirmPassword;
        setUser({ ...user, password: passwordValue });
        
        if (passwordValue.length < 1) {
            setErrors({ ...errors, password: "Password is required!" });
        } else if (passwordValue.length < 8) {
            setErrors({ ...errors, password: "Password must be at least 8 characters!" });
        } else {
            setErrors({ ...errors, password: "" });
            // Check if confirmPassword field is not empty
            if (confirmPasswordValue) {
                // Validate if passwords match
                if (passwordValue !== confirmPasswordValue) {
                    setErrors({
                        ...errors,
                        password: "Passwords do not match!",
                        confirmPassword: "Passwords do not match!",
                    });
                } else {
                    setErrors({ ...errors, password: "", confirmPassword: "" });
                }
            }
        }
    }
    
    const handleConfirmPassword = (e) => {
        const confirmPasswordValue = e.target.value;
        setUser({ ...user, confirmPassword: confirmPasswordValue });
        
        if (confirmPasswordValue.length < 1) {
            setErrors({ ...errors, confirmPassword: 'Confirm Password is required!' });
        } else if (user.password !== confirmPasswordValue) {
            setErrors({ ...errors, confirmPassword: 'Passwords do not match!' });
        } else {
            setErrors({ ...errors, confirmPassword: '' });
        }
    }
    
    
    return (
        <div className="mx-auto col-lg-10">
            
            <form>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">First Name:</label>
                    <div className="col-md-9">
                        <input type="text" name="firstName" onChange={ handleFirstName } className="form-control" />
                        { errors.firstName ?
                            <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{ errors.firstName }</p> : ""
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Last Name:</label>
                    <div className="col-md-9">
                        <input type="text" name="lastName" onChange={ handleLastName } className="form-control" />
                        { errors.lastName ?
                            <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{ errors.lastName }</p> : ""
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Email:</label>
                    <div className="col-md-9">
                        <input type="text" name="email" onChange={ handleEmail } className="form-control" />
                        { errors.email ?
                            <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{ errors.email }</p> : ""
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Password:</label>
                    <div className="col-md-9">
                        <input type="password" name="password" onChange={ handlePassword } className="form-control" />
                        {errors.password ? (
                            <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{errors.password}</p>
                            ) : ( "" )
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Confirm Password:</label>
                    <div className="col-md-9">
                        <input type="password" name="confirmPassword" onChange={ handleConfirmPassword } className="form-control" />
                        { errors.confirmPassword ? (
                        <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{errors.confirmPassword}</p>
                        ) : ( "" )
                        }
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
