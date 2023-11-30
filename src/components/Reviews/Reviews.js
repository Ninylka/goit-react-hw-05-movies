import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getMovieReviews } from "api";
import { Author, AuthorSpan, NoReviews, ReviewsItem, RewiewContent } from "./Reviews.styled";
import { Loader } from "components/Loader";



 const Reviews =  () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {

        setIsLoading(true);
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
   {isLoading && <Loader/> }
     {reviews.length > 0 ? (
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
        <NoReviews>Sorry! No reviews available!</NoReviews>
      )}
    </>
  );
};


export default Reviews;