import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = () => {
    
    const { string, textColor, bgColor } = useParams();
    
    return (
        <div className='col-10 col-md-5 mx-auto'>
            {
                isNaN( string ) ?
                <h3 
                    style={
                        textColor ?
                        { color: textColor, backgroundColor: bgColor }
                        : null
                    }
                    className='p-3'
                >
                    This is a word: { string }
                </h3>
                : <h3>This is a number: { string }</h3>
            }
        </div>
    );
}

export default ParamsComponent;
