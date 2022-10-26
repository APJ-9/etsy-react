import React from 'react'
import './Card.css'
import HeartIcon from './HeartIcon'

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

export const ImageCard = ({ imgURL, id }) => {
    return (
        <div className={`vi-card card-${id + 1}`}>
            <div className="img-container">
                <img src={imgURL} alt="" />
            </div>
            <HeartIcon />
        </div>
    )
}

export const VideoCard = ({ videoURL, id }) => {
    return (
        <div className={`vi-card card-${id + 1}`}>
            <div className="video-container">
                <video role='img' muted>
                    <source src={videoURL} type="video/mp4" />
                </video>
            </div>
            <HeartIcon />
        </div>
    )
}



export const TextCard = ({ data }) => {
    return (
        <>
            {
                data.map((card, idx) =>
                    <div key={idx} className="card">
                        {card.imgURL ? <img src={card.imgURL} alt="" /> : ""}
                        <div className="title">
                            {
                                card.title && <p className='main-title'>{card.title}</p>}
                            {
                                card.subTitle && <p className="sub-title">{card.subTitle}</p>
                            }
                            {
                                card.paragraph && <p className='paragraph'>{card.paragraph}</p>
                            }
                        </div>

                    </div>
                )
            }
        </>
    )
}