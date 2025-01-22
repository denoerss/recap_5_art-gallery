import ArtPiecesList from "@/components/ArtPiecesList";

export default function Gallery({ artPieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPiecesList artPieces={artPieces} />
    </div>
  );
}
