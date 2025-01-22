import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ artPieces }) {
  const randomArtPiece = artPieces
    ? artPieces[Math.floor(Math.random() * artPieces.length)]
    : null;

  return (
    <div>
      <h1>Spotlight</h1>
      {randomArtPiece && <Spotlight randomArtPiece={randomArtPiece} />}
    </div>
  );
}
