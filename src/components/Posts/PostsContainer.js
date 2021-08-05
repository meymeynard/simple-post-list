import React, { useState } from "react";
import Post from "./Post";
import "../../styles.css";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      if (response.ok) return response.json();
    })
    .then(function (posts) {
      setPosts(posts);
    })
    .catch(function (error) {
      setError(error.message);
    });

  return (
    <div className="posts-list">
      {posts.map((post, id) => (
        <Post key={id} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
