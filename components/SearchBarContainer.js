import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
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
      <SearchBar
        onTextChange={this.handleSearchTextChange}
        onSubmitSearch={this.handleSubmitSearch} />
    );
  }
}

module.exports = SearchBarContainer;
