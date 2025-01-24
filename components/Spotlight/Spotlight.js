import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../../components/ArtPiece.styled";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyledDiv = styled.div`
  width: 30rem;
  height: 30rem;
  min-width: 10rem;
`;

export default function Spotlight({
  randomArtPiece,
  handleToggleLike,
  isFavorite,
}) {
  return (
    <StyledDiv>
      <StyledFigure>
        <FavoriteButton
          handleToggleLike={handleToggleLike}
          isFavorite={isFavorite}
        />
        <StyledImage
          alt={randomArtPiece.name}
          src={randomArtPiece.imageSource}
          fill
        />
        <StyledCaption>Artist: {randomArtPiece.artist}</StyledCaption>
      </StyledFigure>
    </StyledDiv>
  );
}
