const MAX_COMMENTS = 20;

export default function ArtPieceDetailsCommentList({ comments }) {
  return (
    <>
      {comments.length ? (
        <h2>Comments</h2>
      ) : (
        <h2>Bitte geben Sie einen Kommentar ein.</h2>
      )}
      <ul>
        {comments.slice(0, MAX_COMMENTS).map(({ comment, time }) => (
          <li key={time}>
            <strong>{comment} </strong>(
            {new Date(time).toLocaleDateString("de", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            )
          </li>
        ))}
      </ul>
    </>
  );
}
