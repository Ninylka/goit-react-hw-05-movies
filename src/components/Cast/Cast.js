import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getMovieCredits } from "api";
import { Loader } from "components/Loader";
import { CharacterCast, ImgCastItem, ListCast, NameCast, NoActorsText, SpanCharacterCast, StyledCastItem } from "./Cast.styled";



 const Cast = () => {
  
  const [castMovie, setCastMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
  
    setIsLoading(true);
  async function getCast() {
      try {
          
          const newCredits = await getMovieCredits(movieId);
          setCastMovie(newCredits);
      } catch (error) {
          toast.error('Oops! Something went wrong! Please try reloading this page! 🥹')
      } finally {
      setIsLoading(false);
      }
  }

  getCast();
  }, [movieId]);

  const ImgBaseURL = "https://image.tmdb.org/t/p/w500";
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
      <div>
          {isLoading && <Loader/>}
          
        <ListCast>
          {castMovie.length > 0 ? 
          (castMovie.map(({ profile_path, name, character, id }) => (
                  <StyledCastItem key={id}>
                      <ImgCastItem src={profile_path ? `${ImgBaseURL}/${profile_path}` : defaultImg } alt={name} width={250} height={375}
                      />
                      <NameCast>{name}</NameCast>
                      <CharacterCast><SpanCharacterCast>Character: </SpanCharacterCast> {character}</CharacterCast>
                  </StyledCastItem>
          ))) : (<NoActorsText>We don't have any information about the actors.</NoActorsText>)}
       </ListCast>

      </div>
  )
} 
export default Cast;