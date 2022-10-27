import React, { useState } from 'react'
import './Input.css'

function Input() {
    const [inputState,setInputState] = useState(false)
    const handleFocus = () => {
        setInputState(true)
    }
    const changeFocus = () =>{
        setInputState(false)
      }
  return (
    <div className='search-section' style={{ backgroundColor:inputState ? 'white' :'#f4f4f4'}}>
      <input className='search-bar' onFocus={handleFocus} onBlur={changeFocus} type="text" placeholder='Search for anythig' />
      <div className="search-btn" style={{ backgroundColor:inputState ? '#000' :'#f4f4f4'}} >
        <svg className='search-icon' style={{ fill:inputState ? '#fff' :'#000'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path>
          <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Input