import React from 'react'
import './FreshBlog.css'
import { ArrowTextCard, FreshCard } from '../Card'
import dataBase from '../../../dataBase.json'

function FreshBlog() {
    const data = dataBase.freshBlog
    console.log(data)
    return (
        <div className='fresh-blog'>
            <ArrowTextCard title={"Fresh from the blog"} />
            <div className="fresh-blog-card-container">
                {
                    data.elements.map((item) => (
                        <FreshCard title={item.title} subTitle={item.SubTitle} imgURL={item.imgURL} description={item.paragraph} />
                    ))
                }
            </div>
        </div>
    )
}

export default FreshBlog