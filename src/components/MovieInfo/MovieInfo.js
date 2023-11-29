import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { ContainerInfo, ContainerMovieInfo, FotoMovieInfo, Genres, GenresItem, GenresList, Overview, OverviewSpan, TitleMovieInfo, Userscore, UserscoreSpan } from './MovieInfo.styled';



const ImgBaseURL = "https://image.tmdb.org/t/p/w500";

export const MovieInfo = ({ movie, location }) => {
  return (
    <>
    <ContainerMovieInfo>
      <FotoMovieInfo src={`${ImgBaseURL}/${movie.poster_path}`} alt={movie.title} />
      <ContainerInfo>
        <TitleMovieInfo>{movie.title}</TitleMovieInfo>
        <Userscore><UserscoreSpan>User score:</UserscoreSpan>{(movie.vote_average* 10).toFixed(0)}%</Userscore>
        <Overview><OverviewSpan>Overview:</OverviewSpan>{movie.overview}</Overview>
        <Genres>Genres</Genres>
        <GenresList>
          {movie.genres &&
            movie.genres.map(genre => (
              <GenresItem key={genre.id}>{genre.name}</GenresItem>
            ))}
        </GenresList>
        <AdditionalInformation/>
       
      </ContainerInfo>
    </ContainerMovieInfo>
    </>
  );
};

