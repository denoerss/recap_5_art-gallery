import Image from "next/image";
import { StyledFavoriteButton } from "./FavoriteButton.styled";

export default function FavoriteButton({ handleToggleLike, isFavorite }) {
  return (
    <StyledFavoriteButton
      type="button"
      onClick={handleToggleLike}
      aria-label={isFavorite ? "Unfavorite" : "Favorite"}
    >
      <Image
        src={
          isFavorite ? "/assets/heart-filled.svg" : "/assets/heart-outline.svg"
        }
        alt={isFavorite ? "Filled Heart" : "Outlined Heart"}
        width={40}
        height={40}
      />
    </StyledFavoriteButton>
  );
}
