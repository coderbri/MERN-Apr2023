import React from 'react';
import { useState } from 'react';

const Form = () => {
    
    const [ title, setTitle ] = useState("");
    const [ releaseYear, setReleaseYear ] = useState(1919);
    const [ genre, setGenre ] = useState("")
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
        // console.log(e.target.value); // title name
    }
    const handleReleaseYear = (e) => {
        setReleaseYear(e.target.value);
        // console.log(e.target.value); // release year
    }
    const handleGenre = (e) => {
        setGenre(e.target.value);
        // console.log(e.target.value); // genre name
    }
    
    return (
        <div className="container-fluid col-lg-8">
            
            <h2 className='fw-bold mb-3'>Simple Show Form</h2>
            
            <form>
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Title:</label>
                    <div className="col-md-9">
                        <input type="text" onChange={ handleTitle } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Release Year:</label>
                    <div className="col-md-9">
                        <input type="number" onChange={ handleReleaseYear } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Genre:</label>
                    <div className="col-md-9">
                        <input type="text" onChange={ handleGenre } className="form-control" />
                    </div>
                </div>
                
                <div className="row col-3 mx-auto">
                    <input type="submit" value="Submit" className='btn btn-dark fw-bold' />
                </div>
                
            </form>
            
        </div>
    );
}

export default Form;