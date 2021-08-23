import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/posticon.css"



export const Posticon = ({title,Icon,user,color,addphoto}) => {
    
    return (
        <div className="postoptcontainer">
            <div className="opicons">
                {Icon && <Icon className="opicon" style={{color:`${color}`}}/> }
                {title && <p>{title}</p>}
                {user && <Avatar src={user} className="avatar"/> }
                
            </div>
        </div>
    )
}
