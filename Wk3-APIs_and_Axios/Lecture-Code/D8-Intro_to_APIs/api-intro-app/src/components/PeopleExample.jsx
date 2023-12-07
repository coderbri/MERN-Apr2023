import axios from 'axios'
import React, { useEffect, useState } from 'react';

const PeopleExample = () => {
    
    const [ people, setPeople ] = useState([]);
    
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
                setPeople(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []) // ? Add an empty dependency array to ensure useEffect runs only once.
    
    return (
        <div>
            {
                people.length > 0 && people.map(( person, index ) => (
                    <div key={ index }>
                        { index+1 }. <strong>{ person.name }</strong>
                    </div>
                ))
            }
        </div>
    );
}

export default PeopleExample;
