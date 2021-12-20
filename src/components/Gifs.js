import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

const Gifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <section>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </section>
  );
};

export default Gifs;
