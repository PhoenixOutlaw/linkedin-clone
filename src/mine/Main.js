
import React, { useEffect, useState } from "react";
import PhotoIcon from          "@mui/icons-material/Photo";
import YouTubeIcon from        "@mui/icons-material/YouTube";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIcon from     "@mui/icons-material/Assignment";
import { Posticon } from "./Posticon";
import { Post } from "./Post";
import firebase from "firebase";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectuser } from "../features/userSlice";
import { Widget } from "./Widget";
import { useRef } from "react";
import FlipMove from 'react-flip-move'
import "./css/Main.css";
import { Avatar } from "@mui/material";

export const Main = () => {

  const user = useSelector(selectuser)
  const [entery, setentery] = useState('')
  const [posts, setposts] = useState([ ])
  const ref=useRef(null)

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snap=>(
      setposts(
      snap.docs.map(doc=>(
          { id: doc.id,
            data : doc.data(),
          }
        
      )))
    ))
  
  }, [])


const publish = e =>{
  e.preventDefault();
if(entery!==" " && entery)
{ db.collection("posts").add(
   { 
     name:user.displayName,
     avatar:user.photoURL,
     desc: entery,
     photourl: '' ,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   }
 )}
 setentery("")

}

  const recents = (title) => (
    <div className="recents">
      <span>#</span>
      <p>{title}</p>
    </div>
  );
  return (
    <div className="main">
      <div className="leftpannel">
        <div className="top">
          <img
            className="profilepic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUv0iRCsReBWxxQRAunucDawEb6g2xAhzynA&usqp=CAU"
            alt="profile pic"
          />
          <Avatar className="ava" src={user.photoURL} />
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
          <div className="stats">
            <div className="stat">
              <p>who viewed you</p>
              <p className="statno"> 100</p>
            </div>
            <div className="stat">
              <p>Views on posts</p>
              <p className="statno">20</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p> Recents</p>
          <div className="recent">
            {recents("this is one")}
            {recents("this is two")}
            {recents("this is three")}
          </div>
        </div>
      </div>

      <div className="postpannel">
        <div className="postcontainer">
          <div className="hhh">
            <Avatar src={user.photoURL} className="Ava" />
            <div className="postinputcontainer">
              <form action="">
                <input type="text" value={entery} onChange={e=>(setentery(e.target.value))}/>  
                <button type="submit" onClick={publish}> send</button>
                <input type="file" ref={ref} style={{display:"none"}} onClick={()=>{console.log("hogaya madadrchod")}} />
                
              </form>
            </div>
          </div>
          <div className="postoptions">
            <Posticon
              className="picon"
              Icon={PhotoIcon}
              title="Photo"
              color="blue"
              onClick= {() =>(  ref.current.click())}
            />
            <Posticon
              className="picon"
              Icon={YouTubeIcon}
              title="Video"
              color="green"
            />
            <Posticon
              className="picon"
              Icon={EventAvailableIcon}
              title="Events"
              color="orange"
            />
            <Posticon
              className="picon"
              Icon={AssignmentIcon}
              title="Write an artical"
              color="red"
            />
          </div>
        </div>
        <div className="post">
         <FlipMove>
          { posts.map( ( {id,data:{name , desc , photourl,avatar} })=>(
          <Post user = {avatar} key={id} name={name} desc={desc} url={photourl} />
          ))}
          </FlipMove> 
 
         </div>
      </div>

      <div className="rightpannel"><Widget/></div>
    </div>
  );
};
