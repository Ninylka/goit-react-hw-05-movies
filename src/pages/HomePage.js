import { getTrendingMovies } from "api";
import { HomeList } from "components/HomeList/HomeList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    // if(!movies === ''){
    //   return
    // }
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);


     return <HomeList movies={movies} 
     location={location}
     />;
  }