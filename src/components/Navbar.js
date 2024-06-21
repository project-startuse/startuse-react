import React from 'react';
import startuseLogo from '../resources/startuse-logo-temp-png.png';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <span>
                <img src={startuseLogo} alt='logo' width={75} />
            </span>
            <span className='btn-grp'>
                <span><Link to={'/login'} >Login</Link></span>
                <span><Link to={'/register'} >Register</Link></span>
            </span>
        </div>
    );
}

export default Navbar;
