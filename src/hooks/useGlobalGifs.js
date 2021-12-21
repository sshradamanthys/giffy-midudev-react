import { useContext } from "react";
import GifsContext from "../context/GifsContext";

export const useGlobalGifs = ({ keyword } = { keyword: null }) => {
  const { gifs } = useContext(GifsContext);

  return gifs;
};
