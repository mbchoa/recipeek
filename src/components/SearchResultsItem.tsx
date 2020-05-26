import React from 'react';
import styled from 'styled-components';

import { EdamamRecipe } from '../types/edamam';
import { titleCase } from '../utils';
import { space } from '../enums/space';

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
  margin: ${space['sp-16']};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Frame = styled.figure`
  background-color: gray;
  display: block;
  height: 0;
  margin: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
`;

const Canvas = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const RecipeImage = styled(LazyLoadImage)`
  border-radius: 0 0 5px 5px;
  display: block;
  object-fit: cover;
  width: 100%;
`;

const SearchResultsItem = React.forwardRef(
  ({ image, label }: EdamamRecipe, ref: React.Ref<HTMLElement>) => {
    const formattedLabel: string = titleCase(label);
    return (
      <Block ref={ref}>
        <Header title={formattedLabel}>{formattedLabel}</Header>
        <Frame>
          <Canvas>
            <RecipeImage src={image} alt={formattedLabel} />
          </Canvas>
        </Frame>
      </Block>
    );
  }
);

export default SearchResultsItem;
