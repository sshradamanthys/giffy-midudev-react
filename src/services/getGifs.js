import { API_URL, API_KEY } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { id, images, title } = image;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
    return gifs;
  }
  return [];
};

const getGifs = ({ limit = 25, keyword = "Morty", page = 0 } = {}) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset${
    page * limit
  }=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
};

export default getGifs;
