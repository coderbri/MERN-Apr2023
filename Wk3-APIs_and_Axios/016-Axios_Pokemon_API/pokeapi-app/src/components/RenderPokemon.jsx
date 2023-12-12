import React, { useEffect, useState } from 'react';
import axios from 'axios'

const RenderPokemon = () => {
    // State to hold the array of Pokémon objects and track button click
    const [ pokemonData, setPokemonData ] = useState([]);
    const [ buttonClicked, setButtonClicked ] = useState(false);
    
    // useEffect to fetch Pokémon data when the button is clicked
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then( async (response) => {
                const pokemonArray = response.data.results;
                
                // Fetch sprite URLs for each Pokémon
                const spritePromises = pokemonArray.map( async (pokemon) => {
                    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                    const spriteResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    return {
                        name: capitalizedName,
                        sprite: spriteResponse.data.sprites.front_default,
                    };
                });
                
                const spritesData = await Promise.all(spritePromises);
                setPokemonData(spritesData);
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
                <div className="my-4 d-flex flex-wrap justify-content-center gap-3">
                { pokemonData.map(( pokemon, index ) => {
                    return (
                        <div key={ index } className='p-2 rounded rounded-5 border border-5 border-secondary'>
                            <img src={ pokemon.sprite } alt={ `${pokemon.name} sprite` } />
                            <div className="text-center">
                                <p>{ index+1 } <br />
                                    <b>{ pokemon.name }</b>
                                </p>
                            </div>
                        </div>
                    )
                }) }
                </div>
            )}
        </div>
    );
}

export default RenderPokemon;