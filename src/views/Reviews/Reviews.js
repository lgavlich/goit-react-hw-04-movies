import { useEffect, useState } from "react";
//import { fetchReview } from "../../service/API";
import { useParams } from "react-router-dom";
import * as API from "../../service/API";
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    API.fetchReview(movieId)
      .then(({ results }) => {
        if (results) {
          setReviews(results);
        }
      })
      .catch(console.log("error"));
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
