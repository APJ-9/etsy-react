import React from 'react'
import './Discover.css'
import data from '../../dataBase.json'

function Discover() {
    console.log(data.discover)
    const discover = data.discover
    return (
        <div className='discover-section'>
            <div className="discover-section-background"></div>
            <p className='heading'>{discover.title}</p>
            <div className="card-container">
            {
                discover.elemnts.map((element)=>
                    <div className="card">
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