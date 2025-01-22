// import { Image } from "next/image";

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

export default function ListOfArtPieces({ artPieces }) {
  console.log("artpieces_", artPieces);
  return (
    <StyledArtPieces>
      {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecePreview artPiece={artPiece} />
        </li>
      ))}
    </StyledArtPieces>
  );
}
