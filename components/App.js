import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import apiHelper from '../utils/apiHelper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      recipesData: [],
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSearchTextChange(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    console.log(`search for: ${this.state.searchInput}`);

  }

  render() {
    return (
      <div>
        <SearchBar
          onTextChange={this.handleSearchTextChange}
          onSubmitSearch={this.handleSubmitSearch} />
        <RecipeList recipesArr={this.state.recipesData} />
      </div>
    );
  }
}

module.exports = App;
