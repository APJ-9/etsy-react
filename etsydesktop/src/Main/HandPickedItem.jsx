import React, { useState } from 'react'
import './HandPickedItem.css'
import HandPickedMap from './HandPickedMap'

function HandPickedItem({data}) {
    // console.log(data.modernFarmhouse)
    let obj = data.modernFarmhouse

    const [passData,setPassData] = useState({obj})

    const dataHandler =(e) =>{
        if(e.currentTarget.innerHTML === 'Modern farmhouse'){
            obj = data.modernFarmhouse
            setPassData({obj})
        }
        else if(e.currentTarget.innerHTML === 'Boho Decor'){
            obj = data.bohoDecor
            setPassData({obj})
        }
        else if(e.currentTarget.innerHTML === 'Eclectic Decor'){
            obj = data.eclecticDecor
            setPassData({obj})
        }
        else if(e.currentTarget.innerHTML === 'Minimalist'){
            obj = data.minimalist
            setPassData({obj})
        }
    }
  return (
    <div className='hand-picked-section'>
        <h1>Discover unique hand-picked items</h1>
        <div className="slider-list">
            <button onClick={dataHandler}>Modern farmhouse</button>
            <button onClick={dataHandler}>Boho Decor</button>
            <button onClick={dataHandler}>Eclectic Decor</button>
            <button onClick={dataHandler}>Minimalist</button>
            <div className="line"></div>
        </div>
        <HandPickedMap data={passData} />
    </div>
  )
}

export default HandPickedItem