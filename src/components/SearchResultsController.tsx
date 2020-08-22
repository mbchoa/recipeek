import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { allRecipes } from '../redux/selectors';
import { EdamamHit } from '../types/edamam';

import Spinner from './Spinner';

type SearchResultsProps = {
  allRecipes: EdamamHit[];
};

const SearchResults = React.lazy(() => import('./SearchResults'));

const LazySearchResults = () => (
  <Suspense fallback={<Spinner width={36} />}>
    <SearchResults />
  </Suspense>
);

const SearchResultsController: React.FC<SearchResultsProps> = ({
  allRecipes
}) => (allRecipes.length ? <LazySearchResults /> : null);

const mapStateToProps = createStructuredSelector({ allRecipes });

export default connect(mapStateToProps)(SearchResultsController);
