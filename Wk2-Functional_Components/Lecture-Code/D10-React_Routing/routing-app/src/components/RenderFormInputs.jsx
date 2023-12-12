import React from 'react';
import { useParams } from 'react-router-dom';

const RenderFormInputs = () => {
    
    const { color, id } = useParams(); // needs to match what's in the Route Path
    
    return (
        <div className='my-3'>
            
            <h3>Render Color and Number</h3>
            <h4 className='p-3' style={{ backgroundColor: `#${color}` }}>
                Your color is <b>{ color }</b>, and your number is { id }.
            </h4>
            
        </div>
    );
}

export default RenderFormInputs;
