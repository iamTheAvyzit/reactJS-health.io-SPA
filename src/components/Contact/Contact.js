import React from 'react'
import { fbFill, igFill, lastHand, twFill } from '../imports'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-top'>
                <div className='contact-top-left'>
                    <p className='head'>Health.io</p>
                    <p className='items'>Copyright &copy; 2022 ★ All Rights Reserved</p>
                </div>
                <div className='contact-top-mid'>
                    <p className='head'>Health.io</p>
                    <p className='items'>Terms and Conditions</p>
                    <p className='items'>Privacy Policy</p>
                    <p className='items'>Contact Us</p>
                </div>
                <div className='contact-top-right'>
                    <p className='head'>About</p>
                    <p className='items'>Our Story</p>
                    <p className='items'>Benefits</p>
                    <p className='items'>Team</p>
                    <p className='items'>Careers</p>
                </div>
            </div>
            <div className='contact-bottom'>
                <img src={lastHand}/>
                <div className='contact-bottom-icons'>
                    <img src={fbFill}/>
                    <img src={twFill}/>
                    <img src={igFill}/>
                </div>
            </div>
        </div>
    )
}
