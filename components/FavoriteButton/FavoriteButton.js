import { useState } from "react";
import Image from "next/image";
import { StyledFavoriteButton } from "./FavoriteButton.styled";

export default function FavoriteButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <StyledFavoriteButton
      type="button"
      onClick={handleClick}
      aria-label={isFavorited ? "Unfavorite" : "Favorite"}
    >
      <Image
        src={
          isFavorited ? "/assets/heart-filled.svg" : "/assets/heart-outline.svg"
        }
        alt={isFavorited ? "Filled Heart" : "Outlined Heart"}
        width={40}
        height={40}
      />
    </StyledFavoriteButton>
  );
}
