import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #113f67;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;

  &:hover {
    border-color: #34699a;
  }
`;

const Button = styled.button`
  background-color: #113f67;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  margin-left: 8px;
  outline: none;
  padding: 8px;

  &:hover {
    background-color: #34699a;
  }
`;

const SearchForm = () => (
  <form>
    <Input placeholder="Enter ingredients" />
    <Button>Search</Button>
  </form>
);

export default SearchForm;
