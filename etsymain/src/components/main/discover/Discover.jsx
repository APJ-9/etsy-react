import React from 'react'
import './Discover.css'
import dataBase from '../../../dataBase.json'
import { CircularCard } from '../Card'

function Discover() {
    const data = dataBase.discover
    console.log(data)
    return (
        <div className='discover'>
            <div className="discover-background"></div>
            <h2>{data.title}</h2>
            <div className="discover-card-container">
                {
                    data.elemnts.map((card) => (
                        <CircularCard card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default Discover