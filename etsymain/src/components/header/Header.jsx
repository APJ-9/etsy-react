import React from 'react'
import './Header.css'
import Input from './Input'
// import List from './List'
import data from '../../dataBase.json'
import EtsyLogo from './EtsyLogo'
import MenuIcon from './MenuIcon'

function Header() {
    const DB = data.header
    console.log(DB)
    return (
        <div className='header'>
            <div className="header-top">
                <EtsyLogo />
                <div className="icons-and-btn">
                    <button className='sign-in' >Sign in</button>
                    <div className="svg-container-background">
                        <div className="svg-container">
                            <svg className='heart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>
                        </div>
                    </div>
                    <div className="svg-container-background">
                        <div className="svg-container">
                            <svg className='cart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M21 10a1 1 0 00-1-1h-3c.059-.682.287-4.44-1.611-6.555A4.363 4.363 0 0012 1a4.363 4.363 0 00-3.394 1.445C6.709 4.56 6.937 8.318 7 9H4a1 1 0 00-1 1c0 .752.008 7.413 1.12 9.478 1.416 2.622 5.92 3.474 7.88 3.474 2.12 0 6.61-1.024 7.888-3.492C20.992 17.326 21 10.74 21 10zm-5.307 7l.283-1.283.159-.717h2.651a25.487 25.487 0 01-.251 2h-2.842zM5.457 17c-.1-.586-.183-1.27-.248-2h2.656l.159.717L8.307 17h-2.85zm4.519-1.717L9.914 15h4.173l-.063.283c-.13.585-.258 1.162-.378 1.717h-3.292c-.119-.554-.247-1.13-.377-1.717h-.001zM9.479 13a39.761 39.761 0 01-.376-2H14.9c-.087.564-.22 1.256-.376 2H9.479zm9.446 0h-2.362c.152-.748.278-1.43.354-2h2.075a61.73 61.73 0 01-.067 2zM10.1 3.78A2.412 2.412 0 0112 3a2.412 2.412 0 011.9.78c1.205 1.338 1.2 4.145 1.1 5.113a.928.928 0 00.01.106H8.984a.923.923 0 00.01-.106c-.101-.968-.102-3.775 1.106-5.114zM7.083 11c.076.57.2 1.252.354 2H5.073a61.441 61.441 0 01-.066-2h2.076zm-.844 8h2.483c.108.562.191 1.061.237 1.457A6.514 6.514 0 016.239 19zm4.756 1.885A13.506 13.506 0 0010.756 19h2.489c-.123.62-.203 1.25-.239 1.881-.334.044-.67.068-1.006.071a8.66 8.66 0 01-1.005-.067zm4.049-.445c.046-.394.129-.886.235-1.44h2.489a6.655 6.655 0 01-2.724 1.44z"></path>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
            <div className="header-bottom">
                <MenuIcon />
                <Input />
            </div>

        </div>
    )
}

export default Header