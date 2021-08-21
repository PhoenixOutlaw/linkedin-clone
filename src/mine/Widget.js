import React from 'react'
import "./css/Main.css"

export const Widget = () => {
    const newsfeed = (title,news) =>(
        <div className="newspost">
            <div className="con">
         <h1>{title}</h1>
         <p>{news}</p>
            </div>
                
        </div>
    )
    return (
        <div>
            <div className="widget_top">
                <h2>News</h2>
            </div>
            <div className="news">
               
                {newsfeed('Breaking news','hopless child finally did something')}
                {newsfeed('Next step','now hes gonna procastinate having a job')}
                {newsfeed('Huihui','hopless')}
               
            </div>
        </div>
    )
}
