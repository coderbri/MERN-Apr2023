# D8: Intro to APIs

Concepts: **Intro to APIs with `useEffect` and Axios**

<div style="display: flex; justify-content: space-between;">
    <p>Week 3 Session 2</p>
    <p>２０２３年１２月０６日（水）</p>
</div>


This guide explores making API calls in a React application using the `useEffect` hook and the Axios library. The code snippets from the `App.jsx` and `PeopleExample.jsx` files will illustrate these concepts.

### Table of Contents
1. [Getting Started](#getting-started)
2. [App.jsx](#appjsx)
3. [PeopleExample.jsx](#peopleexamplejsx)



## Getting Started

Ensure React is installed in your project and install Axios by running:

```bash
npm install axios
```

## App.jsx

```jsx
import PeopleExample from "./components/PeopleExample"

function App() {
  return (
    <>
      <header className="bg-dark text-light py-2 mb-2">
        <h1 className='fw-bold text-center'>D8: Intro to APIs</h1>
      </header>
      
      <div className="container">
        <PeopleExample />
      </div>
    </>
  )
}

export default App
```

### Explanation

The `App` component serves as the main entry point for the application. It includes the `PeopleExample` component, where API calls are made.

## PeopleExample.jsx

```jsx
import axios from 'axios'
import React, { useEffect, useState } from 'react';

const PeopleExample = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log("=== RESPONSE ===");
        console.log(response);
        setPeople(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []); // Add an empty dependency array to ensure useEffect runs only once.

  return (
    <div>
      {people.length > 0 && people.map((person, index) => (
        <div key={index}>
          {index + 1}. <strong>{person.name}</strong>
        </div>
      ))}
    </div>
  );
}

export default PeopleExample;
```

### Explanation

1. **State Setup:** The `useState` hook is used to create the `people` state, which will hold the API response.

2. **API Call with `useEffect`:** The `useEffect` hook is utilized to perform side effects in functional components. In this case, it triggers the Axios GET request when the component mounts (`[]` as dependency ensures it runs only once).

3. **Handling API Response:** The API response is logged, and the relevant data (`response.data.results`) is set to the `people` state using `setPeople`.

4. **Displaying Data:** The `people` state is mapped over to display the names of individuals retrieved from the API.

By following these patterns, developers can easily integrate API calls into React applications using Axios and manage state updates efficiently with the `useEffect` hook.