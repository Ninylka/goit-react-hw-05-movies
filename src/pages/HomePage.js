import { getTrendingMovies } from "api";
import { Loader } from "components/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

  setIsLoading(true)

    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try reloading this page!')
    
      }finally {
        setIsLoading(false); 
      }
    };

    fetchTrendingMovies();
  }, []);


  
   return(
   <>
   {isLoading && <Loader/>}
   {movies.length > 0 && <MoviesList movies={movies} /> }
    
      </>
 )
   
}