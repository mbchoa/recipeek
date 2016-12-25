import React, { Component } from 'react';

const searchBarStyle = {
  textAlign: 'center',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSearchTextChange(e) {
      this.setState({ searchInput: e.target.value });
    }

  handleSubmitSearch(e) {
    e.preventDefault();

    const { getRecipes } = this.props;
    getRecipes(this.state.searchInput);
  }

  render() {
    const { getRecipes } = this.props;
    return (
      <form onSubmit={ this.handleSubmitSearch }>
        <input
          style={searchBarStyle}
          className="form-control"
          type="text"
          placeholder="Search for a recipe"
          onChange={ this.handleSearchTextChange } />
      </form>
    );
  }
}

export default SearchBar;