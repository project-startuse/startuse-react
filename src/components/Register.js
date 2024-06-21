import axios from '../utils/axios';
import React, { useState } from 'react';
import '../styles/Login.css';
import CustomerForm from './CustomerForm';
import CompanyForm from './CompanyForm';

function Register({type}) {
    const [content, setContent] = useState({});
    const [address, setAddress] = useState({});

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setContent({...content, [key]: value});
    }

    const handleAddressChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setAddress({...address, [key]: value});
        setContent({...content, address: address});
    }

    const handleSubmit = async () => {
        const res = await axios.post('/customers/register', content);
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log(res.data);
    }

    return (
        <div className='register'>
            <div className='form'>
                {
                    type === 'customer' ?
                        <CustomerForm handleChange={handleChange} />
                    :
                        <CompanyForm handleChange={handleChange} />
                }
                
                <input type='password' name='password' onChange={(e) => handleChange(e)} />
                <input type='text' name='mobile' onChange={(e) => handleChange(e)} />
                <div className='address'>
                    <input type='text' name='door' onChange={(e) => handleAddressChange(e)} />
                    <input type='text' name='street' onChange={(e) => handleAddressChange(e)} />
                    <input type='text' name='city' onChange={(e) => handleAddressChange(e)} />
                    <input type='text' name='state' onChange={(e) => handleAddressChange(e)} />
                    <input type='text' name='country' onChange={(e) => handleAddressChange(e)} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Register;
