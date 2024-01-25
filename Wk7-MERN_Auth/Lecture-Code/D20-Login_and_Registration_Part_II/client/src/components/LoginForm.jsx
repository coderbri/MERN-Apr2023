import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginForm = ({ isDarkMode, setIsLoggedIn }) => {
    
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        email: "",
        password: "",
    });
    const [ errors, setErrors ] = useState({});
    
    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login/user', user, { withCredentials: true})
            .then((res) => {
                console.log(res);
                setIsLoggedIn(true);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data);
            });
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 shadow-md'}`}>
                <h2 className='text-center font-bold text-2xl mb-5'>Account Log In</h2>
                
                <form onSubmit={submitHandler} className="max-w-md mx-auto">
                    
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
                    {errors.message &&
                        <p className="text-sm font-bold text-red-600 dark:text-red-400">{errors.message}</p>
                    }
                    
                    
                    <div className='mt-10'>
                        <button className='block w-full py-2 rounded-lg cursor-pointer bg-indigo-400 hover:bg-indigo-200 text-lg font-semibold'>Login</button>
                        
                        <div className="my-5 grid w-full grid-cols-3">
                            <div className={`mb-2 border-b-2 ${ isDarkMode ? 'border-zinc-600' : 'border-zinc-300' }`} />
                            <Link to={'/'} className='text-sm text-center text-indigo-500 dark:text-indigo-400 font-semibold'>Register Now</Link>
                            <div className={`mb-2 border-b-2 ${ isDarkMode ? 'border-zinc-600' : 'border-zinc-300' }`} />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
