import React from 'react';

const DisplayShows = ({ showList, setShowList }) => {
    return (
        <div className='mt-4'>
            <h2 className="text-center fs-2 fw-semibold">Show List</h2>
            
            <div className="row justify-content-center mt-3">
            {
                /* Notes: 
                - using () means we can write the arrow function on one line
                - using {} requires a return statement
                */
                showList.map(( show, index ) => (
                    <div key={ index } className='col-md-6 col-xl-3'>
                        <div className='bg-secondary-subtle p-3 rounded mb-2'>
                            <h3 className="fw-semibold">{ index+1 }. { show.title }</h3>
                            <p>Release Year: <strong>{ show.releaseYear }</strong></p>
                            <p>Genre(s): <strong>{ show.genre }</strong></p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default DisplayShows;
