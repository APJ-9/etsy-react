import React from 'react'
import './EverydayInspiration.css'
import Heart from './Heart'
import VideoPlayer from './VideoPlayer'

function EverydayInspiration({data}) {
    console.log(data)
    console.log(data.videoURL)
  return (
    <div className='everyday-inspiration-container'>
        <div className="ei-section1">
            <div className="heading">
                <p className='small-text'>{data.smallText}</p>
                <p className="main-title ">{data.title}</p>
                <div className="sub-title"><p>{data.subTitle}</p> <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24"><path fill="#222222" d="M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z"/></svg></div>
            </div>
            {
                data.elements.map((card,idx)=>
                <div className="card">
                    <VideoPlayer card={card}/>
                </div>
                )
            }
 

        </div>
        <div className="ei-section2">
            <VideoPlayer card={data} />
            <Heart/>
        </div>
    </div>
  )
}

export default EverydayInspiration