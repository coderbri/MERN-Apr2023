import React, { useState } from 'react';

const StyledButtonComponent2 = ({ buttonText2 }) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const handleFocus = () => {
        setIsFocused(true);
    };
    
    const handleBlur = () => {
        setIsFocused(false);
    };
    
    const buttonStyle = {
        backgroundColor: isHovered || isFocused ? '#155e75' : '#0891b2',
        borderRadius: '8px',
        borderStyle: 'none',
        boxSizing: 'border-box',
        color: '#FFFFFF',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        height: '40px',
        lineHeight: '20px',
        listStyle: 'none',
        margin: '0',
        outline: 'none',
        padding: '10px 16px',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'color 100ms',
        verticalAlign: 'baseline',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
    };

    return (
        <div className="mb-3">
            <h3 className="fs-3 fw-bold">Styled Button</h3>
            <p>The following button is a styled button using React state and inline CSS styling:</p>
            <button
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {buttonText2}
            </button>
        </div>
    );
};

export default StyledButtonComponent2;
