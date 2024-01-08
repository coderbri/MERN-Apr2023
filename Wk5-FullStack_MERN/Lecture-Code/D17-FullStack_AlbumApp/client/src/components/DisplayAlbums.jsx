import React, { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditButton from './styles/EditButton';
import DeleteButton from './styles/DeleteButton';

const DisplayAlbums = ({ albumList, setAlbumList }) => {
    useEffect(() => {
        axios.get("http://localhost:8000/api/albums")
            .then((res) =>{
                console.log("=== All albums loaded:", res);
                setAlbumList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/album/delete/${id}`)
            .then((res) => {
                console.log(res);
                const updatedAlbumList = albumList.filter((album) => album._id !== id);
                setAlbumList(updatedAlbumList);
            })
            .catch(err => console.log(err.response));
    };
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>All Albums</h2>
            <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                { albumList.map((album) => (
                    <div key={album._id} className='p-4 rounded-lg bg-zinc-800'>
                        <p>test</p>
                        <hr />
                        <div className="mt-3 flex flex-col align-bottom truncate">
                            <Link to={`/album/${album._id}/view`} className="ease-out duration-200
                                hover:text-emerald-300 hover:font-extrabold">
                                <h3 className='font-semibold'>{ album.albumName }</h3>
                            </Link>
                            <p className='text-zinc-500 font-medium'>{ album.artist }</p>
                            <div className="flex justify-end">
                                <div className="flex items-center gap-3">
                                    <Link to={`/album/${album._id}/edit`}>
                                        <EditButton />
                                    </Link>
                                    <DeleteButton onClick={() => deleteHandler(album._id)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayAlbums;
