import React from 'react';
import CommentList from '../components/comment-list.js';
import AddingComment from '../components/add-comment.js';

let App = () => {
  return (
    <div className="comment-container">
      <AddingComment />
      <CommentList />
    </div>
  );
};

export default App;
