import React from 'react'
import './DiwaliShop.css'
import VideoPlayer from './VideoPlayer'

function DiwaliShop({data}) {
    const DB = data
    // console.log(DB)

  return (
    <div className='diwali-shop-container'>
      
        <div className="head-elements">
            <p className="small-text">{DB.smallText}</p>
            <p className="main-title">{DB.title}</p>
           <div className="sub-title"><p>{DB.subTitle}</p> <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24"><path fill="#222222" d="M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z"/></svg></div>
        </div>
        {
            DB.elements.map((card,idx)=>
                <div key={idx} className={`card card-${idx}`}>
                  <VideoPlayer card={card}></VideoPlayer>
                  {console.log(card)}
                </div>
            )
        }
        <div className="text-area">
            <p>{DB.paragraph}</p>
        </div>
    </div>
  )
}

export default DiwaliShop