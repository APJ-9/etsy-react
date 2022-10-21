import React from 'react'
import data from '../dataBase.json'
import Discover from './Discover'
import DiwaliShop from './DiwaliShop'
import HandPickedItem from './HandPickedItem'

const DB = data


function Main() {
    // console.log(DB)
  return (
    <div className='main-section'>
        <Discover data={DB.discover}/>
        <DiwaliShop data={DB.diwaliShop}/>
        <HandPickedItem data={DB.handPickedItem}/>

    </div>
  )
}

export default Main