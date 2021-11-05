import { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

import {
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDet";
import * as API from "../../service/API";

const CastPage = lazy(() => import("../Casts/Casts.js"));
const ReviewsPage = lazy(() => import("../Reviews/Reviews"));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  const [movie, setMovie] = useState({
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: null,
    id: null,
  });

  useEffect(() => {
    API.fetchMovieDetails(movieId)
      .then(({ poster_path, title, overview, vote_average, genres, id }) =>
        setMovie({
          poster_path,
          title,
          overview,
          genres,
          vote_average,
          id,
        })
      )
      .catch(console.log(Error));
  }, [movieId]);

  const btnGoBack = () => {
    if (location?.state?.search) {
      return history.push(`?query=${location?.state?.search}`);
    }
    history.push(location?.state?.from ?? "/");
  };
  return (
    <>
      <Button
        type="button"
        onClick={btnGoBack}
        variant="outLined"
        color="primary"
      >
        Go Back
      </Button>
      {movie && (
        <MovieDetails
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genres={movie.genres}
          vote_average={movie.vote_average}
          id={movie.movieId}
        />
      )}

      <div>
        <h3>Additional information</h3>
        <hr />
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: location?.state?.from ?? "/",
                  search: location?.state?.search,
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: location?.state?.from ?? "/",
                  search: location?.state?.search,
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={`${match.path}/cast`}>
          <CastPage />
        </Route>

        <Route path={`${match.path}/reviews`}>
          <ReviewsPage />
        </Route>
      </Suspense>
    </>
  );
}
