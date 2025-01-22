import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledFigure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: black;
  width: 100%;
  color: white;
`;

export default function ArtPiecePreview({ artPiece }) {
  return (
    <>
      <StyledFigure>
        <StyledImage src={artPiece.imageSource} alt={artPiece.name} fill />
        <StyledCaption>
          {artPiece.name} by {artPiece.artist}
        </StyledCaption>
      </StyledFigure>
    </>
  );
}
