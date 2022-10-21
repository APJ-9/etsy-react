import React from 'react'
import './DiwaliShop.css'

function DiwaliShop({data}) {
    const DB = data
    console.log(DB)
  return (
    <div className='diwali-shop-container'>
        <div className="head-elements">
            <p className="small-text">{DB.smallText}</p>
            <p className="main-title">{DB.title}</p>
            <p className="sub-title">{DB.subTitle}</p>
        </div>
        {
            DB.elements.map((card,idx)=>
            
                <div className="card" key={idx}>
                  {  
                   card.type === 'video' ? 
                    <div className="vi-container">
                         <video className='diwali-video' src={card.videoURL}/>
                    </div> :
                     <div className="vi-container">
                        <img className='diwali-image' src={card.imgURL}/>
                    </div>
                  } 
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