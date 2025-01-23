import styled from "styled-components";
import FavoritePreview from "./FavoritePreview";

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

export default function FavoriesList({ artPiecesLiked, onToggleLike }) {
  return (
    <StyledArtPieces>
      {artPiecesLiked.map((artPieceLiked) => (
        <StyledListItem key={artPieceLiked.slug}>
          <FavoritePreview
            artPieceLiked={artPieceLiked}
            onToggleLike={onToggleLike}
          />
        </StyledListItem>
      ))}
    </StyledArtPieces>
  );
}
