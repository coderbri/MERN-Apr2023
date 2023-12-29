import React, { useEffect } from 'react';
import axios from 'axios'

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
        <div>
            <h2>Display All Shows</h2>
            {
                tvShowsList.map((show) => (
                    <div key={show._id}>
                        <h3>
                            <em>{ show.title }</em>
                        </h3>
                        <p>{ show.releaseYear }</p>
                        {/* <p>Network: { show.network }</p> */}
                        {/* <p>Genre(s): { show.genre }</p> */}
                    </div>
                ))
            }
        </div>
    );

}

export default DisplayShows;
