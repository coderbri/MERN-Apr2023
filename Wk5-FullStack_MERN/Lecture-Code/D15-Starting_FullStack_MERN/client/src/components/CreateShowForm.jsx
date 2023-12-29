import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateShowForm = ({ showList, setShowList }) => {
    
    const navigate = useNavigate();
    // ! Always initialize state with some datatype! Never leave it empty!
    const [ show, setShow ] = useState({ // ? Access these values as obj["key"]="value": show["genre"] = "drama"
        title: '',
        releaseYear: 1920,
        network: '',
        creator: '',
        genre: '',
    })
    const [ errors, setErrors ] = useState({});
    
    /* How do we track changes made?
        ? Use e to track events occuring in the app component in both `changeHandler` and `submitHandler`.
        ? Retrieve the show object and set the key name and value.
    How can we track all shows submitted?
        ? we can trigger an `onSubmit` Event to add a movie object to the list
    */
    
    const changeHandler = (e) => {
        // console.log(`Inputted Show Data\n -- KeyName being edited: ${e.target.name}\n -- value in Key: "${e.target.value}"`);
        setShow({ ...show, [e.target.name]:e.target.value }) // ? We should see state updated correctly
        // console.log("UPDATED HANDLED INFO:", show);
    }
    
    const submitHandler = (e) => {
        e.preventDefault(); // ? prevents browser from auto-refreshing
        
        console.log("Data to be sent:", show);
        console.log(`This is the new show: ${JSON.stringify(show)}`);
        /* Use template literals to use variables within a string.
            The show object will log: [ object object ], with a dropdown to display each key-pair values.
            To see it the data within more specifically, use `JSON.stringify()`. It will appear as:
                This is the new show: {"title":"Stringified JSON Object","releaseYear":"2023","genre":"Code Test"}
        */
        
        // ! NEW
        /* While inside the (), send back the `show` post data. 
            This object can go inside the `request.body`. */
        axios.post('http://localhost:8000/api/show/new', show)
            .then((response) => {
                console.log(response);
                navigate('/');
                
                /* In the case that a wireframe requires to stay on the form page:
                    To reset the form so it will empty contents, use Two-Way Data-Binding:
                    1. Set show to its original state as its defined in lines 5-9.
                    2. Then equal the HTML `value` attribute to that state: ex. value={ show.title }
                    3. Submit Form and contents will saved to state and be cleared from form
                */
                // setShow({ title: '', releaseYear: 1920, network: '', creator: '', genre: '' });
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            });
        
        // setShowList([...showList, show]); // ? collect all shows, and add the new show to that list
        
        
    }
    
    return (
        <div>
            <h2>Add Your Favorite Show!</h2>
            
            <form onSubmit={ submitHandler }>
                <div>
                    <label>Title:</label>
                    <div>
                        <input type="text" name='title' onChange={ changeHandler } value={ show.title } />
                    </div>
                    { errors.title
                        ? <p>{ errors.title.message }</p>
                        : null
                    }
                </div>
                
                <div>
                    <label>Release Year:</label>
                    <div>
                        <input type="number" name='releaseYear' onChange={ changeHandler } value={ show.releaseYear } />
                    </div>
                    { errors.releaseYear 
                        ? <p>{ errors.releaseYear.message }</p>
                        : null
                    }
                </div>
                
                <div>
                    <label>Network:</label>
                    <div>
                        <input type="text" name='network' onChange={ changeHandler } value={ show.network } />
                    </div>
                    { errors.network 
                        ? <p>{ errors.network.message }</p>
                        : null
                    }
                </div>
                
                <div>
                    <label>Creator:</label>
                    <div>
                        <input type="text" name='creator' onChange={ changeHandler } value={ show.creator } />
                    </div>
                    { errors.creator 
                        ? <p>{ errors.creator.message }</p>
                        : null
                    }
                </div>
                
                <div>
                    <label>Genre:</label>
                    <div>
                        <input type="text" name='genre' onChange={ changeHandler } value={ show.genre } />
                    </div>
                    { errors.genre 
                        ? <p>{ errors.genre.message }</p>
                        : null
                    }
                </div>
                
                <div>
                    <input type="submit" value="Add Show" />
                </div>
            </form>
            
        </div>
    );
}

export default CreateShowForm;