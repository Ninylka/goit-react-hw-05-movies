import styled from 'styled-components';
export const ContainerMovieInfo = styled.div`
    display: flex;
    padding: 12px 24px;

    margin-bottom: 15px;
    background-color: #EAF7E5;
    border-bottom: 1px solid #E7E9FC;
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`
export const FotoMovieInfo = styled.img`
width: 300px;
margin-right: 20px;
border-radius: 16px; 
`

export const ContainerInfo = styled.div`

`
export const TitleMovieInfo = styled.h2`

margin-bottom: 24px;
font-family: 'roboto';
padding-top: 24px;
    font-size: 32px;
    font-weight: 700;
    color: #424949;
    text-shadow: black 1px 1px 2px, black 1px 1px 2px;
`
export const Userscore = styled.p`
font-family: 'roboto';
font-size: 20px;
font-weight: 700;
color: #424949;
margin-bottom: 12px;

`
export const UserscoreSpan = styled.span`
 color: #090;
 margin-right: 12px;
`

export const Overview = styled.p`
font-family: 'roboto';
font-size: 18px;
font-weight: 500;
color: #424949;
margin-bottom: 12px;

`
export const OverviewSpan = styled.span`
 color: #090;
 margin-right: 12px;
 font-size: 20px;
font-weight: 700;
`
export const Genres = styled.p`
font-family: 'roboto';
 color: #090;
 margin-bottom: 12px;
 font-size: 20px;
font-weight: 700;
padding-top: 24px;
`

export const GenresList = styled.ul`
display: flex;
`
export const GenresItem = styled.li`
margin-right: 12px;
&:last-child {
    margin-right: 0;
}
font-size: 18px;
font-weight: 500;
color: #424949;
margin-bottom: 12px;
font-family: 'roboto';

&::before {
    content: '•'; 
    font-size: 24px;
    margin-right: 8px; 
    color: #090; 
    display: inline-block;
    text-shadow: black 1px 1px 2px, black 1px 1px 2px;
  }
`