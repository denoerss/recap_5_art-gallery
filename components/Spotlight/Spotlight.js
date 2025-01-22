import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ artPieces }) {
  const artPieceRandom =
    artPieces[Math.floor(Math.random() * artPieces.length)];
  console.log("artPieceRandom", artPieceRandom);

  return (
    <>
      <ArtPiecePreview artPieces={artPieceRandom} />
    </>
  );
}
