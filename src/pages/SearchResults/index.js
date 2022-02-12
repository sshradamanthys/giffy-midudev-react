import { useRef, useEffect, useCallback } from "react";
import Gifs from "components/Gifs";
import Loader from "components/Loader";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const visorRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  const handleNextPage = debounce(
    () => setPage((prevPage) => prevPage + 1),
    200
  );

  const debounceNextPage = useCallback(handleNextPage, [handleNextPage]);

  useEffect(() => {
    if (isNearScreen) debounceNextPage();
  }, [debounceNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{title} | Giffy</title>
            <meta name="description" content={title} />
          </Helmet>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <Gifs gifs={gifs} />
          <div data-testid="visor" ref={visorRef}></div>
        </>
      )}
    </>
  );
};

export default SearchResults;
