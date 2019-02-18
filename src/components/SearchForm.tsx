import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { search } from '../redux/actions';

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

type SearchFormProps = {
  search: (input: string) => void,
}

const SearchForm: React.FC<SearchFormProps> = ({ search }) => {
  const [input, setInput] = useState('');
  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    search(input)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleChange} placeholder="Enter ingredients" value={input} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default connect(null, { search })(SearchForm);
