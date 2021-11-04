import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function MoviesList({ movies }) {
  //  const { url } = useRouteMatch();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            {/* <Link to={`${url}/${id}`}>{original_title}</Link> */}
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesList;
