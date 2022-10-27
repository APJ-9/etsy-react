import React from 'react'

function ModalList({ data }) {
    // console.log(data)
    const handleMiddle = () => {
        console.log(data)
    }
    return (
        <div>
            {/* <p onClick={handleMiddle}>{data.name}</p> */}
        </div>
    )
}

export default ModalList