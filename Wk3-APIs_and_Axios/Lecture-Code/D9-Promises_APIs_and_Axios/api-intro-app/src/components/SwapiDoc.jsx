import axios from 'axios'
import React, { useEffect, useState } from 'react';

const SwapiDoc = () => {
    
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
            
            <h2 className='text-center mb-3'>Using Star Wars API</h2>
            
            <div className='d-flex justify-content-center'>
                <a href="https://swapi.dev/" target='_blank'>
                    <button className="btn btn-dark btn-lg">
                        View <b>swapi</b> Documentation
                    </button>
                </a>
            </div>
            
        </div>
    );
}

export default SwapiDoc;
