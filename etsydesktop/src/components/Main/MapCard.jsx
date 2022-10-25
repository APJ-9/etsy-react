import React from 'react'

function MapCard({data}) {
    // console.log(data)
  return (
    <>
    {
      data.map((card, idx) =>
        <div key={idx} className="card">
          {card.imgURL ?  <img src={card.imgURL} alt="" />  : ""}
          {
            card.title && <div className="title"> <p className='main-title'>{card.title}</p> 
            {
              card.subTitle && <p className="sub-title">{card.subTitle}</p> 
            } 
            {
            card.paragraph && <p className='paragraph'>{card.paragraph}</p>
            }
            </div> 
          }
        </div>
      )
    }
  </>
  )
}

export default MapCard