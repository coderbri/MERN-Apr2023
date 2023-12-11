import React, { useEffect, useState } from 'react';
import axios from 'axios'

const RenderPokemon = () => {
    // State to hold the array of Pokémon objects and track button click
    const [ pokemonData, setPokemonData ] = useState([]);
    const [ buttonClicked, setButtonClicked ] = useState(false);
    
    // useEffect to fetch Pokémon data when the button is clicked
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                const pokemonArray = response.data.results;
                setPokemonData(pokemonArray);
            })
            .catch(error => console.log(error));
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
                { pokemonData.map(( pokemon, index ) => {
                    return ( <li key={ index }>{ pokemon.name }</li> )
                }) }
                </ul>
            )}
        </div>
    );
}

export default RenderPokemon;