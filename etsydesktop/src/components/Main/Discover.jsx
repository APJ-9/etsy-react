import React from 'react'

import MapCard from './MapCard'
import './Discover.css'



function Discover({data}) {
  const DB = data
    // console.log(DB)
  return (
    <div className='discover-section'>
        <div className="background"></div>
        <p className="heading">{DB.title}</p>
        <div className="card-container">
            <MapCard data={DB.elemnts} />
        </div>
    </div>
  )
}

export default Discover