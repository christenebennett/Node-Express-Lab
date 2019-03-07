import React from 'react';

const PostCard = (props) => {

  return(
    <div className="post-card">
    <a>
      <div className="post-title">Title: {props.title}</div>
      <div className="post-contents">Contents: {props.contents}</div>
      </a>
    </div>
  )
}

export default PostCard;