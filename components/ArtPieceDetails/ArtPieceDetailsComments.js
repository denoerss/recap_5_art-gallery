import "./ArtPieceDetailsComments.module.css";
import ArtPieceDetailsCommentList from "./ArtPieceDetailsCommentList";
import ArtPieceDetailsCommentForm from "./ArtPieceDetailsCommentForm";
import { useState } from "react";

export default function ArtPieceDetailsComments({ artPiece }) {
  const [comments, setComments] = useState([
    { id: artPiece.slug, comment: "I love this piece!", time: 1577836861465 },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setComments([
      { id: artPiece.slug, comment: data.comment, time: Date.now() },
      ...comments,
    ]);
    event.target.reset();
  }

  return (
    <>
      <ArtPieceDetailsCommentList comments={comments} />
      <ArtPieceDetailsCommentForm onSubmit={handleSubmit} />
    </>
  );
}
