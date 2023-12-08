import React, { useState } from 'react';


// * Function to check if the input is a valid HTML color name
const isHtmlColorName = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
};


const BoxGenForm = ({ listOfColors, setListOfColors }) => {
    
    // * This boxColor state keeps track of the text box input value:
    const [ boxColor, setBoxColor ] = useState("");
    const [ inputError, setInputError ] = useState("");
    
    
    const changeHandler = (e) => {
        const inputColor = e.target.value;
        console.log(`Inputted Box Color Data\n --${e.target.name} : "${inputColor}"`)
        /* Inputted Box Color Data
            --boxColor : "rebeccapurple" */
        setBoxColor(inputColor);
        
        // * Regular expression to check if the input is a valid hex color code
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        // * Check if the input is a valid hex color code or HTML color name
        if (hexRegex.test(inputColor) || isHtmlColorName(inputColor)) {
            setInputError("");
        } else {
            setInputError("Invalid color format. Please input a Hex Code or HTML Color Name.");
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`Box with the color -- "${ boxColor }" -- is generated!`);
        console.log(listOfColors);
        
        // Check if there is an input error before adding the color
        if (!inputError) {
            setListOfColors([ ...listOfColors, boxColor ]); // empty form after submit
            setBoxColor(""); // empty form after submit
        }
    }
    
    return (
        <div className='m-4 col-10 col-md-6 mx-auto'>
            
            <form onSubmit={ submitHandler }>
                
                { inputError ? 
                    <div className=" mt-4 col-auto">
                        <div className="alert alert-danger">{inputError}</div>
                    </div>
                : "" }
                
                <div className='row align-items-center justify-content-center gap-1'>
                    <div className='col-auto'>
                        <label className='form-label'>Color</label>
                    </div>
                    
                    <div className="col-auto">
                        <input type="text" className='form-control bg-secondary-subtle'
                            name="boxColor" value={ boxColor } onChange={ changeHandler }
                        />
                    </div>
                    
                    <div className="col-auto">
                    { inputError ? 
                        <input type="submit" value="Add Box" className='btn btn-dark' disabled />
                        : <input type="submit" value="Add Box" className='btn btn-dark' />
                    }
                    </div>
                </div>
                
            </form>
            
        </div>
    );
}

export default BoxGenForm;
