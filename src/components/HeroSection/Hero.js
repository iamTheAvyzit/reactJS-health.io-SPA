import React from 'react'
import { HeroImg } from '../imports'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='navbar-container'>
                <p className='logo'>Health.io</p>
                <div className='nav-items'>
                    <a href='#plans'>Plans</a>
                    <a href='#faqs'>FAQs</a>
                    <a href='#waitlist'>Join the waitlist</a>
                    <button>Login</button>
                </div>
            </div>
            <div className='hero-container-main'>
                <div className='hero-group'>
                    <p className='head'>One insurance plan for your family.</p>
                    <p className='desc'>Up to $<b>100K</b> worth of services and medical facilities, all at your doorstep.</p>
                </div>
                <img src={HeroImg}/>
            </div>
        </div>
    )
}

export default Hero
