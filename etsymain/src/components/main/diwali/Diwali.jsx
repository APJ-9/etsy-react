import React from 'react'
import './Diwali.css'
import dataBase from '../../../dataBase.json'
import { ImageCard, VideoCard } from '../Card'

function Diwali() {
    const data = dataBase.diwaliShop
    console.log(data)
    return (
        <div className='diwali'>
            <div className="diwali-mobile">
                <p>{data.smallText}</p>
                <h1>{data.title}</h1>
                <div className="diwali-mobile-container">
                    {
                        data.elements.map((item, idx) =>
                        (
                            item.imgURL ? <ImageCard id={idx} imgURL={item.imgURL} /> : <VideoCard id={idx} videoURL={item.videoURL} />
                        ))
                    }
                </div>
            </div>
            <div className="diwali-tab-desktop">
                <div className="title-area">
                    <p>{data.smallText}</p>
                    <h1>{data.title}</h1>
                    <div className="sub-heading arrow-container">
                        <h3>{data.subTitle}</h3>
                        <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24"><path fill="#222222" d="M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z" /></svg>
                    </div>
                </div>
                {
                    data.elements.map((item, idx) =>
                    (
                        item.imgURL ? <ImageCard id={idx} imgURL={item.imgURL} /> : <VideoCard id={idx} videoURL={item.videoURL} />
                    ))
                }
                <div className="description">
                    <p>{data.paragraph} </p>
                </div>
            </div>
        </div>
    )
}

export default Diwali