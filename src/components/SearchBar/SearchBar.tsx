
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
  }
`;

const SearchBar = (props : any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    props.onSearch(searchQuery);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
