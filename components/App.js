import React, { PureComponent } from 'react';

import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

export default class App extends PureComponent {
  render() {
    const { recipes } = this.props;

    return (
      <div>
        <h1 className="text-center">Recipeek</h1>
        <SearchBar />
        <RecipeList />
      </div>
    );
  }
}
