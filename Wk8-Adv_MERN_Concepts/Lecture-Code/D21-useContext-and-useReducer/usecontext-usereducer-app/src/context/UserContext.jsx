import React, { createContext, useState } from 'react';

// * 1) Export createContext()
export const userContext = createContext();

export const UserProvider = ( props ) => {
    // * 2) Set up state as normal
    const [ userList, setUserList ] = useState([]);
    return (
        // * 3) Return UserProvider with State
        // ! .Consumer is only used for class components
        /* We have props.children because the Provider is
            going to be wrapped by the components */
        <userContext.Provider value={{
            userList,
            setUserList
        }}>
            { props.children }
        </userContext.Provider>
    );
}