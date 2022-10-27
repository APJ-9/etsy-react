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

export const ArrowTextCard = ({ title }) => {
    return (
        <div className='title-container arrow-container'>
            <h1>{title}</h1>
            <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24"><path fill="#222222" d="M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z" /></svg>
        </div>
    )
}

export const FreshCard = ({ title, subTitle, imgURL, description }) => {
    return (
        <div className='fresh-card-container'>
            <div className="fresh-img-container">
                <img src={imgURL} alt="" />
            </div>
            <div className="fresh-text-container">
                <p className='fresh-card-sub-title'>{subTitle}</p>
                <h1 className='fresh-card-title'>{title}</h1>
                <p className='fresh-description'>{description}</p>
            </div>
        </div>
    )
}