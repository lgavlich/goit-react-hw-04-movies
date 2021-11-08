import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import SearchFilm from "../../components/SearchFilm/SearchFilm";
import SearchFilmList from "../../components/SearchFilmlist/SearchFilmlist";
import * as API from "../../service/API";

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const onSubmitSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    if (search) {
      history.push({
        ...location,
        search: `?query=${search}`,
      });
      API.fetchQuery(search)
        .then((response) => {
          setFilms(response.results);
        })
        .catch(console.log(Error));
    }
  }, [search]);

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const param = new URLSearchParams(location.search).get("query");
    setSearch(param);
  }, [location.search]);

  return (
    <div>
      <Container>
        <SearchFilm onSubmit={onSubmitSearch} />
      </Container>
      <Container>
        <SearchFilmList films={films} />
      </Container>
    </div>
  );
}
