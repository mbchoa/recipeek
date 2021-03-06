import React from 'react';
import styled from 'styled-components';

import space from '../enums/space';
import { EdamamRecipe } from '../types/edamam';
import { titleCase } from '../utils';

import LazyLoadImage from './LazyLoadImage';
import NutritionOverlay from './NutritionOverlay';

const Block = styled.a`
  background-color: white;
  border-radius: 5px;
  color: black;
  display: block;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.2s;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 26px,
      rgba(0, 0, 0, 0.08) 0px 2px 8px;
  }
`;

const Header = styled.header`
  margin: ${space['sp-16']};
`;

const RecipeTitle = styled.h2`
  font-size: ${space['sp-16']};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RecipeAuthor = styled.p`
  font-size: ${space['sp-12']};
  margin: 0;
`;

const Content = styled.div`
  position: relative;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s;
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

  ${Block}:hover & {
    filter: blur(3px);
  }
`;

const NutritionOverlayLayout = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s;
  width: 100%;

  ${Block}:hover & {
    opacity: 1;
  }
`;

const SearchResultsItem = React.forwardRef(
  (
    {
      calories,
      image,
      label,
      source,
      totalNutrients,
      url,
      yield: numServings
    }: EdamamRecipe,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const formattedLabel: string = titleCase(label);
    return (
      <Block ref={ref} href={url} target="_blank" rel="noopener noreferrer">
        <Header title={formattedLabel}>
          <RecipeTitle>{formattedLabel}</RecipeTitle>
          <RecipeAuthor>{source}</RecipeAuthor>
        </Header>
        <Content>
          <Frame>
            <Canvas>
              <RecipeImage src={image} alt={formattedLabel} />
            </Canvas>
          </Frame>
          <NutritionOverlayLayout>
            <NutritionOverlay
              calories={calories}
              numServings={numServings}
              totalNutrients={totalNutrients}
            />
          </NutritionOverlayLayout>
        </Content>
      </Block>
    );
  }
);

export default SearchResultsItem;
