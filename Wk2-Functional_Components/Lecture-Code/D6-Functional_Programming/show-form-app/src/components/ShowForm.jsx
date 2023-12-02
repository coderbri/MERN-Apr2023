import React, { useState } from 'react';

const ShowForm = () => {
    
    const [ show, setShow ] = useState({ // ? Access these values as obj["key"]="value": show["genre"] = "drama"
        title: '',
        releaseYear: "",
        genre: '',
    })
    
    
    // How can we track all shows submitted?
    //  we can trigger an onSubmit Event to add a movie object to the list
    const [ allShows, setAllShows ] = useState([]);
    
    
    const changeHandler = (e) => {
        // retrieve the show object and set the key name and value.
        console.log("Name:", e.target.name);
        console.log("Value:", e.target.value);
        
        setShow({ ...show, [e.target.name]:e.target.value })
        console.log("UPDATED:", show);
    }
    
    const submitHandler = (e) => {
        e.preventDefault(); // ? prevents browser from auto-refreshing
        setAllShows([...allShows, show]); // ? collect all shows, and add the new show to that list
    }
    
    return (
        <div className="container-fluid col-lg-8">
            
            <h2 className='fw-bold text-center mb-3'>Show Form from an Object</h2>
            
            <form onSubmit={ submitHandler }>
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Title:</label>
                    <div className="col-md-9">
                        <input type="text" name='title' onChange={ changeHandler } className="form-control" />
                        {
                            show.title.length < 2 ?
                            <p className="text-center text-danger fw-medium">The title must be at least 2 characters</p>
                            : null
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Release Year:</label>
                    <div className="col-md-9">
                        <input type="number" name='releaseYear' onChange={ changeHandler } className="form-control" />
                        {
                            show.releaseYear < 1920 ?
                            <p className="text-center text-danger fw-medium">The release year must be released after 1919</p>
                            : null
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Genre:</label>
                    <div className="col-md-9">
                        <input type="text" name='genre' onChange={ changeHandler } className="form-control" />
                        {
                            show.genre.length < 2 ?
                            <p className="text-center text-danger fw-medium">The genre must be at least 5 characters</p>
                            : null
                        }
                    </div>
                </div>
                
                <div className="row col-3 mx-auto">
                    <input type="submit" value="Add Show" className='btn btn-dark fw-bold' />
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

export default ShowForm;
