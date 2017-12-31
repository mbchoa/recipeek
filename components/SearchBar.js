import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRecipes } from '../redux/actions';

const searchBarStyle = {
  textAlign: 'center',
};

class SearchBar extends Component {
  static propTypes = {
    getRecipes: PropTypes.func
  };

  state = {
    searchInput: ''
  };

  handleSearchTextChange = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.props.getRecipes(this.state.searchInput);
    this.setState({ searchInput: '' });
  }

  render() {
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

export default connect(null, { getRecipes })(SearchBar);
