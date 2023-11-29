import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContainerMoviesList = styled.div`
padding: 12px 24px;
`

export const MoviesListItem = styled.li`
margin-bottom: 10px;
&:last-child {
    margin-bottom: 0;
}

&::before {
    content: '•'; 
    font-size: 24px;
    margin-right: 8px; 
    color: #090; 
    display: inline-block;
    text-shadow: black 1px 1px 2px, black 1px 1px 2px;
  }
`

export const LinkMoviesListItem = styled(Link)`
font-family: 'roboto';
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0.02em;
    color: #333;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover {
    color: #090;
  }
`