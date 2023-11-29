
import { FormMovies } from 'components/FormMovies/FormMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchMovies = ({ onSubmit, movies }) => {
  return (
    <>
      
        <FormMovies onSubmit={onSubmit} />
        <ul>
          <MoviesList movies={movies} />
        </ul>
      
    </>
  );
};
