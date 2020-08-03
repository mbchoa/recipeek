import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { search } from '../redux/actions';
import { hasRecipes, isSearchPending } from '../redux/selectors';
import { space } from '../enums/space';
import { size } from '../enums/typography';

import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import Spinner from './Spinner';

const Header = styled.header`
  font-size: ${size['giga']};
  margin: 0 0 ${space['sp-48']};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: ${space['sp-12']} 0;
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
  margin-left: ${space['sp-8']};
  outline: none;
  padding: ${space['sp-8']};
  transition: 0.25s;
  width: 48px;

  &:hover {
    background-color: #34699a;
  }
`;

type SearchFormProps = {
  hasRecipes: boolean;
  isSearchPending: boolean;
  search: (input: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  hasRecipes,
  isSearchPending,
  search
}) => {
  const [input, setInput] = useState('');

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    search(input);
  }

  return (
    <section>
      {hasRecipes && (
        <Header>
          <p>Looking for some good eats?</p>
          <p>Go on and give the search a whirl.</p>
          <p>You won't be disappointed.</p>
        </Header>
      )}
      <Form onSubmit={handleSubmit}>
        <Input
          aria-label="Search"
          onChange={handleChange}
          placeholder="Enter ingredients"
          value={input}
        />
        <Button aria-label="Search" type="submit">
          {isSearchPending ? <Spinner width={24} /> : <SearchIcon />}
        </Button>
      </Form>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  hasRecipes,
  isSearchPending
});

export default connect(
  mapStateToProps,
  { search }
)(SearchForm);
