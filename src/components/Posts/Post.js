import React from "react";
import "../../styles.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.body}</div>
      <div className="postauthor">Written by: Author Name</div>
    </div>
  );
};

export default Post;
