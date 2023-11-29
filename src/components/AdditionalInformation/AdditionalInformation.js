import { AdditionalItem, LinkAdditionalItem, TitleAdditional } from "./AdditionalInformation.jstyled";

export const AdditionalInformation = (location) => {
    return (
        <>
        <TitleAdditional>Additional information</TitleAdditional>
        <ul>
          <AdditionalItem>
            <LinkAdditionalItem to="cast" >Cast</LinkAdditionalItem>
          </AdditionalItem>
          <AdditionalItem>
            <LinkAdditionalItem to="reviews" >Reviews</LinkAdditionalItem>
          </AdditionalItem>
        </ul>
      </>
    );
  };

 