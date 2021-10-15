import { Avatar } from '@mui/material'
import React from 'react'
import "./css/icon.css"



export const Hicon = ({title,Icon,user,color,onclick,fl}) => {
    return (
        <div>
            <div onClick={onclick} className="icons">
                {Icon && <Icon className="icon" style={{color:color}}/> }
                {title && <p>{title}</p>}
                {user  && <Avatar style= {{height:'30px' , width:'30px'}} src={user} className="avatar"/> }
                {(fl==="true" && !user) &&  <Avatar  src='' className="avatar"/> }
                
            </div>
        </div>
    )
}
