import React from "react";
import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import { POSTS_URL } from "./constants/globalConstants";
import "./FetchPosts.css";

function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(POSTS_URL)
      .then((response) => response.json())
      .then((result) => setPosts(result.data));
  }, []);

  //   useEffect(() => {
  //     console.log(posts);
  //   }, [posts]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="container">
            <PostCard title={post.title} body={post.body} />
          </div>
        );
      })}
    </div>
  );
}

export default FetchPosts;
