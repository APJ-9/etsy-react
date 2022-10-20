import React from 'react'
import './List.css'

function List() {
    return (
        <div className="list-sub">
            <button className="list-footer">
                <p>Shop</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#ffffff" d="M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z"></path></svg>
            </button>
            <div className="sub-footer">
                <p>Gift cards</p>
                <p>Gift cards</p>
                <p>Gift cards</p>
                <p>Gift cards</p>
                <p>Gift cards</p>
            </div>
        </div>
    )
}

export default List