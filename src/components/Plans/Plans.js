import React from 'react'
import { Tick, Cross, FAQ } from '../imports'
import { Card } from './Card'
import './Plans.css'

const pricingData = [
    {
        type: 'Lite',
        desc: 'Covers the necessities & regular doctor consultations',
        price: '$300',
        t1: 'Shelter protection cover',
        t2: 'Diagnostics and testing',
        t3: 'Covid protection for all',
        btext: 'Get Lite'
    },
    {
        type: 'Premium',
        desc: 'One full fletched plan that covers everything',
        price: '$999',
        t1: 'Cost cover upto $200K',
        t2: 'All emergency care included',
        t3: 'No cap on senior citizens',
        btext: 'Get Premium'
    },
    {
        type: 'Custom',
        desc: 'Customize the plans as per your needs',
        // price: '',
        t1: 'Great Discounts',
        t2: 'Larger Groups',
        t3: 'Personalised Experience',
        btext: 'Contact Us'
    }
]

const tableData = [
    {
        text: 'Maximum amount covered',
        p1: '$100K',
        p2: '$80K',
        p3: '$50K',
        p4: '$20K'
    },
    {
        text: 'Cost of 12 month membership',
        p1: '$999',
        p2: '$1240',
        p3: '$1100',
        p4: '$1500'
    },
    {
        text: 'Waiting period',
        p1: '0',
        p2: '30',
        p3: '30-90',
        p4: '90'
    },
    {
        text: 'Consultations',
        p1: {Tick},
        p2: {Cross},
        p3: {Cross},
        p4: {Tick}
    },
    {
        text: 'Diagnostics',
        p1: {Tick},
        p2: {Cross},
        p3: {Cross},
        p4: {Cross}
    },
    {
        text: 'Emergency care',
        p1: {Tick},
        p2: {Cross},
        p3: {Cross},
        p4: {Cross}
    },
    {
        text: 'Covid care',
        p1: {Tick},
        p2: {Cross},
        p3: {Cross},
        p4: {Tick}
    }
]

export const Plans = () => {
    return (
        <div className='plans' id='plans'>
            <p className='plans-head'>Health, meet savings!</p>
            <p className='plans-desc'>We help you choose a plan that is right for you. Save more with better plans.</p>
            <div className='plans-card'>
            {pricingData.map((item, index) => (
                    <Card type={item.type} desc= {item.desc} price={item.price} t1={item.t1} t2={item.t2} t3={item.t3} btext={item.btext} key={item.title + index} />
                ))}
            </div>
            <p className='plans-mid-head'>How does Health.io compare to others?</p>
            <table>
                <tbody>
                    <tr>
                        <th>&nbsp;</th>
                        <th className='boxed'>Health.io</th>
                        <th>BUPA</th>
                        <th>Apollo Cover</th>
                        <th>LBC Cover</th>
                    </tr>
                    {tableData.map((item, index) => (
                        (typeof(item.p1)=='object') ?
                        (
                            <tr>
                                <td className='to-left'>{item.text}</td>
                                <td className='boxed'><img src={Tick}/></td>
                                <td><img src={Cross}/></td>
                                <td><img src={Cross}/></td>
                                <td><img src={Cross}/></td>
                            </tr>
                        ) 
                        :
                        (
                            <tr>
                                <td className='to-left'>{item.text}</td>
                                <td className='boxed'>{item.p1}</td>
                                <td>{item.p2}</td>
                                <td>{item.p3}</td>
                                <td>{item.p4}</td>
                        </tr>
                        )
                    ))}
                </tbody>
            </table>
            <img id='faqs' src={FAQ}/>
        </div>
    )
}