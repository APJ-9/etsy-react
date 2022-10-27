import React from 'react'
import './Main.css'
import Discover from './discover/Discover'
import Diwali from './diwali/Diwali'
import ShopSelection from './shopSelection/ShopSelection'
import FreshBlog from './freshBlog/FreshBlog'

function Main() {
    return (
        <div className='main'>
            <Discover />
            <Diwali />
            <ShopSelection />
            <FreshBlog />
        </div>
    )
}

export default Main