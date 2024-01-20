import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; 

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");   //after adding comment set the comment value to null to write new comment
  };

  return (
    <div className="comment-create-container">
      <form onSubmit={onSubmit}>
        <div className="comment-form-group">
          <label className="comment-label">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="comment-input-field"
          />
        </div>
        <button className="comment-submit-button" style={{ backgroundColor: "#16796F",marginTop: "10px", padding: "8px 15px" }}>Submit</button>
      </form>
    </div>
  );
};


export default CommentCreate;


