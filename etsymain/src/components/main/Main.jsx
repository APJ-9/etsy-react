import React from 'react'
import './Main.css'
import Discover from './discover/Discover'
import Diwali from './diwali/Diwali'

function Main() {
    return (
        <div className='main'>
            <Discover />
            <Diwali />
        </div>
    )
}

export default Main