import React from 'react'
import './EmailSubscribe.css'

function EmailSubscribe() {
    return (
        <div className='email-sub'>
            <div className="email-sub-container">
                <p>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
                <div className="email-cont">
                    <input type="email" placeholder='Enter your email' />
                    <button className='sub'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default EmailSubscribe