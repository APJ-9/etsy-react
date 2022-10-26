import React from 'react'
import './Card.css'

export const CircularCard = ({ card }) => {
    return (
        <div className='circular-card'>
            <div className="img-container">
                <img src={card.imgURL} alt="" />
            </div>
            <h1>{card.title}</h1>
        </div>
    )
}
