import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';
import Button from './styles/Button.styled';

const EditProductForm = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [ productItem, setProductItem ] = useState({
        productName: '',
        productPrice: 0.99,
        productDescription: '',
    });
    const [ errors, setErrors ] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log("Loading product data...", res);
                setProductItem(res.data);
                console.log("Product data loaded!");
            })
            .catch(err => console.log(err));
    }, []);
    
    const changeHandler = (e) => {
        setProductItem({ ...productItem, [e.target.name]:e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Data to be sent:", productItem);
        axios.put(`http://localhost:8000/api/product/update/${id}`, productItem)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            });
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className="text-center text-3xl font-bold my-3">Edit Product Details</h2>
            
            <form onSubmit={submitHandler}>
                <div className='mb-5'>
                    <label className='block mb-2 text-sm font-semibold text-zinc-900 dark:text-white'>Name</label>
                    <div>
                        <input type="text" name='productName' onChange={ changeHandler } value={ productItem.productName }
                            className='text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                            placeholder='iPad Mini 6' required
                        />
                    </div>
                    { errors.productName
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.productName.message }</p>
                        : null
                    }
                </div>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm font-semibold text-zinc-900 dark:text-white'>Price</label>
                    <div className='flex'>
                        <span className="inline-flex items-center px-3 text-sm text-zinc-900 bg-zinc-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-600 dark:text-zinc-400 dark:border-zinc-600">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 288 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                            </svg>
                        </span>
                        <input type="number" name='productPrice' onChange={ changeHandler } value={ productItem.productPrice }
                            className='text-sm rounded-e-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                            required
                        />
                    </div>
                    { errors.productPrice
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.productPrice.message }</p>
                        : null
                    }
                </div>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm font-semibold text-zinc-900 dark:text-white'>Description</label>
                    <div>
                        <textarea cols="30" rows="10" name='productDescription'
                            onChange={ changeHandler } value={ productItem.productDescription }
                            className='text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 text-black dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                            placeholder='Tiny. But Mighty!' required
                        ></textarea>
                    </div>
                    { errors.productDescription
                        ? <p className="text-sm mt-2 font-bold text-red-600 dark:text-red-400">{ errors.productDescription.message }</p>
                        : null
                    }
                </div>
                
                <div className='flex justify-between items-center gap-4'>
                    <Button><input type="submit" value="Edit Product" /></Button>
                    <Link to={"/"} className='me-5'>Go Back to Home</Link>
                </div>
            </form>
            
            <hr className="my-5" />
            <div className="text-zinc-500 text-sm">
                { productItem.createdAt !== productItem.updatedAt && <p>{formatDate(productItem.updatedAt)} (edited)</p> }
            </div>
        </div>
    );
}

export default EditProductForm;
