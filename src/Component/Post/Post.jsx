import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({username, caption, imageUrl }) {
  return (
    <div className="post mw8 center" >
      <div className="post__header">
        {/* Header: avatar with username */}
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
         <div className="pic">
         <img className="post__image" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="" />
         </div>
       Username + caption
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>    
    </div>
  );
}

export default Post;