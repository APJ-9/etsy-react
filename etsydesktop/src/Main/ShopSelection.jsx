import React from 'react'
import './ShopSelection.css'
import MapCard from './MapCard'


function ShopSelection({data}) {
    const title = data.title
    const elements = data.elements
    console.log(elements)
    return (
        <div className='shop-selection'>
            <div className="title-container">
                <p className="title-heading">{title}</p>
                
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24">
                    <path fill="#222222" d="M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z" />
                </svg>
            </div>
            <p className='sub-title'>{data.subTitle}</p>
            <div className="shop-cards">
                <MapCard data={elements}></MapCard>
            </div>
        </div>
    )
}

export default ShopSelection