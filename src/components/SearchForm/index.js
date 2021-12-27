import { useState, memo } from "react";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = (e) => setKeyword(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search a gif here.."
        value={keyword}
      />
    </form>
  );
};

export default memo(SearchForm);
