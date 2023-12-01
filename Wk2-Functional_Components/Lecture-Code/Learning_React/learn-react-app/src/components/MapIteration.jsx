import React from 'react';

const MapIteration = () => {
    
    const groceryList = [ "pearl onion", "thyme", "cremini mushrooms", "butter" ];
    
    return (
        <>
            <h4>Grocery List</h4>
            
            <ul>
            { groceryList.map( (item, index) => 
                <li key={ index }>{ item }</li>
            )}
            </ul>
        </>
    );
}

export default MapIteration;
