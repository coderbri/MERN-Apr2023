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
        <div className='max-w-md mx-auto'>
            <h2 className='text-center text-3xl font-bold my-3'>Add Your Favorite Show!</h2>
            
            <form onSubmit={ submitHandler }>
                <div className='mb-5'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Title</label>
                    <div>
                        <input type="text" name='title' onChange={ changeHandler } value={ show.title }
                            className='text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
                            placeholder='Fullmetal Alchemist' required
                        />
                    </div>
                    { errors.title
                        ? <p className='text-sm mt-2 font-bold text-red-400'>{ errors.title.message }</p>
                        : null
                    }
                </div>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm text-gray-900 dark:text-white'>Release Year</label>
                    <div>
                        <input type="number" name='releaseYear' onChange={ changeHandler } value={ show.releaseYear } 
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    { errors.releaseYear 
                        ? <p className='text-sm mt-2 font-bold text-red-400'>{ errors.releaseYear.message }</p>
                        : null
                    }
                </div>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm text-gray-900 dark:text-white'>Network</label>
                    <div>
                        <input type="text" name='network' onChange={ changeHandler } value={ show.network } 
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Bones' required
                        />
                    </div>
                    { errors.network 
                        ? <p className='text-sm mt-2 font-bold text-red-400'>{ errors.network.message }</p>
                        : null
                    }
                </div>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm text-gray-900 dark:text-white'>Creator</label>
                    <div>
                        <input type="text" name='creator' onChange={ changeHandler } value={ show.creator } 
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Hiromu Arakawa' required
                        />
                    </div>
                    { errors.creator 
                        ? <p className='text-sm mt-2 font-bold text-red-400'>{ errors.creator.message }</p>
                        : null
                    }
                </div>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm text-gray-900 dark:text-white'>Genre(s)</label>
                    <div>
                        <input type="text" name='genre' onChange={ changeHandler } value={ show.genre } 
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Adventure, Dark Fantasy, Steampunk' required
                        />
                    </div>
                    { errors.genre 
                        ? <p className='text-sm mt-2 font-bold text-red-400'>{ errors.genre.message }</p>
                        : null
                    }
                </div>
                
                <div>
                    <span className='font-bold py-2 px-4 rounded 
                        text-zinc-600
                        bg-gradient-to-br from-violet-100 to-sky-200 
                        hover:bg-gradient-to-br hover:from-indigo-300 hover:to-blue-300'
                    >
                    <input type="submit" value="Add Show" />
                    </span>
                </div>
            </form>
            
        </div>
    );
}

export default CreateShowForm;