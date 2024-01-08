import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonStyled from './styles/Button.styled';

const EditAlbumForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [ album, setAlbum ] = useState({
        albumName: "",
        artist: "",
        releaseYear: "",
        genre: "",
        explicit: false,
    });
    const [ errors, setErrors ] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/album/${id}`)
            .then((res) => {
                console.log("Album data uploaded", res);
                setAlbum(res.data);
            })
            .catch((err) =>  console.log(err));
    }, []);
    
    const changeHandler = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setAlbum({ ...album, [e.target.name]: value });
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/album/update/${id}`, album)
            .then((res) => {
                console.log("Data being sent:", res);
                navigate('/');
            })
            .catch((err) => {
                console.log("=== ERRORS DETECTED!", err.response.data);
                setErrors(err.response.data.errors);
            });
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className="text-center text-3xl font-bold my-3">Edit this Album</h2>
            
            <form onSubmit={submitHandler}>
                
                <div className="mb-5">
                    <label className="block mb-3 text-sm font-semibold">Album Title</label>
                    <div>
                        <input type="text" name='albumName' onChange={ changeHandler } value={ album.albumName }
                            className='text-sm rounded-lg block w-full p-2.5 bg-zinc-800 focus:border-emerald-500 focus:ring-emerald-400'
                            placeholder='Enter an Album Title' required
                        />
                    </div>
                    { errors.albumName
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.albumName.message }</p>
                        : null
                    }
                </div>
                
                <div className="mb-5">
                    <label className="block mb-3 text-sm font-semibold">Artist</label>
                    <div>
                        <input type="text" name='artist' onChange={ changeHandler } value={ album.artist }
                            className='text-sm rounded-lg block w-full p-2.5 bg-zinc-800 focus:border-emerald-500 focus:ring-emerald-400'
                            placeholder='Enter the Artist name' required
                        />
                    </div>
                    { errors.artist
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.artist.message }</p>
                        : null
                    }
                </div>
                
                <div className="mb-5">
                    <label className="block mb-3 text-sm font-semibold">Release Year</label>
                    <div>
                        <input type="number" name='releaseYear' onChange={ changeHandler } value={ album.releaseYear }
                            className='text-sm rounded-lg block w-full p-2.5 bg-zinc-800 focus:border-emerald-500 focus:ring-emerald-400'
                            required
                        />
                    </div>
                    { errors.releaseYear
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.releaseYear.message }</p>
                        : null
                    }
                </div>
                
                <div className="mb-5">
                    <label className="block mb-3 text-sm font-semibold">Genre</label>
                    <div>
                        <select name='genre' onChange={changeHandler} value={album.genre} className='text-sm rounded-lg block w-full p-2.5 bg-zinc-800 focus:border-emerald-500 focus:ring-emerald-400' required>
                            <option value="" className='text-zinc-800' disabled>--- Select a Genre ---</option>
                            <option value="Rock">Rock</option>
                            <option value="Pop">Pop</option>
                            <option value="Hip Hop">Hip Hop</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Classical">Classical</option>
                            <option value="R&B">R&B</option>
                            <option value="Lo-Fi">Lo-Fi</option>
                            <option value="Country">Country</option>
                            <option value="Electronic">Electronic</option>
                            <option value="K-Pop">K-Pop</option>
                            <option value="J-Pop">J-Pop</option>
                            <option value="Mando-Pop">Mando-Pop</option>
                            <option value="Video Game">Video Game</option>
                            <option value="Alternative">Alternative</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    { errors.genre
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.genre.message }</p>
                        : null
                    }
                </div>
                
                {/* <div className="mb-5">
                    <label className="block mb-3 text-sm font-semibold">Upload File</label>
                    <input className="text-sm rounded-lg block w-full p-2.5 bg-zinc-800 focus:border-emerald-500 focus:ring-emerald-400 cursor-pointer focus:outline-none" aria-describedby="album_cover_help" id="album_cover" type="file" />
                    <p class="mt-1 text-sm text-zinc-400" id="album_cover_help">An album cover is useful for users to identify your album.</p>
                </div> */}
                
                <div className="mb-5 flex gap-2 items-center">
                    <input type="checkbox" name="explicit" onChange={changeHandler} checked={album.explicit} className='w-4 h-4 text-emerald-600 bg-zinc-100 border-zinc-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:ring-2' />
                    <label className='text-sm font-semibold'>Is Explicit</label>
                </div>
                
                <div className="flex justify-end">
                    <ButtonStyled>
                        <input type="submit" value="Edit" />
                    </ButtonStyled>
                </div>
            </form>
        </div>
    );
}

export default EditAlbumForm;
