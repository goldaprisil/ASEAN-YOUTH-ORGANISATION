import React, { useContext, useState } from 'react';
import { CommentContext } from '../../context/CommentContext';


import './Comment.css';

const Comment = () => {
  const { comments, addComment, deleteComment } = useContext(CommentContext);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      addComment(comment);
      setComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId);
  };

  return (
    <div className="comment-container">
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p className="comment-body">{comment.body}</p>
            <p className="comment-date">{comment.createdAt.toLocaleString()}</p>
            <button className="comment-delete" onClick={() => handleDeleteComment(comment.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <textarea
          placeholder="Type your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button className="comment-submit" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
