import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
export default function FilmsList({ films }) {
  const { url } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {films.map(({ id, original_title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${url}/${id}`,
              state: { from: location },
            }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};
