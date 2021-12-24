import Gifs from "components/Gifs";
import Loader from "components/Loader";
import { useGifs } from "hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <Gifs gifs={gifs} />
        </>
      )}
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};

export default SearchResults;
