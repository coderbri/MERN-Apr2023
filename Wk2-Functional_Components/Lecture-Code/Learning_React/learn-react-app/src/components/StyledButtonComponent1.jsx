import React from 'react';
import './styles/styles.css';

const StyledButtonComponent1 = ({ buttonText1 }) => {
    return (
        <div className="mb-3">
            <h3 className="fs-3 fw-bold">Direct Import</h3>
            <p>The following button is a styled button using regular CSS and the styles used on it are shown as a result of <strong>Direct Import:</strong></p>
            <button className='styled-btn1'>{ buttonText1 }</button>
        </div>
    );
};

export default StyledButtonComponent1;
