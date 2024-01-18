import React from 'react';
import DeleteButton from './styles/DeleteButton.styled';
import EditButton from './styles/EditButton.styled';

const DisplayAllAuthors = ({ authorsList }) => {
    
    return (
        <div className='max-w-lg mx-auto'>
            <h2 className='text-3xl font-bold text-center my-3'>Favorite Authors</h2>
            
            <p className='text-indigo-600 font-semibold'>We have quotes by:</p>
            
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg my-5'>
            <table className='w-full text-sm text-zinc-500 dark:text-zinc-400'>
                <thead className='text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400'>
                    <tr className='text-center'>
                        <th scope="col" className="p-3">Author Name</th>
                        <th scope="col" className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                { authorsList.map((author) => (
                    <tr key={ author._id } className='bg-white border-b dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-600'>
                        <td className='px-6 py-4 font-medium'>{ author.authorFirstName } { author.authorLastName }</td>
                        <td className='px-6 py-4'>
                            <div className='flex justify-center gap-4'>
                                <EditButton />
                                <DeleteButton />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
}

export default DisplayAllAuthors;
