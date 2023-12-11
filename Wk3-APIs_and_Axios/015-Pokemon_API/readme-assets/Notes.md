### `useEffect`

- The `useEffect` hook in React is used for side effects in components.
- It takes two arguments: a function with the effect logic, and a dependency array.
- The dependency array determines when the effect should run.
  - An empty array (`[]`) means it runs once after the first render.
  - Including variables in the array, like `[pokemon]`, means it runs when those variables change.
  - Omitting the array means it runs after every render.

In your code, an empty array (`[]`) suggests the effect runs once after the first render. Adjust the array based on when you want the effect to run.


### Comments from `RenderPokemon.jsx` Component

```jsx
import React, { useEffect, useState } from 'react';

const RenderPokemon = () => {
    
    // Use useState to expect an array of Pokémon Objects, to then
    //  choose an empty array as the initial value to be held in state.
    const [ pokemon, setPokemon ] = useState([]);
    const [ buttonClicked, setButtonClicked ] = useState(false);
    
    // Run useEffect immediately upon Component rendering
    useEffect(() => {
        
        if ( buttonClicked ) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then( (response) => response.json() ) // Return the data from the Response Object in a JSON format
                .then( (response) => {
                    // Store the JSON-converterd data in state so it can be displayed
                    // console.log(response.results);
                    setPokemon(response.results);
                })
                .catch( error => console.log(error) )
        }
        
        // No cleanup statement is required since we are 
        //  not using resources that will continue to run
    }, [ buttonClicked ]);
    // ? Adding a dependency as the second parameter will ensure
    // ?    that useEffect does NOT run more than once
    
    const handleButtonClick = () => {
        setButtonClicked(true);
    }
    
    return (
        <div className='my-4'>
            
            <div className="d-flex justify-content-center">
                <button onClick={ handleButtonClick } className="btn btn-secondary">
                    Fetch Pokémon
                </button>
            </div>
            
            {buttonClicked && (
                <ul>
                { pokemon.map(( pokemonObject, index ) => {
                    return ( <li key={ index }>{ pokemonObject.name }</li> )
                }) }
                </ul>
            )}
            
        </div>
    );
}

export default RenderPokemon;
```