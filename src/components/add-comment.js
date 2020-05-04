import React from 'react';
import { addComment } from '../actions';
import { connect } from 'react-redux';

class AddingComment extends React.Component {
  state = {
    name: '',
    text: '',
    date: '',
  };

  getDate = () => {
    const date = new Date().toLocaleString();
    return date;
  };

  render() {
    let comment = {
      name: this.state.name,
      text: this.state.text,
      date: this.state.date,
    };

    return (
      <form
        className="input-name"
        onSubmit={(ev) => {
          ev.preventDefault();
          if (this.state.name === '' && this.state.text === '') return;
          this.props.addComment(comment);
          this.setState({ text: '', name: '' });
        }}
      >
        <input
          name="name"
          type="text"
          className="form-name"
          value={this.state.name}
          placeholder="Your name..."
          onChange={(ev) => {
            this.setState({ name: ev.target.value });
          }}
        />
        <textarea
          name="text"
          type="text"
          className="form-text"
          placeholder="Your comment..."
          value={this.state.text}
          onChange={(ev) => {
            this.setState({ text: ev.target.value, date: this.getDate() });
          }}
        />
        <button className="submit-button">ADD</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  };
};
export default connect(null, mapDispatchToProps)(AddingComment);
