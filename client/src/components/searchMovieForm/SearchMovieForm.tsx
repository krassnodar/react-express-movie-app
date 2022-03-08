import {
  SearchForm,
  SearchInput,
  SearchButton,
  Icon,
  CloseIcon
} from './searchMovieForm.style';

import { BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import React from 'react';
import { useActions } from '../../hooks/useActions';

interface IProps {
  query: string;
  page: number;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
  setIsSearched: (state: boolean) => void;
  isSearched: boolean;
}

const SearchMovieForm = ({ page, query, setQuery, setPage, setIsSearched, isSearched }: IProps) => {
  const { searchMovies } = useActions();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    !isSearched && setPage(1);
    searchMovies(query, 1);
    setIsSearched(true);
  };

  const handleCloseFormButton = () => {
    setPage(1);
    setQuery('');
    setIsSearched(false)
  }

  return (
    <SearchForm onSubmit={handleFormSubmit}>
        <SearchInput 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
          value={query}
          placeholder='Search'
        />
        <CloseIcon 
          onClick={handleCloseFormButton}
          hidden={!query.length}
        >
          <IoMdClose />
        </CloseIcon>
        <SearchButton>
          <Icon>  
            <BiSearch />
          </Icon>
        </SearchButton>
      </SearchForm>
  )
}

export default SearchMovieForm;