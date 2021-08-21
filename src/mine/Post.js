import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import "./css/post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
import { Posticon } from './Posticon';

export const Post = forwardRef(({user,name,desc,url},ref) => {
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
              {url&& <img src={url} alt=""/>}
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
