import React from 'react'
import { useState } from 'react'
import Button from './Button'
import './FooterAboutEtsy.css'

function FooterAboutEtsy() {
    const [helpState, setHelpState] = useState(true)
    const clickHandle = () => {
        setHelpState(current => !current)
    }
    const shop = {
        title: "Shop",
        list: ["Gift Card", "Sitemap", "Etsy blog", "Etsy United Kingdom", "Etsy Germany", "Etsy Canada"]
    }
    const sell = {
        title: "Sell",
        list: ["Sell on Etsy", "Teams", "Forums", "Affiliates"]
    }
    const about = {
        title: "About",
        list: ["Etsy,Inc.", "Policies", "Investors", "Careers", "Press", "Impact", "Legal imprint"]
    }
    return (
        <div className='footer-main-section'>
            <div className="footer-main-section-background"></div>
            <div className="list-item">
                <>
                    <Button title={shop.title} list={shop.list} show={false} />
                </>
                <>
                    <Button title={sell.title} list={sell.list} show={false} />
                </>
                <>
                    <Button title={about.title} list={about.list} show={false} />
                </>
                <div className='list'>
                    <div className={helpState ? "heading-btn active" : "heading-btn"} onClick={clickHandle}>
                        <h1>Help</h1>
                        <svg className='arrow-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#ffffff" d="M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z"></path></svg>
                    </div>
                    {
                        helpState && <div className="footer-main-items mobile-footer">
                            <p>Help Centre</p>
                            <p>Privacy setting</p>
                        </div>
                    }
                    <div className="heading-btn tabdesk-footer">
                        <h1>Help</h1>
                    </div>
                    <div className="footer-main-items tabdesk-footer">
                        <p>Help Centre</p>
                        <p>Privacy setting</p>
                    </div>
                    <div className="etsy-icons">
                        <div className="download-etsy">
                            <span className='empty'>empty</span>
                            <div className="download-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 2H6C3.8 2 2 3.8 2 6v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-1.3 16s-2.3-.1-3.3-.1H9l-2.6.1v-.7l.9-.2c.6-.1.7-.2.7-.7 0 0 .1-1.6.1-4.3 0-2.7-.1-4.4-.1-4.4 0-.5-.2-.6-.8-.7l-.8-.2v-.7l2.6.1h4.9c1 0 2.6-.2 2.6-.2s-.1 1-.1 3.4h-.7l-.2-.8c-.3-1.1-.7-1.6-1.4-1.6h-3.8c-.3 0-.3 0-.3.2v4.4s1.6 0 2.4-.1c.4.1.9-.3.9-.7v-.1l.2-1h.7l-.1 2.1.1 2.2h-.7l-.2-.8c-.1-.5-.5-.8-.9-.8-.6-.1-2.4-.1-2.4-.1V16c0 .7.4 1 1.2 1h2.6c.9.1 1.8-.4 2.1-1.2l.7-1.4h.6c-.1.4-.4 3-.5 3.6z"></path></svg>
                                <span>Download the Etsy App</span>
                            </div>
                        </div>
                        <div className="social-media-icons">
                            <div className="sm-icon-container">
                                <svg className='insta sm-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,5.447c2.136,0,2.389,0.008,3.233,0.047c0.78,0.036,1.204,0.166,1.485,0.275c0.373,0.145,0.64,0.318,0.92,0.598 c0.28,0.28,0.453,0.546,0.598,0.92c0.11,0.282,0.24,0.706,0.275,1.485c0.038,0.844,0.047,1.097,0.047,3.233 s-0.008,2.389-0.047,3.233c-0.036,0.78-0.166,1.204-0.275,1.485c-0.145,0.373-0.318,0.64-0.598,0.92 c-0.28,0.28-0.546,0.453-0.92,0.598c-0.282,0.11-0.706,0.24-1.485,0.275c-0.843,0.038-1.096,0.047-3.233,0.047 s-2.389-0.008-3.233-0.047c-0.78-0.036-1.204-0.166-1.485-0.275c-0.373-0.145-0.64-0.318-0.92-0.598 c-0.28-0.28-0.453-0.546-0.598-0.92c-0.11-0.282-0.24-0.706-0.275-1.485c-0.038-0.844-0.047-1.097-0.047-3.233 S5.45,9.616,5.488,8.773c0.036-0.78,0.166-1.204,0.275-1.485c0.145-0.373,0.318-0.64,0.598-0.92c0.28-0.28,0.546-0.453,0.92-0.598 c0.282-0.11,0.706-0.24,1.485-0.275C9.611,5.455,9.864,5.447,12,5.447 M12,4.005c-2.173,0-2.445,0.009-3.298,0.048 C7.85,4.092,7.269,4.227,6.76,4.425C6.234,4.63,5.787,4.903,5.343,5.348C4.898,5.793,4.624,6.239,4.42,6.765 c-0.198,0.509-0.333,1.09-0.372,1.942C4.009,9.56,4,9.833,4,12.005c0,2.173,0.009,2.445,0.048,3.298 c0.039,0.852,0.174,1.433,0.372,1.942c0.204,0.526,0.478,0.972,0.923,1.417c0.445,0.445,0.891,0.718,1.417,0.923 c0.509,0.198,1.09,0.333,1.942,0.372c0.853,0.039,1.126,0.048,3.298,0.048s2.445-0.009,3.298-0.048 c0.852-0.039,1.433-0.174,1.942-0.372c0.526-0.204,0.972-0.478,1.417-0.923c0.445-0.445,0.718-0.891,0.923-1.417 c0.198-0.509,0.333-1.09,0.372-1.942C19.991,14.45,20,14.178,20,12.005s-0.009-2.445-0.048-3.298 c-0.039-0.852-0.174-1.433-0.372-1.942c-0.204-0.526-0.478-0.972-0.923-1.417c-0.445-0.445-0.891-0.718-1.417-0.923 c-0.509-0.198-1.09-0.333-1.942-0.372C14.445,4.014,14.173,4.005,12,4.005L12,4.005z"></path><path d="M12,7.897c-2.269,0-4.108,1.839-4.108,4.108S9.731,16.113,12,16.113s4.108-1.839,4.108-4.108S14.269,7.897,12,7.897z  M12,14.672c-1.473,0-2.667-1.194-2.667-2.667S10.527,9.339,12,9.339s2.667,1.194,2.667,2.667S13.473,14.672,12,14.672z"></path><circle cx="16.27" cy="7.735" r="0.96"></circle></svg>
                            </div>
                            <div className="sm-icon-container">
                                <svg className='fb sm-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,5V19a1.007,1.007,0,0,1-1,1H15V13.776h2l0.336-2.3H15V9.659a0.912,0.912,0,0,1,1-1.031h1.5V6.55a11.284,11.284,0,0,0-1.641-.109c-2.2,0-3.3,1.219-3.3,3.039v1.992h-2v2.3h2V20H5a1.007,1.007,0,0,1-1-1V5A1.007,1.007,0,0,1,5,4H19A1.007,1.007,0,0,1,20,5Z"></path></svg>
                            </div>
                            <div className="sm-icon-container">
                                <svg className='pinterst sm-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3c-4.97 0-9 4.03-9 9 0 3.813 2.372 7.072 5.72 8.384-.08-.712-.15-1.807.03-2.585.164-.703 1.056-4.475 1.056-4.475s-.27-.54-.27-1.336c0-1.252.726-2.187 1.63-2.187.768 0 1.14.577 1.14 1.268 0 .773-.493 1.928-.746 2.998-.212.896.45 1.626 1.333 1.626 1.6 0 2.83-1.687 2.83-4.12 0-2.156-1.55-3.663-3.76-3.663-2.56 0-4.064 1.922-4.064 3.907 0 .773.297 1.603.67 2.054.073.09.083.168.06.26-.067.283-.22.895-.25 1.02-.038.165-.13.2-.3.12-1.124-.523-1.827-2.167-1.827-3.487 0-2.84 2.063-5.446 5.947-5.446 3.122 0 5.548 2.225 5.548 5.198 0 3.102-1.956 5.598-4.67 5.598-.912 0-1.77-.474-2.063-1.033l-.56 2.14c-.204.78-.753 1.76-1.12 2.358.842.26 1.737.402 2.665.402 4.97 0 9-4.03 9-9s-4.03-9-9-9"></path></svg>
                            </div>
                            <div className="sm-icon-container">
                                <svg className='twiter sm-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.3,8.559V9.007a9.666,9.666,0,0,1-9.729,9.737,9.614,9.614,0,0,1-5.256-1.394,5.367,5.367,0,0,0,.814.057,6.906,6.906,0,0,0,4.245-1.621,3.412,3.412,0,0,1-3.186-2.379,3.339,3.339,0,0,0,1.548-.058A3.419,3.419,0,0,1,3.988,9.993V9.952a3.427,3.427,0,0,0,1.548.424A3.407,3.407,0,0,1,4,7.54a3.261,3.261,0,0,1,.465-1.662A9.729,9.729,0,0,0,11.517,9.39a3.588,3.588,0,0,1-.073-0.79,3.408,3.408,0,0,1,3.414-3.414,3.542,3.542,0,0,1,2.518,1.075,6.837,6.837,0,0,0,2.159-.831,3.391,3.391,0,0,1-1.507,1.9A6.657,6.657,0,0,0,20,6.782,6.927,6.927,0,0,1,18.3,8.559Z"></path></svg>
                            </div>
                            <div className="sm-icon-container">
                                <svg className='youtube sm-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,12c0,5.664,0,5.664-8,5.664s-8,0-8-5.664,0-5.664,8-5.664S20,6.333,20,12Zm-5,0L10,9v6Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterAboutEtsy