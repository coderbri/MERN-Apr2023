import React, { useState } from 'react';
import Button from './styles/Button.styled';

const AuthorForm = ({ onSubmitProp, initialAuthorFName, initialAuthorLName, errors }) => {
    
    const [ authorData, setAuthorData ] = useState({
        authorFirstName: initialAuthorFName,
        authorLastName: initialAuthorLName
    });
    
    const changeHandler = (e) => {
        setAuthorData({ ...authorData, [e.target.name]: e.target.value });
    }
    
    const submitHandler = e => {
        e.preventDefault();
        const { authorFirstName, authorLastName } = authorData;
        onSubmitProp({ authorFirstName, authorLastName });
    }
    
    return (
        <form onSubmit={ submitHandler } className='max-w-md mx-auto pb-5'>
            
            <div className='mb-5'>
                <label className='block mb-2 text-sm font-semibold text-zinc-900 dark:text-white'>First Name</label>
                <div>
                    <input type="text" name='authorFirstName' onChange={ changeHandler } value={ authorData.authorFirstName }
                        className='text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                        placeholder='Lewis' required
                    />
                </div>
                { errors.authorFirstName
                    ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.authorFirstName.message }</p>
                    : null
                }
            </div>
            
            <div className='mb-5'>
                <label className='block mb-2 text-sm font-semibold text-zinc-900 dark:text-white'>Last Name</label>
                <div>
                    <input type="text" name='authorLastName' onChange={ changeHandler } value={ authorData.authorLastName }
                        className='text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                        placeholder='Carroll' required
                    />
                </div>
                { errors.authorLastName
                    ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.authorLastName.message }</p>
                    : null
                }
            </div>
            
            <div className='flex justify-end'>
                <Button>
                    <input type="submit" value="Add Author" />
                </Button>
            </div>
            
        </form>
    );
}

export default AuthorForm;
