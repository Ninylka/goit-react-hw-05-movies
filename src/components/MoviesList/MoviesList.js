import { useLocation } from "react-router-dom";
import { ContainerMoviesList, LinkMoviesListItem, MoviesListItem } from "./MovieList.styled";


export const MoviesList =  ({movies}) => {
  const location = useLocation()
  return (
    <ContainerMoviesList>
    <ul>
      {movies.map(movie => (
        <MoviesListItem key={movie.id}>
         
         <LinkMoviesListItem to={`/movies/${movie.id}`}
          state={{ from: location }}
         >
            {movie.title || movie.name}
         </LinkMoviesListItem>
        </MoviesListItem>
      ))}
      </ul>
    </ContainerMoviesList>
  );
};

