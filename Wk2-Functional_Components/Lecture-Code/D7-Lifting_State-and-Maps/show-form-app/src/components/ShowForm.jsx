import React, { useState } from 'react';

const ShowForm = ({ showList, setShowList }) => {
    
    // ! Always initialize state with some datatype! Never leave it empty!
    const [ show, setShow ] = useState({ // ? Access these values as obj["key"]="value": show["genre"] = "drama"
        title: '',
        releaseYear: 1920,
        genre: '',
    })
    
    // How can we track all shows submitted?
    //  we can trigger an onSubmit Event to add a movie object to the list
    
    // ? Use e to track events occuring in the app component.
    const changeHandler = (e) => {
        // retrieve the show object and set the key name and value.
        console.log(`Inputted Show Data\n -- Key Name being Edited: ${e.target.name}\n -- Value in Key: ${e.target.value}`);
        
        setShow({ ...show, [e.target.name]:e.target.value })
        console.log("UPDATED:", show);
    }
    
    const submitHandler = (e) => {
        e.preventDefault(); // ? prevents browser from auto-refreshing
        console.log(`This is the new show: ${JSON.stringify(show)}`);
        /* Use template literals to use variables within a string.
            The show object will log: [ object object ], with a dropdown to display each key-pair values.
            To see it the data within more specifically, use `JSON.stringify()`. It will appear as:
                This is the new show: {"title":"Stringified JSON Object","releaseYear":"2023","genre":"Code Test"}
        */
        
        setShowList([...showList, show]); // ? collect all shows, and add the new show to that list
        setShow({ title: '', releaseYear: 1920, genre: '' })
        /* To reset the form so it will empty contents, use Two-Way Data-Binding:
            1. Set show to its original state as its defined in lines 5-9.
            2. Then equal the HTML `value` attribute to that state: ex. value={ show.title }
            3. Submit Form and contents will saved to state and be cleared from form
        */
    }
    
    return (
        <div className="container-fluid col-lg-8">
            <h2 className='fw-bold text-center mb-3'>Add Your Favorite Show!</h2>
            
            <form onSubmit={ submitHandler }>
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Title:</label>
                    <div className="col-md-9">
                        <input type="text" name='title'
                            onChange={ changeHandler } value={ show.title }
                            className="form-control"
                        />
                        {
                            show.title && show.title.length < 2 ?
                            <p className="text-center text-danger fw-medium">The title must be at least 2 characters</p>
                            : null
                        }
                    </div>
                </div>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-md-3 col-form-label fw-semibold">Release Year:</label>
                    <div className="col-md-9">
                        <input type="number" name='releaseYear'
                            onChange={ changeHandler } value={ show.releaseYear }
                            className="form-control"
                        />
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
                        <input type="text" name='genre'
                            onChange={ changeHandler } value={ show.genre }
                            className="form-control"
                        />
                        {
                            show.genre && show.genre.length < 5 ?
                            <p className="text-center text-danger fw-medium">The genre must be at least 5 characters</p>
                            : null
                        }
                    </div>
                </div>
                
                <div className="row col-3 mx-auto">
                    <input type="submit" value="Add Show" className='btn btn-dark fw-bold' />
                </div>
                
            </form>
            
            <div className="mt-4 rounded border border-secondary p-3">
                <h5 className="text-center">Form Contents</h5>
                <div className="col-5 mx-auto text-center">
                    <p>Title: <strong>{show.title}</strong></p>
                    <p>Release Year: <strong>{show.releaseYear}</strong></p>
                    <p>Genre: <strong>{show.genre}</strong></p>
                </div>
            </div>
        </div>
    );
}

export default ShowForm;
