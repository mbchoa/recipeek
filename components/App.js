import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import apiHelper from '../utils/apiHelper';
import dummyData from '../dummyData';

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
    console.log(`search for something: ${this.state.searchInput}`);
    this.setState({ recipesData: dummyData.recipes });

    // apiHelper.search(this.state.searchInput)
    //   .then(apiHelper.checkStatus)
    //   .then(apiHelper.parseJSON)
    //   .then(data => this.setState({ recipesData: data.recipes }))
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <SearchBar
          onTextChange={this.handleSearchTextChange}
          onSubmitSearch={this.handleSubmitSearch} />
        <RecipeList recipesData={this.state.recipesData} />
      </div>
    );
  }
}

module.exports = App;
