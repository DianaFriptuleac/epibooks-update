import React from "react";

const SingleComment = ({ comment, onDelete }) => {
  return (
    <li className="d-flex justify-content-between align-items-center my-2">
        <div>
      <strong>{comment.author}</strong> - {comment.rate}: {comment.comment}
      </div>
      <button 
      className="btn btn-danger btn-sm ms-2"
      onClick={() => onDelete(comment._id)}>
    Cancella
      </button>
    </li>
  );
};

export default SingleComment;