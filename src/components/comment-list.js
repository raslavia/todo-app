import React from 'react';
import { connect } from 'react-redux';
import { removeComment } from '../actions/index';

const CommentList = ({ removeComment, comments }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <li key={comment.id} className="comment">
            <p className="text">{comment.text}</p>
            <button
              className="remove-item-cross"
              onClick={() => {
                removeComment(comment.id);
              }}
            >
              X
            </button>
            <p className="name">{comment.name}</p>
            <p className="date">{comment.date}</p>
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeComment: (id) => dispatch(removeComment(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
