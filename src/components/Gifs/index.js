import Gif from "../Gif";
import "./styles.css";

const Gifs = ({ gifs }) => {
  return (
    <div className="Gifs">
      {gifs &&
        gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}
    </div>
  );
};

export default Gifs;
