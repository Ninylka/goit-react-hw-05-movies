import styled from "styled-components";

export const ContainerForm = styled.div`
padding: 12px 24px;
`
export const SearchForm = styled.form`
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  
`

export const SearchFormInput  = styled.input`
height: 100%;
font-size: 20px;
font-weight: 500;
font-family: 'roboto';
outline: none;
padding: 4px 10px;
outline: none;
margin-right: 20px;
border-radius: 12px;
border: 1px solid #6f6;
outline: none;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover {
      border: 1px solid #090;
  }
   
`


export const ButtonLabel = styled.label`
  margin-left: 10px;
`


export const SearchFormButton = styled.button`
 background-color: #6f6;
 display: flex;
 align-items: center;
 justify-content: center;
  border: 0;
  cursor: pointer;
  outline: none;
  min-width: 120px;
font-size: 20px;
font-weight: 600;
font-family: 'roboto';
border-radius: 12px;
padding: 4px 10px;
color: #333;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover {
    background-color: #090;}
  

`