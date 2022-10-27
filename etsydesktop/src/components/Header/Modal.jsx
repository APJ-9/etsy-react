import React, { useState } from 'react'
import ModalList from './ModalList'

function Modal({ data }) {
    console.log(data)
    return (
        <div className='modal-list'>
            {
                data.map((elements) => (
                    <>
                        <p key={elements.id}>{elements.name}</p>
                        {/* <ModalList data={elements} /> */}
                    </>
                ))
            }
        </div >
    )
}

export default Modal