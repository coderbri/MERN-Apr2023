import axios from 'axios'
import React, { useEffect, useState } from 'react';

const PeopleExample = () => {
    
    const [ starWarsCharacters, setStarWarsCharacters ] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
          // In these .then() and .catch() statements,
            //  we can write callback functions with an object being
            //  returned as a response to the successful api call.
            .then((response) => { // ? only one parameter!
                console.log("=== RESPONSE ===");
                console.log(response);
                // what we're looking for will be located here: resposeObject.data.results
                //  it will show the first 10 entries of people from this api
                setStarWarsCharacters(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []) // ? Add an empty dependency array to ensure useEffect runs only once.
    
    return (
        <div className='mt-4'>
        {
            starWarsCharacters.length > 0 && starWarsCharacters.map(( character, index ) => (
                <div key={ index }>
                    <h4>{ character.name }</h4>
                    <p>Brith Year: <b>{ character.birth_year }</b></p>
                </div>
            ))
        }
        </div>
    );
}

export default PeopleExample;
