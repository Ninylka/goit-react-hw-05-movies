import { getMovieDetails } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { IoArrowUndoOutline } from "react-icons/io5";
import { Suspense, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {  Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function MovieDetails() {
 const location = useLocation();
 const backLinkRef = useRef(location)

 
  const [movie, setMovie] = useState({});
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
    getMovies();
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

export const GoBackLink = styled(Link)`
 background-color: #6f6; 
 color: #090;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  max-width: 100px;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  
  &:hover,
  &:focus {
    text-shadow: black 1px 1px 2px, black 1px 1px 2px;
    color: #090;
  }

`
export const GoBack = styled.b`
font-family: 'roboto';
font-size: 20px;
font-weight: 600;
line-height: 1.3;

`


export const GoBackIcon = styled(IoArrowUndoOutline)`
  margin-right: 8px; 
  font-size: 20px;
`;