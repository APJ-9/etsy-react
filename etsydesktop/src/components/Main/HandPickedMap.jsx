import React from 'react'
import Heart from './Heart'

function HandPickedMap({data}) {
    // console.log(data.obj)
    const DB = data.obj 
  return (
    <div className='image-container'>
        {
            DB.map((card, idx) =>
                <div key={idx} className={`card card-${idx+1}`}>
                    {card.imgURL ?  <img src={card.imgURL} alt="" />  : null}
                    {
                        card.newPrice ? 
                            <div className="price">
                                <p className='new-price'>₹&nbsp;
                                    {card.newPrice}
                                </p>
                                <p className='old-price'>₹&nbsp;
                                    {card.oldPrice}
                                </p>
                            </div>
                            :
                            <div className='price'>
                                <p className='new-price'>₹&nbsp;
                                    {card.oldPrice}
                                </p>
                            </div>
                    }
                    <Heart/>
                </div>
            )
        }
    </div>
  )
}

export default HandPickedMap