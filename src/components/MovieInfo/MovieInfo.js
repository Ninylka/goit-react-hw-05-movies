import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { ContainerInfo, ContainerMovieInfo, FotoMovieInfo, Genres, GenresItem, GenresList, Overview, OverviewSpan, TitleMovieInfo, Userscore, UserscoreSpan } from './MovieInfo.styled';

const ImgBaseURL = "https://image.tmdb.org/t/p/w500";
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
export const MovieInfo = ({movie}) => {
 

  return (
    <>
    <ContainerMovieInfo>
      <FotoMovieInfo 
      
      src={movie.poster_path ? `${ImgBaseURL}/${movie.poster_path}` : defaultImg}  width={250} height={375}
      alt={movie.title} 
      
      />
      <ContainerInfo>
        <TitleMovieInfo>{movie.title}</TitleMovieInfo>
        <Userscore><UserscoreSpan>User score:</UserscoreSpan>{(movie.vote_average* 10).toFixed(0)}%</Userscore>
        <Overview><OverviewSpan>Overview:</OverviewSpan>{movie.overview}</Overview>
        <Genres>Genres</Genres>
        <GenresList>
            {movie.genres.map(genre => (
              <GenresItem key={genre.id}>{genre.name}</GenresItem>
            ))}
        </GenresList>
        <AdditionalInformation/>
      </ContainerInfo>
    </ContainerMovieInfo>
    </>
  );
};

