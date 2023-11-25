import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const { data: movies } = useFetch(apiPath, queryTerm);

  function capitalizeEachWord(string) {
    return string.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  useTitle(capitalizeEachWord(queryTerm));

  return (
    <main>
      <section className="pt-7">
        <p className="text-3xl md:px-2 px-5 text-center md:text-left capitalize text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for "${queryTerm}"`
            : `Search result for "${queryTerm}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
