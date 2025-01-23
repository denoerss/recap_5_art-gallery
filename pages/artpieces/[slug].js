import Link from "next/link";
import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../../components/ArtPiece.styled";
import styled from "styled-components";
import { useRouter } from "next/router.js";
import ArtPieceDetailsComments from "@/components/ArtPieceDetails/ArtPieceDetailsComments";
import ArtPieceDetailsCircles from "@/components/ArtPieceDetails/ArtPieceDetailsCircles";

const StyledDiv = styled.div`
  width: 30rem;
  height: 30rem;
  min-width: 10rem;
`;

export default function ArtPieceDetails({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  if (!artPiece) {
    return null;
  }

  return (
    <>
      <div>
        <Link href={`/artpieces`}>← back</Link>
      </div>
      <StyledDiv>
        <StyledFigure>
          <StyledImage alt={artPiece.name} src={artPiece.imageSource} fill />
          <StyledCaption>
            {artPiece.name} by {artPiece.artist}
          </StyledCaption>
        </StyledFigure>
      </StyledDiv>
      <p>Genre: {artPiece.genre}</p>
      <p>Year: {artPiece.year}</p>
      Colors: <ArtPieceDetailsCircles artPieceColors={artPiece.colors} />
      <ArtPieceDetailsComments artPiece={artPiece} />
    </>
  );
}
