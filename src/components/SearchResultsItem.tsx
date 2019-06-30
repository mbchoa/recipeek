import React from 'react';
import styled from 'styled-components';

import { EdamamRecipe } from '../types/edamam';

const Block = styled.article`
  max-width: 300px;
`;

const Header = styled.h2`
  font-size: 18px;
`;

const RecipeImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const SearchResultsItem = ({ image, label }: EdamamRecipe) => (
  <Block>
    <Header>{label}</Header>
    <RecipeImage src={image} />
  </Block>
);

export default SearchResultsItem;
