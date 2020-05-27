import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EdamamHit } from '../types/edamam';
import { allRecipes } from '../redux/selectors';

import SearchResultsItem from './SearchResultsItem';

type SearchResultsProps = {
  allRecipes: EdamamHit[];
};

const Block = styled.section`
  margin: 0 auto;
  max-width: 954px;
`;

const SearchResultsList = styled.ul`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(3, 302px);
  grid-gap: 24px;
  padding: 0;
  width: 100%;
`;

const SearchResults = ({ allRecipes }: SearchResultsProps) => (
  <Block>
    <SearchResultsList>
      {allRecipes.map(({ recipe }) => (
        <li key={recipe.label}>
          <SearchResultsItem {...recipe} />
        </li>
      ))}
    </SearchResultsList>
  </Block>
);

const mapStateToProps = createStructuredSelector({ allRecipes });

export default connect(mapStateToProps)(SearchResults);
