import { useState } from "react";
import Gifs from "components/Gifs";
import Loader from "components/Loader";
import TrendingSearches from "components/TrendingSearches";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  console.log(`path`, path);
  const { loading, gifs } = useGifs();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search a gif here.."
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3>Ultima busqueda</h3>
          {loading ? <Loader /> : <Gifs gifs={gifs} />}
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
};

export default Home;
