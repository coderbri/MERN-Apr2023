import React from 'react';

const DisplayGeneratedBoxes = ({ listOfBoxes, setListOfBoxes }) => {
    return (
        <div className='col-10 mx-auto'>
            <h2 className="text-center fw-bold fs-2">Boxes</h2>
            
            <div className="d-flex flex-wrap justify-content-center gap-3">
            {
                listOfBoxes.map(( box, idx ) => (
                    <div key={ idx }>
                        <div style={{
                            display: "inline-block",
                            margin: "10px",
                            height: box.boxSize, width: box.boxSize,
                            backgroundColor: box.boxColor
                        }}
                        >
                        </div>
                        <p className='text-center fw-semibold' style={{ color: box.boxColor }}>
                            { box.boxColor } <br />{ box.boxSize }
                        </p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default DisplayGeneratedBoxes;
