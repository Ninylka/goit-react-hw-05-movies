import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const ContainerHeader = styled.header`
display: flex;
align-items: center;
justify-content: start;
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #6f6; 
min-height: 70px;
border-radius: 10px;
`
export const PageNav = styled.nav`
display: flex;
  align-items: center;
`

export const HeasderList = styled.ul`
display: flex;
      align-items: center;
      margin-left: 20px;
`
export const HeaderItem = styled.li`
margin-right: 40px;
&:last-child {
    margin-right: 0;
  }
`
export const StyledNavLink = styled(NavLink)`
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