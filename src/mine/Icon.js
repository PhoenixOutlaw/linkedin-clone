import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/icon.css"


export const Icon = ({title,Icon,user,color,onclick,fl}) => {
    return (
        <div>
            <div onClick={onclick} className="icons">
                {Icon && <Icon className="icon" style={{color:color}}/> }
                {title && <p>{title}</p>}
                {user  && <Avatar src={user} className="avatar"/> }
                {(fl && !user) &&  <Avatar src='' className="avatar"/> }
                
            </div>
        </div>
    )
}
