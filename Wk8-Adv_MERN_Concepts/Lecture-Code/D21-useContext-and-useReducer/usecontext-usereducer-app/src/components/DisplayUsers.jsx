import React, { useState, useContext } from 'react';
import { userContext } from '../context/UserContext';

const DisplayUsers = (props) => {
    const {userList, setUserList} = useContext(userContext);
    
    return (
        <div className='max-w-md mx-auto text-center'>
            <h2 className='my-4 font-bold text-xl'>Users List</h2>
            { userList.map((user, id) => (
                    <p key={id} className='font-serif font-semibold italic'>
                        {user}
                    </p>
            ))}
        </div>
)}

export default DisplayUsers;