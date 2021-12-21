import { Link } from "wouter";
import "./styles.css";

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <img key={id} src={url} alt={title} />
      <h4>{title}</h4>
    </Link>
  );
};

export default Gif;
