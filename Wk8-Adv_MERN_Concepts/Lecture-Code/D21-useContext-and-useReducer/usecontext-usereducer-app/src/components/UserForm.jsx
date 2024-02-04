import React, { useContext, useState } from 'react';
import { userContext } from '../context/UserContext';

const UserForm = () => {
    
    const { userList, setUserList } = useContext(userContext);
    const [ username, setUsername ] = useState("");
    
    const submitHandler = e => {
        e.preventDefault();
        setUserList([ ...userList, username ]);
        setUsername("");
    }
    
    return (
        <div className='mx-w-md mx-auto'>
            
            <form onSubmit={submitHandler}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_username" value={ username }
                        onChange={(e) => setUsername( e.target.value )}
                        className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-300 appearance-none dark:text-white dark:border-zinc-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                        placeholder=" " required 
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-zinc-500 dark:text-zinc-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Username
                    </label>
                </div>
                
                <button type="submit" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3.5 py-2 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                    Create User
                </button>
                
            </form>
            
        </div>
    );
}

export default UserForm;
