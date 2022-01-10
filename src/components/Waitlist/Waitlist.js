import React from 'react'
import { fbOut, gpOut, JoinImg, twOut } from '../imports'
import './Waitlist.css'

export const Waitlist = () => {
    return (
        <div className='waitlist'>
            <img src={JoinImg}/>
            <div className='waitlist-group' id='waitlist'>
                <p className='head'>Join the waitlist</p>
                <p className='desc'>Get a free month of subscription when you start</p>
                <p className='caps'>FULL NAME</p>
                <input placeholder='John Smith'/>
                <p className='caps'>EMAIL</p>
                <input placeholder='johnsmith@example.com'/>
                <div className='waitlist-icons'>
                    <button>Join Now</button>
                    <p>OR</p>
                    <img src={fbOut}/>
                    <img src={twOut}/>
                    <img src={gpOut}/>
                </div>
                <p className='referral-text'>You with get a referral ID when you join our waitlist. We will provide with a unique code for you and your friends when you login.</p>
            </div>
        </div>
    )
}
