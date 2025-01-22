import Spotlight from "@/components/spotlight/spotlight";

export default function HomePage({ artPieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight artPieces={artPieces} />
    </div>
  );
}
