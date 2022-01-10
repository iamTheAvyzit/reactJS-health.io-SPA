import React from 'react'
import { Tick } from '../imports'
import './Plans.css'

export const Card = ({type, desc, price, t1, t2, t3, btext}) => {
    return (
        <div className='container'>
            <article>{type}</article>
            <p className='container-desc'>{desc}</p>
            <article className='plan-price'>{price}<sub>/month</sub></article>
            <div className='plans-group'>
                <p><img src={Tick}/>&nbsp;{t1}</p>
                <p><img src={Tick}/>&nbsp;{t2}</p>
                <p><img src={Tick}/>&nbsp;{t3}</p>
            </div>
            <button>{btext}</button>
        </div>
    )
}
