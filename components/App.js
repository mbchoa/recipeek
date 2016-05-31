import React, { Component } from 'react';
import SearchBarContainer from './SearchBarContainer';
import RecipeList from './RecipeList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBarContainer />
        <RecipeList />
      </div>
    );
  }
}

module.exports = App;
