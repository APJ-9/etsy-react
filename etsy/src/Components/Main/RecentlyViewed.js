import React from 'react'
import MapImges from './MapImges'

function RecentlyViewed(props) {
    const recentlyViewed = props.recentlyViewed
    console.log(recentlyViewed)
    return (
        <div className='recently-viewed'>
            <p className="title">{recentlyViewed.title}</p>
            <p className="sub-title">{recentlyViewed.subTitle}</p>
            <div className="recently-viewed-container">
                <MapImges data={recentlyViewed.elements}></MapImges>
            </div>
        </div>
    )
}

export default RecentlyViewed