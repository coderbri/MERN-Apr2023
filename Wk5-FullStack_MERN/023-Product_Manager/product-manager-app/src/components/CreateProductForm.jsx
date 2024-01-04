import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './styles/Button.styled';
import axios from 'axios';

const CreateProductForm = () => {
    
    const [ productItem, setProductItem ] = useState({
        productName: '',
        productPrice: 0.99,
        productDescription: '',
    });
    const [ errors, setErrors ]= useState({});
    const navigate = useNavigate();
    
    const changeHandler = (e) => {
        // ! setState
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        console.log("Data to be sent:", productItem);
        console.log(`This is the new show: ${JSON.stringify(productItem)}`);
        
        axios.post('http://localhost:8000/api/product/new', productItem)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                // ! setErrors
            });
    }
    
    return (
        <div className='max-w-md mx-auto'>
            <h2 className="text-center text-3xl font-bold my-3">Add a New Product!</h2>
            
            <form onSubmit={submitHandler}>
                
                <div className='mb-5'>
                    <label className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>Name</label>
                    <div>
                        <input type="text" name='title' onChange={ changeHandler } value={ productItem.productName }
                            className='text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                            placeholder='iPad Mini 6' required
                        />
                    </div>
                    {/* { errors.title
                        ? <p className='text-sm mt-2 font-bold text-red-400'>{ errors.title.message }</p>
                        : null
                    } */}
                </div>
                
                <div>
                    <Button><input type="submit" value="Create Product" /></Button>
                </div>
            </form>
        </div>
    );
}

export default CreateProductForm;
