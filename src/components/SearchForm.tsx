import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import space from '../enums/space';
import { search } from '../redux/actions';
import { isSearchPending } from '../redux/selectors';
import { size } from '../enums/typography';

import Header from './Header';
import Spinner from './Spinner';

const Section = styled.section`
  width: 100%;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${space['sp-12']} 0;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  padding: ${space['sp-12']} ${space['sp-8']};
  transition: 0.25s;
  width: calc(100% - ${space['sp-24']} * 2);
  max-width: 400px;

  &:hover {
    border-color: #34699a;
  }

  &::placeholder {
    text-align: center;
    transition: opacity 0.25s;
  }

  &:focus::placeholder {
    opacity: 0.5;
  }
`;

const Button = styled.button<{ isLoading: boolean }>`
  background-color: ${({ theme }) => theme.buttonBgColor};
  border: ${({ theme }) => theme.buttonBorder};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: ${size['hecto']};
  height: 44px;
  letter-spacing: 1px;
  margin-top: ${space['sp-36']};
  outline: none;
  padding: ${props =>
    props.isLoading ? 0 : `${space['sp-12']} ${space['sp-8']}`};
  text-transform: uppercase;
  transition: 0.25s;
  width: 160px;

  &:hover {
    background-color: #34699a;
    border-color: #34699a;
  }
`;

type SearchFormProps = {
  isSearchPending: boolean;
  search: (input: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ isSearchPending, search }) => {
  const [input, setInput] = useState('');

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    search(input);
  }

  return (
    <Section>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Input
          aria-label="Search"
          onChange={handleChange}
          placeholder="🍗      🍔      🍣      🍛"
          value={input}
        />
        <Button type="submit" isLoading={isSearchPending}>
          {isSearchPending ? <Spinner width={24} /> : 'Search'}
        </Button>
      </Form>
    </Section>
  );
};

const mapStateToProps = createStructuredSelector({
  isSearchPending
});

export default connect(
  mapStateToProps,
  { search }
)(SearchForm);
