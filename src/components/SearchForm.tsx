import React, { useState } from 'react';
import styled from 'styled-components';

import { search } from '../api/edamam';

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

const SearchForm = () => {
  const [input, setInput] = useState('');
  function handleChange(e: any) {
    setInput(e.target.value);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await search(input);
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleChange} placeholder="Enter ingredients" value={input} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
