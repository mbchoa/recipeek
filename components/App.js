import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import apiHelper from '../utils/apiHelper';

export default class App extends Component {
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

    apiHelper.search(this.state.searchInput)
      .then(apiHelper.checkStatus)
      .then(apiHelper.parseJSON)
      .then(data => this.setState({ recipesData: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Recipeek</h1>
        <SearchBar
          onTextChange={this.handleSearchTextChange}
          onSubmitSearch={this.handleSubmitSearch} />
        <RecipeList recipesData={this.state.recipesData} />
      </div>
    );
  }
}
