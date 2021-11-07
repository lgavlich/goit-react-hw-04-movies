import { useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../../service/API";
import PageHeading from "../../components/PageHeading/PageHeading";
import MoviesList from "../../components/MovieList/MovieList";
export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  console.log(url);

  useEffect(() => {
    API.fetchTrand()
      .then(({ results }) => setMovies((movies) => [...movies, ...results]))
      .catch(console.log(Error));
  }, []);
  console.log(movies);

  return (
    <>
      <PageHeading text="Trending Today" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
