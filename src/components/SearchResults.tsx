import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EdamamHit } from '../types/edamam';
import { allRecipes } from '../redux/selectors';
import { device } from '../enums/device';
import { space } from '../enums/space';

import SearchResultsItem from './SearchResultsItem';

type SearchResultsProps = {
  allRecipes: EdamamHit[];
};

const Block = styled.section`
  display: flex;
  justify-content: center;
`;

const SearchResultsList = styled.ul`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(1, 302px);
  grid-gap: ${space['sp-24']};
  margin: 0;
  padding: 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 302px);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 302px);
  }
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
