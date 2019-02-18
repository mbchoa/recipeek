import React from 'react';
import { connect } from 'react-redux';

import { EdamamHit } from '../types/edamam';

type SearchResultsProps = {
  results: EdamamHit[],
}

const SearchResults = ({ results }: { results: EdamamHit[]}) => (
  <div className="search-results">
    {results.map((hit: EdamamHit) => (
      <pre>{JSON.stringify(hit, null, 2)}</pre>
    ))}
  </div>
);

const mapStateToProps = (state: any) => ({
  results: state.search.results,
});

export default connect(mapStateToProps)(SearchResults);
