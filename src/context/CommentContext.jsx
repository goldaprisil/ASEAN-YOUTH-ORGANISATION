import React, { createContext, useState } from "react";

export const CommentContext = createContext();

const CommentContextProvider = (props) => {
  const [comments, setComments] = useState([]);

  const addComment = (body) => {
    const newComment = {
      id: comments.length + 1,
      body: body,
      createdAt: new Date()
    };

    setComments([...comments, newComment]);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment, deleteComment }}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;