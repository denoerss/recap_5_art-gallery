import GlobalStyle from "../styles";
import {
  StyledNav,
  StyledList,
  StyledLink,
  StyledLi,
} from "../components/NavigationBar/NavigationBar.styled";
import useSWR, { SWRConfig } from "swr";
const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={error || isLoading ? [] : artPieces}
      />
      <StyledNav>
        <StyledList>
          <StyledLi>
            <StyledLink href="/">Spotlight</StyledLink>
          </StyledLi>
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
