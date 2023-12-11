import React, { useEffect, useState } from 'react';

const RenderPokemon = () => {
    
    const [ pokemon, setPokemon ] = useState([]);
    const [ buttonClicked, setButtonClicked ] = useState(false);
    
    useEffect(() => {
        
        if ( buttonClicked ) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then( (response) => response.json() ) // Return the data from the Response Object in a JSON format
                .then( (response) => { // Store the JSON-converterd data in state so it can be displayed
                    setPokemon(response.results);
                })
                .catch( error => console.log(error) )
        }
        
    }, [ buttonClicked ]);
    
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
