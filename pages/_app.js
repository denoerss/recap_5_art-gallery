import GlobalStyle from "../styles";
import {
  StyledNav,
  StyledList,
  StyledLink,
} from "../components/NavigationBar/NavigationBar.styled";
import useSWR, { SWRConfig } from "swr";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleLike(artPieceSlug) {
    const artPiece = artPiecesInfo.find((info) => info.slug === artPieceSlug);
    if (artPiece) {
      setArtPiecesInfo((prevArtPiecesInfo) =>
        prevArtPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === artPieceSlug
            ? { ...pieceInfo, isLiked: !pieceInfo.isLiked }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo((prevArtPiecesInfo) => [
        ...prevArtPiecesInfo,
        { slug: artPieceSlug, isLiked: true },
      ]);
    }
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={error || isLoading ? [] : artPieces}
        handleToggleLike={handleToggleLike}
        artPiecesInfo={artPiecesInfo}
      />
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Spotlight</StyledLink>
          </li>
          <li>
            <StyledLink href="/artpieces">Art Pieces</StyledLink>
          </li>
          <li>
            <StyledLink href="/favorites">Favorites</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
    </SWRConfig>
  );
}
