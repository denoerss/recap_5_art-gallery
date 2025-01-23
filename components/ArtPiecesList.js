import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const StyledArtPieces = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

const StyledListItem = styled.li`
  width: 30rem;
  height: 30rem;
  min-width: 10rem;
`;

export default function ArtPiecesList({ artPieces }) {
  return (
    <StyledArtPieces>
      {artPieces.map((artPiece) => (
        <StyledListItem key={artPiece.slug}>
          <ArtPiecePreview artPiece={artPiece} />
        </StyledListItem>
      ))}
    </StyledArtPieces>
  );
}
