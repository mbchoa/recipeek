import React from 'react';
import styled from 'styled-components';

import { EdamamRecipe } from '../types/edamam';
import { titleCase } from '../utils';

import LazyLoadImage from './LazyLoadImage';

const Block = styled.article`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  :hover {
    border-color: #acacac;
    transform: scale(1.01);
  }
`;

const Header = styled.h2`
  font-size: 18px;
  margin: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RecipeImage = styled(LazyLoadImage)`
  object-fit: cover;
  width: 100%;
`;

const SearchResultsItem = ({ image, label }: EdamamRecipe) => {
  const formattedLabel: string = titleCase(label);
  return (
    <Block>
      <Header title={formattedLabel}>{formattedLabel}</Header>
      <RecipeImage src={image} alt={formattedLabel} />
    </Block>
  );
};

export default SearchResultsItem;
