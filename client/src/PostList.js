import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import "./styles.css"; 


//calling this method only when the component is first displayed on screen
const PostList = () => {    
  const [posts, setPosts] = useState({});


  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");

    // console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="card" key={post.id}>
        <div className="card-body">
          <h3>Post Name: {post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  
  console.log(posts);

  return (
    <div className="post-list-container">
      {renderedPosts}
    </div>
  );
};

export default PostList;
