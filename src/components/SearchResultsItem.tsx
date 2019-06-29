import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const RecipeImage = styled.img`
  border-radius: 5px;
  object-fit: cover;
`;

const SearchResultsItem = ({ image }: { image: string }) => (
  <Card>
    <RecipeImage src={image} />
  </Card>
);

export default SearchResultsItem;
