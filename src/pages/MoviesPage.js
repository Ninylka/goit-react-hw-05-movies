import { fetchSearchMovies } from "api";
import { useEffect , useState } from "react";
import toast from 'react-hot-toast';
import { ThreeDots } from  'react-loader-spinner';
import { SearchMovies } from "components/SearchMovies/SearchMovies";
import {  useSearchParams } from "react-router-dom";



export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [params, setParams] = useSearchParams('');
  const queryNew = params.get('query') ?? '';


useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMovies() {
      setIsLoading(true);
      try {
        const searchResults = await fetchSearchMovies(queryNew);
        if (searchResults.length === 0) {
          toast.error('No movie available');
        } else {
          setMovies(searchResults);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query,queryNew]);



  const onSubmitMovies = (value) => {
        
        setQuery(value);
        setParams({ query: value });
      };

 return ( 
<>

      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#090"
            ariaLabel="three-dots-loading"
          />
        
        </div>
      )}

      {!isLoading && (
        <SearchMovies onSubmit={onSubmitMovies}
         movies={movies}
        
        
          />
      )}
   
</>
 )
 
}
