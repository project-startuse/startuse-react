import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import '../styles/Login.css';
import '../styles/Register.css';
import CustomerForm from './CustomerForm';
import CompanyForm from './CompanyForm';
import { Link, useParams } from 'react-router-dom';
import loginRegisterImg from '../resources/login-register-img.svg';
import RegisterFinish from './RegisterFinish';

function Register() {
    const [content, setContent] = useState({});
    const [address, setAddress] = useState({});
    const [isFinalPage, setIsFinalPage] = useState(false);

    const {type} = useParams();

    const beforeTabChange = () => {
        setIsFinalPage(false);
        setContent({});
    }

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
        console.log(content);
    }

    const handleSubmit = async () => {
        let res;
        if(type === 'customer')
            res = await axios.post('/customers/register', content);
        else
            res = await axios.post('/companies/register', content);
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log(res.data);
    }

    useEffect(() => {
    }, []);

    return (
        <div className='register'>
            <span className='form'>
                <div className='header'>
                    <h1>Register as</h1>
                    <span className='nav'>
                        <Link to={'/register/customer'} style={type === 'customer' ? {backgroundColor:  "#BDD9BF", color: '#2E4052', fontWeight: 'bold'} : {}} onClick={beforeTabChange}>Customer</Link>
                        <Link to={'/register/company'} style={type === 'company' ? {backgroundColor:  "#BDD9BF", color: '#2E4052', fontWeight: 'bold'} : {}} onClick={beforeTabChange}>Company</Link>
                    </span>
                </div>


                {
                    isFinalPage ?
                    <div className='page'>
                        <RegisterFinish handleAddressChange={handleAddressChange} address={address}/>
                        <>
                            <button className='back' onClick={() => setIsFinalPage(false)}>Back</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </>
                    </div>
                    :
                    <div className='page'>
                        {
                            type === 'customer' ?
                                <CustomerForm handleChange={handleChange} content={content} />
                            :
                                <CompanyForm handleChange={handleChange} content={content} />
                        }
                        
                        <input type='email' name='email' placeholder='email' value={content.email} onChange={(e) => handleChange(e)} />
                        <input type='password' name='password' placeholder='password' value={content.password} onChange={(e) => handleChange(e)} />
                        <input type='text' name='mobile' placeholder='mobile' value={content.mobile} onChange={(e) => handleChange(e)} />

                        <>
                            <span></span>
                            <button className='next' onClick={() => setIsFinalPage(true)}>Next</button>
                        </>
                    </div>
                }
            </span>
            <span className='login-register-img'>
                <img src={loginRegisterImg} alt='login-register' width={500} />
            </span>
        </div>
    );
}

export default Register;
