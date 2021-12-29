import { useState, useEffect } from "react";
import getSingleGif from "services/getSingleGif";
import { useGifs } from "./useGifs";

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);

      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
};

export default useSingleGif;
