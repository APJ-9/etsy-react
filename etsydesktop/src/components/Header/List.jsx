import React, { useState, useEffect } from 'react'
import './List.css'
import Modal from './Modal'

function List({ value }) {
  // let obj = value.elements
  // console.log(obj)
  // let dataToDisplay = []
  const [dataToDisplay, setDataToDisplay] = useState({})
  const [state, setState] = useState(false)
  const showDiv = () => {
    setState(true)
  }
  const hideDiv = () => {
    setState(false)
  }

  return (
    <>
      <p onMouseEnter={showDiv} onClick={hideDiv}>{value.title}</p>
    </>
  )
}

export default List