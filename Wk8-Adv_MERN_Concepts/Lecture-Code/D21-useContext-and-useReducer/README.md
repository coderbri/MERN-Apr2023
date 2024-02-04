# D21: `useContext` & `useReducer`

<div style="display: flex; justify-content: space-between;">
    <p>Week 8 Session 1</p>
    <p>２０２４年０２月０３日（土）</p>
</div>

## Table of Contents
- [**`useContext`**](#usecontext)
    - [File Structure](#file-structure)
    - [`UserContext.jsx`](#usercontextjsx)
    - [Usage of `.Consumer` with Class Components](#usage-of-consumer-with-class-components)
    - [Main Component: `App.jsx`](#main-component-appjsx)
    - [Application in Components: `UserForm.jsx` and `DisplayUsers.jsx`](#application-in-components-userformjsx-and-displayusersjsx)

- [**`useReducer`**](#usereducer)

# useContext
`useContext` is a React Hook that simplifies the process of sharing and accessing global state across components. It allows a component to subscribe to a specific context, gaining direct access to the values provided by a `Context.Provider` higher up in the component tree. By utilizing `useContext`, components can consume shared data without the need for prop drilling, streamlining the flow of information and enhancing the overall maintainability and scalability of React applications. This hook is particularly useful for scenarios where multiple components need access to common state or configuration, offering a concise and efficient solution for managing shared data in a React application.

### File Structure
```plaintext
src/
|___components/
|___context/
|       |___UserContext.jsx
|
|___App.jsx
```

### `UserContext.jsx`
```jsx
// Import necessary modules
import React, { createContext, useState } from 'react';

// 1. Create a context using createContext
export const userContext = createContext();

// 2. Create a UserProvider component to manage the state
export const UserProvider = (props) => {
    // Set up state for userList
    const [userList, setUserList] = useState([]);

    // 3. Provide the state to the components using the context
    return (
        <userContext.Provider value={{
            userList,
            setUserList
        }}>
            {props.children}
        </userContext.Provider>
    );
}
```

#### Explanation:
1. **Context Creation:** `createContext` is used to create a context named `userContext`. This context will hold the state that needs to be shared among different components.

2. **State Management:** The `UserProvider` component is created. This component manages the state related to user data (in this case, `userList`) and provides it to the components that are wrapped inside it.

3. **Providing Context Value:** The `userList` state and the `setUserList` function are provided as a value to the context using the `value` prop of `userContext.Provider`. This makes these values accessible to any component that consumes this context.



## Usage of `.Consumer` with Class Components
In scenarios where your React application is built using class components, you can consume context values using the `.Consumer` component. This is an alternative to the `useContext` hook, which is commonly used in functional components. The following example demonstrates how to utilize `.Consumer` within a class component, specifically accessing and updating the user list from the `UserContext`.

```jsx
import React from 'react';
import { UserContext } from './path-to-your-context/UserContext';

class ExampleComponent extends React.Component {
  render() {
    return (
      // Using Context.Consumer to access context values
      <UserContext.Consumer>
        {({ userList, setUserList }) => (
          <div>
            <p>User List: {userList.join(', ')}</p>
            <button onClick={() => setUserList([...userList, 'New User'])}>
              Add User
            </button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default ExampleComponent;
```

In this example, the `.Consumer` component allows class components to efficiently consume and interact with context values provided by a `Context.Provider`. While modern React applications often use functional components and hooks like `useContext`, understanding the `.Consumer` approach is valuable, especially when working with legacy codebases or class-based React components.


## Main Component: `App.jsx`
```jsx
import DisplayUsers from "./components/DisplayUsers"
import UserForm from "./components/UserForm"
import { UserProvider } from './context/UserContext'

function App() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className='my-4 font-bold text-2xl'>Context & useReducer</h1>
                {/* 4. Wrap components with the UserProvider */}
                <UserProvider>
                    <UserForm />
                    <DisplayUsers />
                </UserProvider>
            </div>
        </>
    )
}

export default App
```

#### Explanation:
**Provider Wrapping:** The `UserForm` and `DisplayUsers` components are wrapped with the `UserProvider`. This ensures that these components, and any descendants of them, have access to the state provided by the `UserProvider`.


### Application in Components: `UserForm.jsx` and `DisplayUsers.jsx`
Both of these components use the `useContext` hook to access the `userContext`. They can directly read from and write to the `userList` state, making it easy to share and update the user data across components.

This setup enables the components to interact with the shared state managed by `useContext`, facilitating a centralized approach to state management in your React application.

#### `UserForm.jsx`
```jsx
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
            {/* Form setup */}
        </div>
    );
}

export default UserForm;
```

#### `DisplayUsers.jsx`
```jsx
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
```

# useReducer