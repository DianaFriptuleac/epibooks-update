import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <li>
      <strong>{comment.author}</strong> - {comment.comment}
    </li>
  );
};

export default SingleComment;