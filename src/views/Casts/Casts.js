import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../service/API";
import defaultImg from "../../image/default.jpg";
import s from "../Casts/Casts.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);
  console.log(movieId);

  useEffect(() => {
    API.fetchActors(movieId)
      .then(({ cast }) => {
        if (cast) {
          setcast(cast);
        }
      })
      .catch(console.log("error"));
  }, [movieId]);
  console.log(cast);

  return (
    <ul className={s.castList}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            alt={id}
            src={
              profile_path
                ? `https://themoviedb.org/t/p/w200/${profile_path}`
                : defaultImg
            }
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}
