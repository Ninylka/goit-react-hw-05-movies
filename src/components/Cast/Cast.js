import { useEffect, useState } from "react";
import { CastList } from "./CastList";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getMovieCredits } from "api";


export const Cast =  () => {

    const [cast, setCast] = useState(null);
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!movieId) {
            return;
          }
        async function getCast() {
          try {
            const newCredits = await getMovieCredits(movieId);
            setCast(newCredits.cast);
          } catch (error) {
            toast.error("Something wrong!");
          } finally {
            setIsLoading(false)
          }
        }
        getCast();
      }, [movieId]);
    

return <CastList cast={cast} isLoading={isLoading}/>
  
}

