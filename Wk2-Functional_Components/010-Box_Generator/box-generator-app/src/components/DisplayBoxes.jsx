import React from 'react';

const DisplayBoxes = ({ listOfColors, setListOfColors }) => {
    return (
        <div className='col-10 mx-auto'>
            <h2 className="text-center fw-bold fs-2">Boxes</h2>
            
            <div className="d-flex flex-wrap justify-content-center gap-3">
            {
                listOfColors.map(( colorOfThisBox, idx ) => (
                    <div key={ idx }>
                        <div style={{
                            display: "inline-block",
                            margin: "10px",
                            height: "50px", width: "50px",
                            backgroundColor: colorOfThisBox
                        }}
                        ></div>
                        <p className='text-center fw-semibold' style={{ color: colorOfThisBox }}>
                            { colorOfThisBox }
                        </p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default DisplayBoxes;
