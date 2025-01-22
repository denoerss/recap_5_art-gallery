import Image from "next/image";

export default function Spotlight({ randomArtPiece }) {
  return (
    <>
      <Image
        alt={randomArtPiece.name}
        width={randomArtPiece.dimensions.width / 5}
        height={randomArtPiece.dimensions.height / 5}
        src={randomArtPiece.imageSource}
      />
      <h2>Artist: {randomArtPiece.artist}</h2>
    </>
  );
}
