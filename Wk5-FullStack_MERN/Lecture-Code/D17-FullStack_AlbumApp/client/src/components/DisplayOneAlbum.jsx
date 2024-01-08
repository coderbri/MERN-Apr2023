import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditButton from './styles/EditButton';
import DeleteButton from './styles/DeleteButton';

const DisplayOneAlbum = () => {
    const [ albumDetails, setAlbumDetails ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/album/${id}`)
            .then((res) => {
                console.log("=== Album Details loaded:", res);
                setAlbumDetails(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    const deleteHandler = (id) => {}
    
    return (
        <div className='max-w-2xl mx-auto'>
            <h2 className='text-2xl font-bold'>
                { albumDetails.albumName }
            </h2>
            <p className='font-semibold text-zinc-500'>
                { albumDetails.artist } • { albumDetails.releaseYear }
            </p>
            <p className='font-medium text-zinc-500'>
                Genre: { albumDetails.genre }
            </p>
            <div className="flex gap-3 mt-3">
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    );
}

export default DisplayOneAlbum;
