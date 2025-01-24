import Spotlight from "@/components/Spotlight/Spotlight";
import { useState, useEffect } from "react";

export default function HomePage({
  artPieces,
  handleToggleLike,
  artPiecesInfo,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState();

  useEffect(() => {
    setRandomArtPiece(artPieces[Math.floor(Math.random() * artPieces.length)]);
  }, [artPieces]);

  return (
    <div>
      <h1>Spotlight</h1>
      {randomArtPiece && (
        <Spotlight
          randomArtPiece={randomArtPiece}
          handleToggleLike={() => handleToggleLike(randomArtPiece.slug)}
          isFavorite={
            artPiecesInfo.find(
              (artPieceInfo) => randomArtPiece.slug === artPieceInfo.slug
            )?.isLiked
          }
        />
      )}
    </div>
  );
}
