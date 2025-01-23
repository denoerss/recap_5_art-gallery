export default function ArtPieceDetailsCommentForm({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="entry-form__field">
          <label htmlFor="comment">Add comment</label>
          <input type="text" name="comment" id="comment" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">send</button>
        </div>
      </form>
    </>
  );
}
