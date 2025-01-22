// import { Image } from "next/image";

export default function ListOfArtPieces({ artPieces }) {
  return (
    <ul>
      {artPieces.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            <h2>{artPiece.name}</h2>
            <img
              src={artPiece.imageSource}
              alt={artPiece.name}
              width={artPiece.dimensions.width / 5}
              height={artPiece.dimensions.height / 5}
            />
            <p>© {artPiece.artist}</p>
          </li>
        );
      })}
    </ul>
  );
}
