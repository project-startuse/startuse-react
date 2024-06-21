import React from 'react';
import heroImg from '../resources/hero-img.svg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <span className='hero-section'>
                <span>
                    <h1>We make BUSINESSes reach PEOPLE</h1>
                    <h1>We help you SOLVE your PROBLEMS</h1>
                </span>
                <span className='explore'>
                    <Link to={'/feed'}>Explore {' ->'}</Link>
                </span>
            </span>
            <span className='hero-image'>
                <img src={heroImg} alt='logo' height={500} />
            </span>
        </div>
    );
}

export default Home;
