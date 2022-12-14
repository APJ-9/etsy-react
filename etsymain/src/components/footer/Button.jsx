import React from 'react'
import { useState } from 'react'

function Button({ title, list, show }) {
    const [state, setState] = useState(show)
    const handleClick = () => {
        setState(!state)
    }
    return (
        <div className='list'>
            <div className={state ? "heading-btn mobile-footer active" : "heading-btn mobile-footer"} onClick={handleClick}>
                <h1>{title}</h1>
                <svg className='arrow-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#ffffff" d="M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z"></path></svg>
            </div>
            {
                state && <div className="footer-main-items mobile-footer">
                    {
                        list.map((item) => (
                            <p>{item}</p>
                        ))
                    }
                </div>
            }

            <div className="heading-btn tabdesk-footer">
                <h1>{title}</h1>
            </div>
            <div className="footer-main-items tabdesk-footer">
                {
                    list.map((item) => (
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Button