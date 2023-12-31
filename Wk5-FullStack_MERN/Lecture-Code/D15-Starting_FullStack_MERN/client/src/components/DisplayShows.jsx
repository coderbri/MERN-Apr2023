import React, { useEffect } from 'react';
import axios from 'axios'
import EditButton from './styles/EditButton.styled';
import DeleteButton from './styles/DeleteButton.styled';
import Button from './styles/Button.styled';

const DisplayShows = ({ tvShowsList, setTvShowsList }) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/shows')
            .then((response) => {
                console.log(response); // data: { shows: Array(12) [...] }, status: 200,...
                // console.log(response.data); // * OUTPUT: { shows: Array(12) [ {...}, {...}, {...},... ] }
                
                /* Due to the fact the shows are stored into an array
                    full of a list of objects as { shows: allShows }, 
                    we need to specify as such: */
                // console.log(response.data.shows); // * OUTPUT: Array(12) [ { _id: '', title: '...',... }, {...},... ]
                
                /* if the allShows object is returned as res.json(allShows),
                    the data needs to be declared as simply `response.data`. */
                setTvShowsList(response.data.shows);
                
            })
            
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold my-3'>Display All Shows</h2>
            
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                tvShowsList.map((show) => (
                    <div key={show._id} className="pt-4 px-4 rounded-md border-2 border-sky-300">
                        <h3 className='text-xl font-bold font-serif hover:text-rose-200'>
                            { show.title }
                        </h3>
                        <p>{ show.releaseYear }</p>
                        <div className="mt-5 pb-4 flex justify-center gap-4">
                            <Button>View</Button>
                            <EditButton >Edit</EditButton>
                            <DeleteButton>Delete</DeleteButton>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );

}

export default DisplayShows;
