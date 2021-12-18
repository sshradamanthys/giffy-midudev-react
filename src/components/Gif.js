import "./Gif.css";

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="Gif">
      <img key={id} src={url} alt={title} />
      <small>{title}</small>
    </a>
  );
};

export default Gif;
