import React from 'react'

function MapCard(props) {

    const cards = props.cards
    console.log(cards)
  return (
    <>
    {
        cards.map((card,idx)=>
        <div key={idx} className="card">
            {   card.imgURL ? <img src={card.imgURL} alt="" /> : "" }
            {   card.title ? <div className="title"> <p className='main-title'>{card.title}</p> {   card.subTitle ? <p className="sub-title">{card.subTitle}</p>:"" } </div>:""   }
            
        </div>
        )
    }
    </>
  )
}

export default MapCard