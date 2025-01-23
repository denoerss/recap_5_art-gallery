import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../../components/ArtPiece.styled";

export default function ArtPiecePreview({ artPieceLiked, onToggleLike }) {
  return (
    <>
      <StyledFigure>
        <StyledImage
          src={artPieceLiked.imageSource}
          alt={artPieceLiked.name}
          fill
        />
        <StyledCaption>
          {artPieceLiked.name} by {artPieceLiked.artist}
        </StyledCaption>
      </StyledFigure>
    </>
  );
}
