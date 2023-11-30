import { getTrendingMovies } from "api";
import { HomeList } from "components/HomeList/HomeList";
import { Loader } from "components/Loader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";




export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
  
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
     <HomeList movies={movies} 
      location={location}
     
      />;
      </>
 )
   
}