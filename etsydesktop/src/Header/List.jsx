import React, { useState } from 'react'

function List({value}) {
    const [state,setState] = useState(false)
    const showDiv = () =>{
        setState(true)
      }
    const hideDiv = () =>{
        setState(false)
    }
    // console.log(value)
  return (
    <>
        <p onMouseEnter={showDiv} onMouseLeave={hideDiv}>{value}</p>
        {
            // state ?<div className='test'>Hello</div> :null
        }
    </>
  )
}

export default List