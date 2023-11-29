
import { CharacterCast, ImgCastItem, NameCast, SpanCharacterCast, StyledCastItem } from "./Cast.styled";
export const CastItem = ({ name, character, imageUrl }) =>{
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const finalImageUrl = imageUrl ? `https://image.tmdb.org/t/p/w500/${imageUrl}` : defaultImg ;
  
  return (
      <>
      <StyledCastItem>
        <ImgCastItem 
        src={finalImageUrl} 
        alt={name} 
        width={250}
        height={375}
        onError={(e) => {
          e.target.src = defaultImg; 
        }}
        />
        
          <NameCast>{name}</NameCast>
          <CharacterCast><SpanCharacterCast>Character: </SpanCharacterCast> {character}</CharacterCast>
          </StyledCastItem>
      </>
    );
  }
