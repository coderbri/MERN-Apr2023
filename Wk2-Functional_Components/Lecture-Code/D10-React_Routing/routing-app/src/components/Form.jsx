import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    
    const navigate = useNavigate();
    
    const [ color, setColor ] = useState('');
    const [ number, setNumber ] = useState(0);
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        const currentColor = color;
        const currentNumber = number;
        
        setColor('');
        setNumber(0);
        
        const cleanColor = currentColor.replace('#', '')
        navigate(`/render/${cleanColor}/${currentNumber}`);
    }
    
    return (
        <div className='my-3'>
            <form onSubmit={ submitHandler } className='col-11 col-md-6 mx-auto'>
                
                <div className="mb-3 row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-3 col-form-label fw-semibold">Color:</label>
                    <div className="col-9">
                        <input type="color" onChange={(e) => setColor(e.target.value)} value={ color } name="color" className="form-control form-control-color" />
                    </div>
                </div>
                
                <div className="row bg-secondary-subtle py-3 px-2 rounded">
                    <label className="col-3 col-form-label fw-semibold">Number:</label>
                    <div className="col-9">
                        <input type="number" onChange={(e) => setNumber(e.target.value)} value={ number } name="number" className="form-control" />
                    </div>
                </div>
                
                <div className="my-2 d-flex justify-content-center">
                    <input type="submit" value="Render" className='btn btn-dark' />
                </div>
            </form>
        </div>
    );
}

export default Form;
