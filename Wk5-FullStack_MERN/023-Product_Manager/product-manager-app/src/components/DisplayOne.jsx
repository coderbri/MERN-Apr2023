import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios'
import EditButton from './styles/EditButton.styled';
import DeleteButton from './styles/DeleteButton.styled';
import { formatDate } from "../utils/dateUtils"

const DisplayOne = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [ product, setProduct ] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    const deleteHandler = (id) => {}
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className='text-3xl font-bold text-center'>{ product.productName }</h2>
            <div className="mt-2">
                <p><span className='font-semibold'>Price: </span>${ product.productPrice }</p>
                <p><span className='font-semibold'>Description: </span>{ product.productDescription }</p>
            </div>
            
            <h3 className="text-xl text-center font-bold my-4">Product Actions</h3>
            <div className="flex justify-center items-center gap-4">
                <Link to={"/"} className='me-5'>Go Back</Link>
                    <EditButton>Edit Product</EditButton>
                {/* <Link to={`/edit/show/${id}`}>
                </Link> */}
                <DeleteButton onClick={() => deleteHandler(id)}>
                    Delete Product
                </DeleteButton>
            </div>
            
            <hr className='my-5' />
            <div className="flex justify-between text-gray-500 text-sm">
                <p>{ formatDate(product.createdAt) }</p>
                { product.createdAt !== product.updatedAt && <p>{ formatDate(product.updatedAt) } (edited)</p> }
            </div>
        </div>
    );
}

export default DisplayOne;
