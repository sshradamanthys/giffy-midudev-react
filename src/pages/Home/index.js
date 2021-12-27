import { useCallback } from "react";
import Gifs from "components/Gifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";

const Home = () => {
  const [path, pushLocation] = useLocation();
  console.log(path);
  const { gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => pushLocation(`/search/${keyword}`),
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Ultima busqueda</h3>
          <Gifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
};

export default Home;
