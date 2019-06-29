import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { EdamamHit } from '../types/edamam';

import SearchResultsItem from './SearchResultsItem';

type SearchResultsProps = {
  results: EdamamHit[];
};

const SearchResultsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0 auto;
  max-width: ;
  padding: 0;
`;

const SearchResults = ({ results }: SearchResultsProps) => (
  <SearchResultsList>
    {results.map(({ recipe }) => (
      <li>
        <SearchResultsItem {...recipe} />
      </li>
    ))}
  </SearchResultsList>
);

const mapStateToProps = (state: any) => ({
  results: state.search.results
});

export default connect(mapStateToProps)(SearchResults);
