import { useState } from "react";
import { CastItem } from "./CastItem";
import { ListCast, NoActorsText } from "./Cast.styled";

export const CastList = ({cast}) => {
    const [isLoading] = useState(false);
    const ImgBaseURL = "https://image.tmdb.org/t/p/w500";
   
    return (
        <>
       {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ListCast>
          {cast ? (
            cast.map(({ id, name, character, profile_path }) => (
              <CastItem
                key={id}
                name={name}
                character={character}
                imageUrl={`${ImgBaseURL}/${profile_path}`}
              />
            ))
          ) : (
            <NoActorsText>We don't have any information about the actors.</NoActorsText>
          )}
        </ListCast>
      )}



    </>
    )
}



