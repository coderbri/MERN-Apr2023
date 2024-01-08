import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EditButton from './styles/EditButton';
import DeleteButton from './styles/DeleteButton';
import { formatDate } from '../utils/dateUtils';

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
             {Object.keys(albumDetails).length > 0 && (  // Check if albumDetails is not empty
                <>
                    <h2 className='text-2xl font-bold'>{albumDetails.albumName}</h2>
                    <p className='font-semibold text-zinc-500'>{albumDetails.artist} • {albumDetails.releaseYear}</p>
                    <p className='font-medium text-zinc-500'>Genre: {albumDetails.genre}</p>
                    {albumDetails.explicit !== undefined && (  // Check if explicit is defined
                        <p className='font-medium text-zinc-500'>
                            Explicit: { albumDetails.explicit.toString() === 'true'
                            ? <span>Yes</span>
                            : <span>No</span> }
                        </p>
                    )}
                    <div className="flex gap-3 mt-3">
                        <Link to={`/album/${id}/edit`}>
                            <EditButton />
                        </Link>
                        <DeleteButton />
                    </div>
                    <hr className='my-5' />
                    <div className="flex justify-between text-zinc-500 text-sm">
                        <p>{formatDate(albumDetails.createdAt)}</p>
                        {albumDetails.createdAt !== albumDetails.updatedAt && (
                            <p>{formatDate(albumDetails.updatedAt)} (edited)</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default DisplayOneAlbum;
