import React, { useState } from 'react';


const isHtmlColorName = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
};


const BoxGeneratorForm = ({ listOfBoxes, setListOfBoxes }) => {
    
    // * States below will keep track of the input values:
    const [ boxColor, setBoxColor ] = useState("");
    const [ colorError, setColorError ] = useState("");
    
    const [ boxSize, setBoxSize ] = useState(50);
    
    
    const handleColor = (e) => {
        const inputColor = e.target.value;
        console.log(`Inputted Box Color Data\n --${e.target.name} : "${inputColor}"`);
        /* Inputted Box Color Data
            --boxColor : "rebeccapurple" */
        setBoxColor(inputColor);
        
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // ? Regular expression to check if the input is a valid hex color code
        if (hexRegex.test(inputColor) || isHtmlColorName(inputColor)) { // ? Check if the input is a valid hex color code or HTML color name
            setColorError("");
        } else {
            setColorError("Invalid color format. Please input a Hex Code or HTML Color Name.");
        }
    }
    
    const handleSize = (e) => {
        const inputSize = e.target.value;
        console.log(`Inputted Box Size Data\n --${e.target.name} : "${inputSize} px"`);
        /* Inputted Box Color Data
            --boxSize : "75 px" */
        setBoxSize(inputSize);
    }
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`Box with the color "${ boxColor }" at size "${ boxSize }px" is generated!`);
        console.log(listOfBoxes);
        
        if (!colorError) { // ? Check if there is an input error before adding the color
            setListOfBoxes([
                ...listOfBoxes, {
                    boxColor: boxColor ,
                    boxSize: boxSize+"px"
                }
            ]);
            setBoxColor(""); // empty input field after submit
            setBoxSize(50); // empty input field after submit
        }
    }
    
    return (
        <div className='m-4 col-10 col-md-6 mx-auto'>
            
            <form onSubmit={ submitHandler }>
                
                { colorError ? 
                    <div className=" mt-4 col-auto">
                        <div className="alert alert-danger">{colorError}</div>
                    </div>
                : "" }
                
                <div className="mb-3 row align-items-center">
                    <label className='col-2 form-label'>Color</label>
                    <div className="col-10">
                        <input type="text" className='form-control bg-secondary-subtle'
                            name="boxColor" value={ boxColor } onChange={ handleColor }
                        />
                    </div>
                </div>
                
                <div className='mb-3 row align-items-center'>
                    <label className="col-2 form-label">Size</label>
                    <div className="col-10">
                        <input type="number" className='form-control bg-secondary-subtle'
                            name="boxSize" value={ boxSize } onChange={ handleSize }
                        />
                    </div>
                </div>
                
                <div className="d-flex justify-content-end">
                { colorError ? 
                    <input type="submit" value="Add Box" className='btn btn-dark' disabled />
                    : <input type="submit" value="Add Box" className='btn btn-dark' />
                }
                </div>
                
            </form>
            
        </div>
    );
}

export default BoxGeneratorForm;
