import { ContainerHomeList, HomeListItem, LinkHomeListItem, TitleMoviesToday } from "./HomeList.styled"

export const HomeList = ({movies, location}) => {
    return (
        <ContainerHomeList>
      <TitleMoviesToday>Trending Movies Today</TitleMoviesToday>
     
      <ul>
        {movies.map((movie) => (
          <HomeListItem key={movie.id}>
          <LinkHomeListItem  to={`/movies/${movie.id}`}
           state={{ from: location }}
          >
          {movie.title || movie.name}
          </LinkHomeListItem>
          </HomeListItem>
          
        ))}
      </ul>
     
    </ContainerHomeList>
    )
}

