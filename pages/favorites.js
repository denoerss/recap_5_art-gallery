import FavoritesList from "@/components/Favorites/FavoritesList";

export default function Favorites({ artPieces, onToggleLike }) {
  const artPiecesLiked1 = artPieces.filter(
    (artPiece) => artPiece.isLiked === true
  );
  const artPiecesLiked = artPieces;

  return (
    <div>
      <h1>Art Gallery</h1>
      <FavoritesList
        artPiecesLiked={artPiecesLiked}
        onToggleLike={onToggleLike}
      />
    </div>
  );
}
