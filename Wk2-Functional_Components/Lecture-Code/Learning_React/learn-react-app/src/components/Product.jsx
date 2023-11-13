import React, { useState } from 'react';

const Product = ({ title, desc, cost, initialStock }) => {
    //       getter    setter
    const [ inStock, setInStock ] = useState(initialStock)
    // ? Format the cost with commas for thousands
    const formattedCost = cost.toLocaleString();
    
    return (
        <div className='border border-3 rounded p-3 mb-3'>
            <h2 className='fw-bold fs-2 text-center'>{ title }</h2>
            <p><strong>Description:</strong> { desc }</p>
            <p><strong>Cost:</strong> ₩{ formattedCost }</p>
            <p><strong>In Stock:</strong> { inStock }</p>
            
            <div className="d-flex justify-content-center">
            {inStock > 0 ? (
                <button onClick={ (event) => setInStock(inStock-1) }
                className='btn btn-dark'>
                    Buy { title }
                </button>
                ) : (
                <h3 className='text-center text-danger-emphasis'>Out of Stock!</h3>
            )}
            </div>
        </div>
    );
}

export default Product;
