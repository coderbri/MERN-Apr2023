import React, { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './styles/DeleteButton.styled';
import EditButton from './styles/EditButton.styled';
import Button from './styles/Button.styled';

const DisplayProducts = ({ productList, setProductList }) => {
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then((res) => {
                console.log(res);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    const deleteHandler = (id) => {}
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>All Products</h2>
            <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                productList.map((product) => (
                    <div key={product._id}
                        className='p-4 rounded-md border-2 
                            text-center
                            border-zinc-700 bg-zinc-800'
                    >
                        <h3 className="text-xl font-semibold">{ product.productName }</h3>
                        <p className='font-serif'>${ product.productPrice }</p>
                        <div className="mt-5 flex justify-center gap-4">
                            <Link to={`/product/details/${product._id}`}>
                                <Button>View</Button>
                            </Link>
                            <EditButton>Edit</EditButton>
                            <DeleteButton onClick={() => deleteHandler(product._id)}>Delete</DeleteButton>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default DisplayProducts;
