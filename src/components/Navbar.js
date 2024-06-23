import React, { useState } from 'react';
import startuseLogo from '../resources/startuse-logo-temp-png.png';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [accountHover, setAccountHover] = useState(false);

    const handleAccountHover = () => {
        setAccountHover(true);
    }
    
    const handleAccountUnHover = () => {
        setAccountHover(false);
    }

    return (
        <div className='navbar'>
            <span onClick={() => navigate('/')}>
                <img src={startuseLogo} alt='logo' width={50} />
            </span>
            {
                !localStorage.getItem('user') ?
                    <span className='btn-grp'>
                        <span><Link to={'/login'} >Login</Link></span>
                        <span><Link to={'/register/customer'} >Register</Link></span>
                    </span>
                :
                    <span className="btn-grp"
                        onMouseEnter={handleAccountHover}
                        onMouseLeave={handleAccountUnHover}
                    >
                        <span>
                            <h2>{'Saandeep'}</h2>
                        </span>
                        {
                            accountHover ?
                            <span>
                                <Link to={'/feed'}>Feed</Link>
                                <Link to={'/profile'}>Profile</Link>
                                <Link to={'/'} onClick={() => localStorage.removeItem('user')}>Logout</Link>
                            </span>
                            : <></>
                        }
                    </span>
            }
        </div>
    );
}

export default Navbar;
