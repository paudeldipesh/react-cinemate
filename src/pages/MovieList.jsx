import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  useTitle(title);
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
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
