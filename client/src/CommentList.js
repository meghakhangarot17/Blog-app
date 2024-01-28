import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list-container">         
      <ul className="comment-list" > 
        {comments.map((comment) => {
          let content;

          if (comment.status === "approved") {
            content = comment.content;
          }

          if (comment.status === "pending") {
            content = "This comment is awaiting moderation";
          }

          if (comment.status === "rejected") {
            content = "This comment has been rejected";
          }

          return <li key={comment.id}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;





// const CommentList = ({ comments }) => {
//   const renderedComments = comments.map((comment) => {
//     let content;

//   return <ul>{renderedComments}</ul>;
// };




