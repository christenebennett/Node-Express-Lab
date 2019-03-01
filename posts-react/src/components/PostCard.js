import React from 'react';

const PostCard = (props) => {
  return(
    <div className="post-card">
      <div className="post-title">{props.title}</div>
      <div className="post-contents">{props.contents}</div>
    </div>
  )
}

export default PostCard;