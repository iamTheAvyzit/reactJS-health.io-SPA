import React from 'react'
import { BenImg } from '../imports'
import './Benefits.css'

const Benefits = () => {
    return (
            <div className='benefits-group'>
                <div className='benefits-drop'>
                    <h4>Benefits of joining Health.io</h4>
                    <p>UNLIMITED APPOINTMENT FOR CONSULTATIONS ▼</p>
                    <div className='active'>You can book unlimited appointment for consultations,  in any of our partner clinics of your choice.</div>
                    <p>SHELTER PROTECTION FROM FAKE TREATMENTS</p>
                    <p>ALL COST COVER VIA INSURANCE</p>
                    <p>FIRST APPOINTMENT FREE</p>
                    <p>COVID PROTECTION FOR ALL</p>
                    <p>CUSTOM PACKAGES TO CHOOSE FROM</p>
                </div>
                <img src={BenImg}/>
            </div>
    )
}

export default Benefits
