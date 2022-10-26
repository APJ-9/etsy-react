import React, { useState } from 'react'
function MapCard(props) {
  
  const [disp,setDisp] = useState(false)
  const cards = props.cards
  const clickHanadle = () =>{
    setDisp(disp=> !disp)
  }
  // console.log(cards)
  return (
    <>
      {
        cards.map((card, idx) =>
          <div key={idx} className="card">
            {card.imgURL ?  <img onClick={clickHanadle} src={card.imgURL} alt="" />  : ""}
            {card.title ? <div className="title"> <p className='main-title'>{card.title}</p> {card.subTitle ? <p className="sub-title">{card.subTitle}</p> : ""} </div> : ""}
          </div>
        )
      }
    </>
  )
}

export default MapCard