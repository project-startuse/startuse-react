import React, { useState } from 'react';
import '../styles/Login.css';
import axios from '../utils/axios';

function Login() {
    const [content, setContent] = useState({});

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setContent({...content, [key]: value});
    };

    const handleSubmit = async () => {
        const res = await axios.post('customers/login', content);
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log(res.data);
    };

    return (
        <div className='login'>
            <div className='form'>
                <input type='email' name='email' placeholder='email' onChange={(e) => handleChange(e)}/>
                <input type='password' name='password' placeholder='password' onChange={(e) => handleChange(e)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Login;
