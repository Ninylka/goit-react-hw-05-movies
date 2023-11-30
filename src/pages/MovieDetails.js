import { getMovieDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {  Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBack, GoBackIcon, GoBackLink } from './MovieDetails.styled';
import { Loader } from 'components/Loader';


export default function MovieDetails() {
const [movie, setMovie] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const location = useLocation();
const goBackLink = useRef(location?.state?.from ?? '/');
const { movieId } = useParams();

  useEffect(() => {
   setIsLoading(true)
    async function getMovies() {
      try {
        const newMovie = await getMovieDetails(movieId);
        setMovie(newMovie);
      } catch (error) {
        toast.error("Something wrong!");
      } finally {
        setIsLoading(false)
      }
    }
   
      getMovies();
    
  }, [movieId]);

  return ( 
   
    <>
    <GoBackLink to={goBackLink.current}>
      <GoBackIcon />
      <GoBack>Go back</GoBack>
    </GoBackLink>
  {isLoading && <Loader/>}
  {movie &&  <MovieInfo movie={movie} />}
  <Suspense fallback={<Loader/>}>
  <Outlet />
  </Suspense>
  </>
  )
}

