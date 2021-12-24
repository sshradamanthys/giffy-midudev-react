import { useState, useEffect } from "react";
import Category from "components/Category";
import getTrendingSearches from "services/getTrendingSearches";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearches().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
};

export default TrendingSearches;
