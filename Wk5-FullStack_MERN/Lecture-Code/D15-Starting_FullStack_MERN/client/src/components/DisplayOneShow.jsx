import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditButton from './styles/EditButton.styled';
import DeleteButton from './styles/DeleteButton.styled';

const DisplayOneShow = () => {
    const { id } = useParams();
    console.log(`=== Show id: ${id} ===`);
    
    const [ show, setShow ] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/show/${id}`)
        .then((res) => {
            console.log(res);
            // console.log(res.data.show);
            setShow(res.data.show);
        })
        .catch(err => console.log(err));
    }, []);
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className='my-5 text-center text-3xl font-serif font-bold'>{ show.title }</h2>
            <p><span className='font-semibold'>Release Year:</span> { show.releaseYear }</p>
            <p><span className='font-semibold'>Network:</span> { show.network }</p>
            <p><span className='font-semibold'>Created By:</span> { show.creator }</p>
            <p><span className='font-semibold'>Genre:</span> { show.genre }</p>
            
            <h3 className="text-xl text-center font-bold">Show Actions</h3>
            <div className="flex justify-center gap-4 mt-4">
                <EditButton>Edit Show</EditButton>
                <DeleteButton>Delete Show</DeleteButton>
            </div>
        </div>
    );
}

export default DisplayOneShow;
