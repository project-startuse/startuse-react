import React from 'react';
import heroImg from '../resources/hero-img.svg';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <span className='info'>
                <h1>We make BUSINESSES reach PEOPLE</h1>
                <h1>We help you SOLVE your PROBLEMS</h1>
            </span>
            <span className='hero-image'>
                <img src={heroImg} alt='logo' height={500} />
            </span>
        </div>
    );
}

export default Home;
