import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EdamamHit } from '../types/edamam';
import { fetchMoreRecipes } from '../redux/actions';
import { allRecipes, isFetchMoreRecipesPending } from '../redux/selectors';
import { device } from '../enums/device';
import { space } from '../enums/space';

import SearchResultsItem from './SearchResultsItem';
import Spinner from './Spinner';

type SearchResultsProps = {
  allRecipes: EdamamHit[];
  fetchMoreRecipes: () => void;
  isFetchMoreRecipesPending: boolean;
};

const Block = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${space['sp-32']} 0 ${space['sp-64']};
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

const SpinnerContainer = styled.div`
  height: 53px;
  margin-top: ${space['sp-36']};
`;

const SearchResults: React.FC<SearchResultsProps> = ({
  allRecipes,
  fetchMoreRecipes,
  isFetchMoreRecipesPending
}) => {
  const [prevYPos, setPrevYPos] = useState<number>(0);
  const lastItemRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        // ensure we are scrolling down the page
        if (
          entry.isIntersecting &&
          prevYPos < entry.boundingClientRect.bottom
        ) {
          setPrevYPos(entry.boundingClientRect.bottom);
          fetchMoreRecipes();
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    )
  );

  useEffect(() => {
    if (lastItemRef && lastItemRef.current) {
      observer.current.observe(lastItemRef.current as HTMLElement);
    }
  }, [allRecipes]);

  return (
    <Block>
      <SearchResultsList>
        {allRecipes.slice(0, allRecipes.length - 1).map(({ recipe }) => (
          <li key={recipe.label}>
            <SearchResultsItem {...recipe} />
          </li>
        ))}
        {!!allRecipes.length && (
          <li>
            <SearchResultsItem
              ref={lastItemRef}
              {...allRecipes[allRecipes.length - 1].recipe}
            />
          </li>
        )}
      </SearchResultsList>
      <SpinnerContainer>
        {isFetchMoreRecipesPending && <Spinner color="#113f67" width={50} />}
      </SpinnerContainer>
    </Block>
  );
};

const mapStateToProps = createStructuredSelector({
  allRecipes,
  isFetchMoreRecipesPending
});

const mapDispatchToProps = { fetchMoreRecipes };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
