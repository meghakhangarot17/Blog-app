import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; 

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };

  return (
    <div className="post-create-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;

