import React from 'react'
import './Etsy.css'
import data from '../../dataBase.json'
import MapCard from '../Main/MapCard'

function Etsy() {
    const dataEtsy = data.etsy.elements
    console.log(dataEtsy)
    return (
        <div className='etsy-container'>
            <p className='etsy-heading'>What is Etsy?</p>
            <p className="sub-heading">Read our wonderfully weird story</p>
            <div className="etsy-card-container">
                <MapCard cards={dataEtsy}></MapCard>
                <div className="question">
                    <h4>Have a question? Well, we've got some answers.</h4>
                    <a href="https://www.etsy.com/help?ref=hp_what_is_etsy_help_center">
                        <button>Go to Help Center</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Etsy