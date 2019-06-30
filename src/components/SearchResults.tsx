import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { EdamamHit } from '../types/edamam';

import SearchResultsItem from './SearchResultsItem';

type SearchResultsProps = {
  results: EdamamHit[];
};

const Block = styled.section`
  padding-top: 8px;
`;

const SearchResultsList = styled.ul`
  display: grid;
  justify-content: center;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 24px;
  padding: 0;
`;

const SearchResults = ({ results }: SearchResultsProps) => (
  <Block>
    <SearchResultsList>
      {results.map(({ recipe }) => (
        <li key={recipe.label}>
          <SearchResultsItem {...recipe} />
        </li>
      ))}
    </SearchResultsList>
  </Block>
);

const mapStateToProps = (state: any) => ({
  results: state.search.results
});

export default connect(mapStateToProps)(SearchResults);
