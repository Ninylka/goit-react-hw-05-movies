import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleAdditional = styled.h4`
margin-top: 24px;
font-size: 22px;
font-weight: 600;
color: #424949;
margin-bottom: 12px;
text-shadow: black 1px 1px 2px, black 1px 1px 2px;
margin-bottom: 24px;
`
export const AdditionalItem = styled.li`
margin-bottom: 12px;
&:last-child {
  margin-bottom: 0;
}
`

export const LinkAdditionalItem = styled(Link)`
font-family: 'roboto';
font-size: 22px;
font-weight: 600;
line-height: 1.3;
letter-spacing: 0.02em;
color: #090;
&:hover,
&:focus {
  text-shadow: black 1px 1px 2px, black 1px 1px 2px;
  color: #090;
}
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &.active {
  color: #090;
  text-shadow: black 1px 1px 2px, black 1px 1px 2px;
} 
`