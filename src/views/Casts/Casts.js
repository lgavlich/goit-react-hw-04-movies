import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../service/API";

export default function Cast() {
  const { movieId } = useParams;
  const [cast, setcast] = useState([]);
  console.log(movieId);

  useEffect(() => {});
}
