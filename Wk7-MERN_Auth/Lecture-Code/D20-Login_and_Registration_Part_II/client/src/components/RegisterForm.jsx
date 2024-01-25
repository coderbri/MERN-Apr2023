import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = ({ isDarkMode, setIsLoggedIn }) => {
    
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [ errors, setErrors ] = useState({})
    
    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const submitHandler = e => {
        e.preventDefault();
        //                                       route   userObject   send cookie server <=> client
        axios.post('http://localhost:8000/api/register/user', user, { withCredentials: true})
            .then((res) => {
                console.log(res);
                setIsLoggedIn(true);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            });
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 shadow-md'}`}>
                <h2 className='text-center font-bold text-2xl mb-5'>Register</h2>
                
                <form onSubmit={submitHandler}>
                    
                    <div className="relative mb-5">
                        <input type="text" name='firstName' onChange={changeHandler} value={user.firstName} className={`block p-2.5 w-full text-sm
                            pt-5 rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer
                            ${ isDarkMode 
                                ? 'bg-zinc-700 border-zinc-600 focus:border-indigo-400'
                                : 'bg-zinc-200/75 border-zinc-300/50 focus:border-indigo-600'
                            }
                        `} placeholder=" " />
                        
                        <label className={`absolute text-sm duration-300
                            transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                            ${ isDarkMode 
                                ? 'bg-zinc-700/75 peer-focus:text-indigo-400'
                                : 'bg-zinc-200/75 peer-focus:text-indigo-600'
                            }
                        `}>First Name</label>
                    </div>
                    { errors.firstName
                        ? <p className="text-sm -mt-3 mb-4 font-bold text-red-600 dark:text-red-400">{ errors.firstName.message }</p>
                        : null
                    }
                    
                    <div className="relative mb-5">
                        <input type="text" name='lastName' onChange={changeHandler} value={user.lastName} className={`block p-2.5 w-full text-sm
                            pt-5 rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer
                            ${ isDarkMode 
                                ? 'bg-zinc-700 border-zinc-600 focus:border-indigo-400'
                                : 'bg-zinc-200/75 border-zinc-300/50 focus:border-indigo-600'
                            }
                        `} placeholder=" " />
                        
                        <label className={`absolute text-sm duration-300
                            transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                            ${ isDarkMode 
                                ? 'bg-zinc-700/75 peer-focus:text-indigo-400'
                                : 'bg-zinc-200/75 peer-focus:text-indigo-600'
                            }
                        `}>Last Name</label>
                    </div>
                    { errors.lastName
                        ? <p className="text-sm -mt-3 mb-4 font-bold text-red-600 dark:text-red-400">{ errors.lastName.message }</p>
                        : null
                    }
                    
                    <div className="relative mb-5">
                        <input type="text" name='email' onChange={changeHandler} value={user.email} className={`block p-2.5 w-full text-sm
                            pt-5 rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer
                            ${ isDarkMode 
                                ? 'bg-zinc-700 border-zinc-600 focus:border-indigo-400'
                                : 'bg-zinc-200/75 border-zinc-300/50 focus:border-indigo-600'
                            }
                        `} placeholder=" " />
                        
                        <label className={`absolute text-sm duration-300
                            transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                            ${ isDarkMode 
                                ? 'bg-zinc-700/75 peer-focus:text-indigo-400'
                                : 'bg-zinc-200/75 peer-focus:text-indigo-600'
                            }
                        `}>Email Address</label>
                    </div>
                    { errors.email
                        ? <p className="text-sm -mt-3 mb-4 font-bold text-red-600 dark:text-red-400">{ errors.email.message }</p>
                        : null
                    }
                    
                    <div className="relative mb-5">
                        <input type="password" name='password' onChange={changeHandler} value={user.password} className={`block p-2.5 w-full text-sm
                            pt-5 rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer
                            ${ isDarkMode 
                                ? 'bg-zinc-700 border-zinc-600 focus:border-indigo-400'
                                : 'bg-zinc-200/75 border-zinc-300/50 focus:border-indigo-600'
                            }
                        `} placeholder=" " />
                        
                        <label className={`absolute text-sm duration-300
                            transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                            ${ isDarkMode 
                                ? 'bg-zinc-700/75 peer-focus:text-indigo-400'
                                : 'bg-zinc-200/75 peer-focus:text-indigo-600'
                            }
                        `}>Password</label>
                    </div>
                    { errors.password
                        ? <p className="text-sm -mt-3 mb-4 font-bold text-red-600 dark:text-red-400">{ errors.password.message }</p>
                        : null
                    }
                    
                    <div className="relative mb-5">
                        <input type="password" name='confirmPassword' onChange={changeHandler} value={user.confirmPassword} className={`block p-2.5 w-full text-sm
                            pt-5 rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer
                            ${ isDarkMode 
                                ? 'bg-zinc-700 border-zinc-600 focus:border-indigo-400'
                                : 'bg-zinc-200/75 border-zinc-300/50 focus:border-indigo-600'
                            }
                        `} placeholder=" " />
                        
                        <label className={`absolute text-sm duration-300
                            transform -translate-y-2 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                            ${ isDarkMode 
                                ? 'bg-zinc-700/75 peer-focus:text-indigo-400'
                                : 'bg-zinc-200/75 peer-focus:text-indigo-600'
                            }
                        `}>Confirm Password</label>
                    </div>
                    { errors.confirmPassword
                        ? <p className="text-sm -mt-3 mb-4 font-bold text-red-600 dark:text-red-400">{ errors.confirmPassword.message }</p>
                        : null
                    }
                    
                    
                    <div className='mt-10'>
                        {/* <input type="submit" value="Register" className='block w-full py-2 rounded-lg cursor-pointer bg-indigo-400 hover:bg-indigo-200 text-lg font-semibold' /> */}
                        <button className='block w-full py-2 rounded-lg cursor-pointer bg-indigo-400 hover:bg-indigo-200 text-lg font-semibold'>Register</button>
                        
                        <div className="my-5 grid w-full grid-cols-3">
                            <div className={`mb-2 border-b-2 ${ isDarkMode ? 'border-zinc-600' : 'border-zinc-300' }`} />
                            <Link to={'/login'} className='text-sm text-center text-indigo-500 dark:text-indigo-400 font-semibold'>Account Login</Link>
                            <div className={`mb-2 border-b-2 ${ isDarkMode ? 'border-zinc-600' : 'border-zinc-300' }`} />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
