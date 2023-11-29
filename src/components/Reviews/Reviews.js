import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getMovieReviews } from "api";
import { Author, AuthorSpan, ReviewsItem, RewiewContent } from "./Reviews.styled";



export const Reviews =  () => {

    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!movieId) {
            return;
          }
        async function getReviews() {
          try {
            const newReviews = await getMovieReviews(movieId);
            setReviews(newReviews.results);
          } catch (error) {
            toast.error("Something wrong!");
          } finally {
            setIsLoading(false);
          }
        }
        getReviews();
      }, [movieId]);
    

return (
  <>
{isLoading ? (
        <p>Loading...</p>
        
      ) : reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <ReviewsItem key={review.id}>
              <Author>
                Author: <AuthorSpan>{review.author}</AuthorSpan>
              </Author>
              <RewiewContent>{review.content}</RewiewContent>
            </ReviewsItem>
          ))}
        </ul>
      ) : (
        <p>Sorry! No reviews available</p>
      )}
    </>
  );
};


