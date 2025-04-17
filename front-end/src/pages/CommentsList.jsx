/* eslint-disable react/prop-types */
export default function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      {comments?.map((comment) => (
        <div key={comment.date}>
          <div style={{ display: "flex", fontStyle: "italic" }}>
            <p style={{ marginRight: "5px" }}>{comment.postedBy} -</p>
            <p>{comment.date}</p>
          </div>

          <p style={{ margin: "0 0 20px 0" }}>{comment.text}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
