import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../components/ArtPiece.styled";

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
