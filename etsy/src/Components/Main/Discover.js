import React from 'react'
import './Discover.css'
import MapCard from './MapCard'


function Discover(props) {
    console.log(props.discover)
    const discover = props.discover
    return (
        <div className='discover-section'>
            <div className="discover-section-background"></div>
            <p className='heading'>{discover.title}</p>
            <div className="card-container">
                <MapCard cards={discover.elemnts}></MapCard>
            </div>
        </div>
    )
}

export default Discover