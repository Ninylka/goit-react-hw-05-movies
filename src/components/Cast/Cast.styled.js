import styled from "styled-components";


export const ListCast = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
`
export const StyledCastItem = styled.div`
  width: 250px;
  text-align: center;
   `

export const ImgCastItem = styled.img`
width: 100%;
max-height: 375px;
border-radius: 8px;
margin-bottom: 10px;


`
export const NameCast = styled.h3`
font-family: 'roboto';
 color: #090;
 margin-bottom: 12px;

`

export const CharacterCast = styled.p`
font-family: 'roboto';
color: #424949;
`
export const SpanCharacterCast = styled.span`
font-family: 'roboto';
font-weight: 600;
color: #424949;
`
export const NoActorsText = styled.p`
font-family: 'roboto';
font-weight: 600;
font-size: 20px;
`