import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

class App extends PureComponent {
  static propTypes = {
    searchIngredient: PropTypes.string,
  };

  static defaultProps = {
    searchIngredient: '',
  };

  render() {
    const { searchIngredient } = this.props;
    return (
      <div>
        <h1 className="text-center">Recipeek</h1>
        <SearchBar />
        { searchIngredient && <RecipeList {...{ searchIngredient } } /> }
      </div>
    );
  }
}

export default connect(({ searchIngredient }) => ({ searchIngredient }))(App);
