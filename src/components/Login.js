import React, { useEffect, useState } from 'react';
import '../styles/Login.css';
import axios from '../utils/axios';
import loginRegisterImg from '../resources/login-register-img.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [content, setContent] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setContent({...content, [key]: value});
    };

    const handleSubmit = async () => {
        const res = await axios.post('customers/login', content);
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log(res.data);
        navigate('/');
    };

    useEffect(() => {
        if(localStorage.getItem('user')) navigate('/');
    }, []);

    return (
        <div className='login'>
            <span className='form'>
                <h1>Login</h1>
                <input type='email' name='email' placeholder='email' onChange={(e) => handleChange(e)}/>
                <input type='password' name='password' placeholder='password' onChange={(e) => handleChange(e)} />
                <button onClick={handleSubmit}>Submit</button>
            </span>
            <span className='login-register-img'>
                <img src={loginRegisterImg} alt='login-register' height={400} />
            </span>
        </div>
    );
}

export default Login;
