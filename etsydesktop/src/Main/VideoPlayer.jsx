import React, { useState } from 'react'
import Heart from './Heart'
import ReactPlayer from 'react-player'


function VideoPlayer({card}) {
    const [videoState,setVideoState] = useState(false)
    const handleVideoPlay=()=>{
     setVideoState(true)
    }
    const handleVideoStop =() =>{
      setVideoState(false)
    }
  return (
    <div className='vi-container' onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoStop}>
                  <Heart></Heart>
                  {  
                   card.videoURL ? 
                    // <div className="vi-container">
                        <> 
                          <ReactPlayer width='100%' height='100%' url={card.videoURL} playing={videoState} ></ReactPlayer>
                          <div className="play-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>
                          </div>
                        </>
                    // </div> 
                    :
                    //  <div className="vi-container">
                        <img className='diwali-image' src={card.imgURL}/>
                    // </div>
                  } 
                  {
                    card.price && <div className="price">
                                    ₹&nbsp;{card.price}
                                  </div>
                  }
                  
                </div>
  )
}

export default VideoPlayer