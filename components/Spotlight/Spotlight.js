import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../../components/ArtPiece.styled";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 30rem;
  height: 30rem;
  min-width: 10rem;
`;

export default function Spotlight({ randomArtPiece }) {
  return (
    <StyledDiv>
      <StyledFigure>
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
