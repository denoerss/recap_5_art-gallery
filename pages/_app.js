import GlobalStyle from "../styles";
import useSWR from "swr";
import SWRConfig from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) {
    return <h2>Ups, Error!</h2>;
  }
  if (isLoading) {
    return <h2>is loading...</h2>;
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} artPieces={artPieces} />
    </SWRConfig>
  );
}
