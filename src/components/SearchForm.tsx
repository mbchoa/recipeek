import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { search } from '../redux/actions';

import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';

const CTAText = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 96px 18px;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

const Input = styled.input`
  border: 2px solid #113f67;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;
  transition: 0.25s;

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
  transition: 0.25s;
  width: 48px;

  &:hover {
    background-color: #34699a;
  }
`;

type SearchFormProps = {
  search: (input: string) => void;
  displayCta: boolean;
};

const SearchForm: React.FC<SearchFormProps> = ({ search, displayCta }) => {
  const [input, setInput] = useState('');

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    search(input);
  }

  return (
    <>
      {displayCta && (
        <CTAText>
          Looking for some good eats?
          <br />
          <br />
          Go on and give the search a whirl.
          <br />
          <br />
          You won't be disappointed.
        </CTAText>
      )}
      <StyledForm onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder="Enter ingredients"
          value={input}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </StyledForm>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  displayCta: state.search.results.length === 0
});

export default connect(
  mapStateToProps,
  { search }
)(SearchForm);
