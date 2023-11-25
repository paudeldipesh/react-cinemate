import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const movieURL = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&query=${queryTerm}`;

  useEffect(() => {
    (async function fetchMovies() {
      const response = await fetch(movieURL);
      const result = await response.json();
      setData(result.results);
    })();
  }, [movieURL]);

  return { data };
};
