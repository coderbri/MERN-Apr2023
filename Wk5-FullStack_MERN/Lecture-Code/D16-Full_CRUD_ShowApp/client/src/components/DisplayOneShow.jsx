import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import EditButton from './styles/EditButton.styled';
import DeleteButton from './styles/DeleteButton.styled';
import { formatDate } from '../utils/dateUtils';

const DisplayOneShow = () => {
    
    const navigate = useNavigate();
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
    
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/show/delete/${id}`)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch( err => console.log(err));
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className='my-5 text-center text-3xl font-serif font-bold'>{ show.title }</h2>
            <p><span className='font-semibold'>Release Year:</span> { show.releaseYear }</p>
            <p><span className='font-semibold'>Network:</span> { show.network }</p>
            <p><span className='font-semibold'>Created By:</span> { show.creator }</p>
            <p><span className='font-semibold'>Genre:</span> { show.genre }</p>
            
            <h3 className="text-xl text-center font-bold my-4">Show Actions</h3>
            <div className="flex justify-center gap-4">
                <Link to={`/edit/show/${id}`}>
                    <EditButton>Edit Show</EditButton>
                </Link>
                <DeleteButton onClick={() => deleteHandler(id)}>
                    Delete Show
                </DeleteButton>
            </div>
            
            <hr className='my-5' />
            <div className="flex justify-between text-gray-500 text-sm">
                <p>{ formatDate( show.createdAt ) }</p>
                { show.createdAt !== show.updatedAt && <p>{formatDate(show.updatedAt)} (edited)</p> }
            </div>
        </div>
    );
}

export default DisplayOneShow;
