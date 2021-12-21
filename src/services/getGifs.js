const API_KEY = "dBZxQrDeUkFzYwkb00a7yK5M9ph4E3V3";

const getGifs = ({ keyword = "Morty" } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())

    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { id, images, title } = image;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
        return gifs;
      }
    });
};

export default getGifs;
