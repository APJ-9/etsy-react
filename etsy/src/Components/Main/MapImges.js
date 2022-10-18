import React from 'react'

function MapImges(props) {
    const data = props.data
    console.log(data)
  return (
    <>
    {
        data.map((image,idx)=>
            <div key={idx} className='card'>
                <img src={image.imgURL} alt="" />
                <div className="heart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg>
                </div>
                <div className="details">
                    {
                    image.status==="unsold" 
                    ?   image.oldPrice && image.oldPrice>image.newPrice
                        ?   <><p className='new-price'>&#8377;{image.newPrice}</p>&nbsp;<p className='old-price'>&#8377;{image.oldPrice}</p></>
                        :   <p className='new-price'>&#8377;{image.oldPrice}</p> 
                    : <p className='sold'>Sold</p>
                    }
                </div>
            </div>
        )
    }
    </>
  )
}

export default MapImges