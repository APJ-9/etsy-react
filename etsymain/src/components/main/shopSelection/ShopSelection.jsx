import React from 'react'
import './ShopSelection.css'
import { ArrowTextCard, ImageTextCard } from '../Card'
import dataBase from '../../../dataBase.json'


function ShopSelection() {
    const data = dataBase.shopOurSelection
    console.log(data)
    return (
        <div className='shop-selection'>
            <ArrowTextCard title={"Shop our selections"} />
            <p className='caption'>Curated collections hand-picked by Etsy editors</p>
            <div className="shop-selection-container">
                {
                    data.elements.map((item, idx) => (
                        <>
                            <ImageTextCard key={idx} title={item.title} imgURL={item.imgURL} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ShopSelection