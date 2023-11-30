import { fetchSearchMovies } from "api";
import { useEffect , useState } from "react";
import toast from 'react-hot-toast';
import {  useSearchParams } from "react-router-dom";
import { Loader } from "components/Loader";
import { FormMovies } from "components/FormMovies/FormMovies";
import { MoviesList } from "components/MoviesList/MoviesList";



export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams('');
  const queryNew = params.get('query') ?? '';

useEffect(() => {
    if (queryNew === '') {
      return;
    }
    setIsLoading(true);

    async function getMovies() {
      try {
        const searchResults = await fetchSearchMovies(queryNew);
        if (searchResults.length === 0) {
          toast.error('No movie available');
        } else {
          setMovies(searchResults);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try reloading this page!')
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [queryNew]);



  const onSubmitMovies = (value) => {
        
        setParams({ query: value });
      };

 return ( 

<>
    <FormMovies onSubmit= {onSubmitMovies }/>
      {isLoading && <Loader/>}
      {movies.length > 0 && <MoviesList movies={movies} /> }
   
</>
 )
 
}
