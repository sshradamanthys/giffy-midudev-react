import { API_URL, API_KEY } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

const getTrendingSearches = ({ keyword = "Morty" } = {}) => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
};

export default getTrendingSearches;
