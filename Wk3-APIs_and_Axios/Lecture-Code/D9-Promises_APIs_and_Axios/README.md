# D9: Intro to APIs, Part II

Concepts: **Promises, APIs and Axios**

<div style="display: flex; justify-content: space-between;">
    <p>Week 3 Session 3</p>
    <p>２０２３年１２月１０日（日）</p>
</div>

## Introduction
This repository demonstrates the implementation of promises in a React App, specifically focusing on handling API requests. **Promises** are a powerful feature in JavaScript, providing a cleaner and more structured way to handle asynchronous operations, such as API calls.


## Table of Contents
- [Promises Overview](#promises-overview)
- [Using Promises for Asynchronous Operations](#using-promises-for-asynchronous-operations)
- [Example 1: Taking Out the Trash](#example-1-taking-out-the-trash)
- [Example 2: Genshin Impact Characters API](#example-2-genshin-impact-characters-api)
- [Example 3: Using Axios to Fetch Star Wars Characters](#example-3-using-axios-to-fetch-star-wars-characters)


## Promises Overview
In JavaScript, **promises are objects representing the eventual completion or failure of an asynchronous operation**. They provide a more readable and manageable way to handle asynchronous code, making it easier to work with tasks like fetching data from APIs in a React App.

## Using Promises for Asynchronous Operations
The provided code file, `promise.js`, showcases the use of promises for handling asynchronous operations. Two examples are included to illustrate different scenarios: taking out the trash and making an API request to fetch Genshin Impact characters.

## Example 1: Taking Out the Trash
In the first example, a promise is used to check if the trash has been taken out. If successful, a "Thanks for taking out the trash" message is logged; otherwise, a "You didn't take out the trash" message is logged.

```javascript
let trashGotTakeOut = false;

const takeOutTheTrash = new Promise((resolve, reject) => {
    if (trashGotTakeOut) {
        resolve('Thanks for taking out the trash.');
    } else {
        reject('You didn\'t take out the trash.');
    }
});

takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err));
```

## Example 2: Genshin Impact Characters API
The second example demonstrates the use of promises to make an API request to fetch Genshin Impact characters based on a user's request. If the request is valid (e.g., '原神'), the characters' data is resolved; otherwise, an error message is rejected.

```javascript
function getGenshinCharacters(request) {
    return new Promise((resolve, reject) => {
        if (request === '原神') {
            // Character data is resolved for a valid request
            resolve([...]);
        } else {
            // Error message is rejected for an invalid request
            reject({
                message: 'Sorry, we don\'t understand that request. Try again.',
                hint: 'Try "原神" as your request.'
            });
        }
    });
}

getGenshinCharacters('notyuanshen')
    .then(data => console.log(data))
    .catch(err => console.log(err)); // { message: "Sorry, we don't understand that request. Try again.", hint: 'Try "原神" as your request.' }
```


## Example 3: Using Axios to Fetch Star Wars Characters
The provided React component, `SwapiDoc.jsx`, demonstrates how to use promises and Axios to fetch Star Wars characters from the SWAPI (Star Wars API).

```jsx
// rest of code removed from brevity
    
    const [starWarsCharacters, setStarWarsCharacters] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                console.log("=== RESPONSE ===");
                console.log(response);
                setStarWarsCharacters(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    return (
        <div className='mt-4'>
        {
            starWarsCharacters.length > 0 && starWarsCharacters.map((character, index) => (
                <div key={index}>
                    <h4>{character.name}</h4>
                    <p>Birth Year: <b>{character.birth_year}</b></p>
                </div>
            ))
        }
        </div>
    );
// rest of code removed from brevity
```

### Explanation:
1. **Axios Import:**
   The `axios` library is imported, providing a convenient way to make HTTP requests.

2. **State and useEffect:**
   The component uses the `useState` hook to manage the state of `starWarsCharacters`, representing the fetched character data. The `useEffect` hook is employed to make the API request when the component mounts (`[]` as the dependency array ensures it runs only once).

3. **API Request:**
   Inside the `useEffect`, `axios.get` is used to make a GET request to the SWAPI endpoint (`'https://swapi.dev/api/people/'`). The returned promise is handled with `.then()` and `.catch()`.

4. **Handling Response:**
   In the `.then()` block, the response is logged, and the relevant character data is extracted from `response.data.results`. This data is then set as the state using `setStarWarsCharacters`.

5. **Error Handling:**
   The `.catch()` block logs any errors that may occur during the API request.

6. **Rendering Data:**
   Finally, in the component's return statement, the fetched data is mapped over to create JSX elements displaying each character's name and birth year.

This example showcases a clean and efficient way to integrate promises and Axios for API handling in a React App.
