import React from 'react';
import styles from './styles/ButtonComponent.module.css'

const StyledButtonComponent3 = ({ buttonText3 }) => {
    
    /* ** Note: ** The name of the CSS module file needs to end in "module.css" for this to work. Importing the styles gives us an object will the different classes as key names. While here an excepetion is made, CSS Module class names CANNOT be hyphenated, so by convention, camel casing is used. However, two big advantages of using them is
        1. You can use media queries in them as usual, and
        2. they are completely encapsulated at the component level
    */
    
    return (
        <div className='mb-3'>
            <h3 className="fs-3 fw-bold">CSS Modules</h3>
            <p>A third approach overcomes a number of the problems of the first two:</p>
            <button className={ styles['styled-btn3'] }>{ buttonText3 }</button>
        </div>
    );
}

export default StyledButtonComponent3;
