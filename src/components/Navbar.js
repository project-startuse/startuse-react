import React from 'react';
import startuseLogo from '../resources/startuse-logo-temp-png.png';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <span onClick={() => navigate('/')}>
                <img src={startuseLogo} alt='logo' width={50} />
            </span>
            <span className='btn-grp'>
                <span><Link to={'/login'} >Login</Link></span>
                <span><Link to={'/register'} >Register</Link></span>
            </span>
        </div>
    );
}

export default Navbar;
