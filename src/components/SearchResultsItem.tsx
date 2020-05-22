import React from 'react';
import styled from 'styled-components';

import { EdamamRecipe } from '../types/edamam';

const Block = styled.article`
  max-width: 300px;
`;

const Header = styled.h2`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RecipeImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const SearchResultsItem = ({ image, label }: EdamamRecipe) => (
  <Block>
    <Header title={label}>{label}</Header>
    <RecipeImage src={image} />
  </Block>
);

export default SearchResultsItem;
