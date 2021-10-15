import React, { forwardRef } from 'react'
import "./css/post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from    '@mui/icons-material/Send';
import ShareIcon from   '@mui/icons-material/Share';
import { Avatar } from '@mui/material';
import { Posticon } from './Posticon';

export const Post = forwardRef(({user,name,desc,addphoto},ref) => {
    return (
        <div ref={ref} className="postc">
          <div className="ptop">
          <Avatar  className="A" src={user}/>
          <h4>{name}</h4>
          </div>
          <div className="postdesc">
              { desc && <p>{desc}</p>}
          </div>
          <div className="postattach">
              {addphoto&& <img src={addphoto} alt=""/>}
          </div>
          <div className="option">
              <Posticon Icon={ThumbUpIcon} title="Like"/>
              <Posticon Icon={CommentIcon} title="Comment"/>
              <Posticon Icon={ShareIcon} title="Share"/>
              <Posticon Icon={SendIcon} title="Send"/>
          </div>

        </div>
    )
})
