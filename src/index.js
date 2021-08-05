import React from "react";
import ReactDOM from "react-dom";
import PostsContainer from "./components/Posts/PostsContainer";

import "./styles.css";

//API: https://jsonplaceholder.typicode.com/posts

function App() {
  return (
    <div className="App">
      <PostsContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
