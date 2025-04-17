import { useState } from "react";
import PropTypes from "prop-types";

export function AddCommentForm({ onAddComment }) {
  const initialFormComment = {
    name: "",
    comment: "",
  };
  const [formComment, setFormComment] = useState(initialFormComment);

  function callAddComment() {
    onAddComment(formComment);
    setFormComment(initialFormComment);
  }
  return (
    <div>
      <h3>Add a Comment</h3>
      <label htmlFor="name">
        {" "}
        Name:{" "}
        <input
          type="text"
          value={formComment.name}
          onChange={(event) =>
            setFormComment({ ...formComment, name: event.target.value })
          }
        />
      </label>
      <label htmlFor="comment">
        {" "}
        Comment:{" "}
        <input
          type="text"
          value={formComment.comment}
          onChange={(event) =>
            setFormComment({ ...formComment, comment: event.target.value })
          }
        />
      </label>
      <button onClick={() => callAddComment()}>Add Comment</button>
    </div>
  );
}

AddCommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};

export default AddCommentForm;
