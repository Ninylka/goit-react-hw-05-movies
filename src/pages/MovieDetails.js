import { getMovieDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {  Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBack, GoBackIcon, GoBackLink } from './MovieDetails.styled';


export default function MovieDetails() {
 const location = useLocation();
 const backLinkRef = useRef(location)
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {

    if (!movieId) return;
   
    async function getMovies() {
      try {
        const newMovie = await getMovieDetails(movieId);
        setMovie(newMovie);
      } catch (error) {
        toast.error("Something wrong!");
      } 
    }
    if (typeof movieId !== 'undefined') {
      getMovies();
    }
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/movies';
  return ( 
   

    <>
    
    
         <GoBackLink to={backLinkHref}>
           <GoBackIcon />
    <GoBack>Go back</GoBack>
  
  </GoBackLink>
  
  <MovieInfo movie={movie} location={backLinkRef.current.state} />
  <Suspense fallback={<div>Loading...</div>}>
  <Outlet />
  </Suspense>
  </>
  )
}

