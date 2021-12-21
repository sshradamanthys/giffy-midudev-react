import Gifs from "../../components/Gifs";
import Loader from "../../components/Loader";
import { useGifs } from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Loader /> : <Gifs gifs={gifs} />}</>;
};

export default SearchResults;
