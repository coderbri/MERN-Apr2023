import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';

const EditShowForm = () => {
    
    // ! NEW - Show's id needs to be passed from DisplayShows Component to access its data
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [ show, setShow ] = useState({
        title: '',
        releaseYear: 1920,
        network: '',
        creator: '',
        genre: '',
    })
    const [ errors, setErrors ] = useState({});
    
    
    const changeHandler = (e) => {
        setShow({ ...show, [e.target.name]:e.target.value });
    }
    
    // ! NEW - the show's data first needs to be loaded before it can be updated
    useEffect(() => {
        axios.get(`http://localhost:8000/api/show/${id}`)
        .then((res) => {
            console.log("Show data loading...");
            console.log(res);
            // console.log(res.data.show);
            setShow(res.data.show);
            console.log("Show data loaded!")
        })
        .catch(err => console.log(err));
    }, []);
    
    const submitHandler = (e) => {
        e.preventDefault(); // ? prevents browser from auto-refreshing
        
        console.log("Data to be updated:", show);
        axios.put(`http://localhost:8000/api/show/update/${id}`, show)
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            });
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className='text-center text-3xl font-bold my-3'>Edit This Show!</h2>
            
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
                    <input type="submit" value="Edit Show" />
                    </span>
                </div>
            </form>
            
            <hr className='my-5' />
            <div className="text-gray-500 text-sm">
                { show.createdAt !== show.updatedAt && <p>{formatDate(show.updatedAt)} (edited)</p> }
            </div>
            
        </div>
    );
}

export default EditShowForm;