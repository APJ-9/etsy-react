import React from 'react'
import './Discover.css'


function Discover(props) {
    console.log(props.discover)
    const discover = props.discover
    return (
        <div className='discover-section'>
            <div className="discover-section-background"></div>
            <p className='heading'>{discover.title}</p>
            <div className="card-container">
            {
                discover.elemnts.map((element,idx)=>
                    <div key={idx} className="card">
                        <img src={element.imgURL} alt="broken url" />
                        <p className='title'>{element.title}</p>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Discover