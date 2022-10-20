import React from 'react'
import './EmailSubscribe.css'

function EmailSubscribe() {
    return (
        <div className='email-sub'>
            <div className="email-sub-container">
                <p>Get unique gift ideas and so much delivered right to your inbox.</p>
                <div className="email-cont">
                    <input type="email" placeholder='Enter your email' />
                    <button className='sub'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default EmailSubscribe