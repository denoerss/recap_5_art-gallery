import GlobalStyle from "../styles";
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
    </SWRConfig>
  );
}
