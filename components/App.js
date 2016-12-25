import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../redux/actions';

import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { 
      getRecipes,
      recipes,
    } = this.props;

    return (
      <div>
        <h1 className="text-center">Recipeek</h1>
        <SearchBar {...{ getRecipes } } />
        <RecipeList {...{ recipes } } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { recipes } = state;
  return { recipes }; 
}

export default connect(
  mapStateToProps,
  { getRecipes }
)(App);