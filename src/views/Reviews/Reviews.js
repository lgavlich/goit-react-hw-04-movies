import { useEffect, useState } from "react";
import { fetchReview } from "../../service/API";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { moviewId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchReview(moviewId)
      .then((data) => {
        setReviews(data.results);
      })
      .catch((error) => console.warn(error));
  }, [moviewId]);
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
