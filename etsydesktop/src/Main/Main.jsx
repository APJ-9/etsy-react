import React from 'react'
import data from '../dataBase.json'
import Discover from './Discover'
import DiwaliShop from './DiwaliShop'

const DB = data


function Main() {
    // console.log(DB)
  return (
    <div className='main-section'>
        <Discover data={DB.discover}/>
        <DiwaliShop data={DB.diwaliShop}/>

    </div>
  )
}

export default Main