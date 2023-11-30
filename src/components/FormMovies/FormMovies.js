import { useState } from 'react';
import { SearchForm, SearchFormButton, ButtonLabel, SearchFormInput, ContainerForm } from './FormMovies.styled';
import { SlMagnifier }  from "react-icons/sl";


export const FormMovies =({ onSubmit }) => {

    const [query, setQuery] = useState('');
 
    const handleChange =(e) => {
      setQuery(e.target.value);
    }

      const handleSubmit = (e) => {
        e.preventDefault()
             
              if (query.trim() === '') {
                alert('Please enter a search query!');
                return;
            }
            onSubmit(query);
            setQuery('');
           
          }
      
        return (
          <ContainerForm>
            <SearchForm  onSubmit = {handleSubmit}>
              <SearchFormInput
                      type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={handleChange}
                value={query}
              />

<SearchFormButton  type="submit" >
              < SlMagnifier/>
                <ButtonLabel>Search</ButtonLabel>
              </SearchFormButton>

            </SearchForm>
            </ContainerForm>
          );
    }
 


  