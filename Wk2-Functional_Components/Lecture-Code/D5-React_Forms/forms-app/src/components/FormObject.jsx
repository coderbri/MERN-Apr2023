import React from 'react';
import { useState } from 'react';

const FormObject = () => {
    
    const [ show, setShow ] = useState({
        title: '',
        releaseYear: 1919,
        genre: '',
    })
    // ? Access these values as obj["key"]="value": show["genre"] = "drama"
    
    const changeHandler = (e) => {
        // ? retrieve the show object and set the key name and value.
        console.log("Name:", e.target.name);
        console.log("Value:", e.target.value);
        
        setShow({ ...show, [e.target.name]:e.target.value })
        // setShow(prevState => ({ ...prevState, [e.target.name]:e.target.value }))
        console.log("UPDATED:", show);
    }
    
    return (
        <div className="container-fluid col-lg-8">
            
            <h2 className='fw-bold text-center mb-3'>Show Form from an Object</h2>
            
            <form>
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Title:</label>
                    <div className="col-md-9">
                        <input type="text" name='title' onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Release Year:</label>
                    <div className="col-md-9">
                        <input type="number" name='releaseYear' onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Genre:</label>
                    <div className="col-md-9">
                        <input type="text" name='genre' onChange={ changeHandler } className="form-control" />
                    </div>
                </div>
                
                <div className="row col-3 mx-auto">
                    <input type="submit" value="Submit" className='btn btn-dark fw-bold' />
                </div>
                
            </form>
            
            <hr />
            <h3 className="text-center">Form Contents</h3>
            <div className="col-5 mx-auto text-center">
                <p>Title: <strong>{show.title}</strong></p>
                <p>Release Year: <strong>{show.releaseYear}</strong></p>
                <p>Genre: <strong>{show.genre}</strong></p>
            </div>
            
        </div>
    );
}

export default FormObject;
