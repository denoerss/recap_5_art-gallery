import styled from "styled-components";

const StyledEntryFormField = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export default function ArtPieceDetailsCommentForm({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <StyledEntryFormField>
          <label htmlFor="comment">Add comment</label>
          <input type="text" name="comment" id="comment" />
          <button type="submit">send</button>
        </StyledEntryFormField>
      </form>
    </>
  );
}
