import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSearchIngredient } from '../redux/actions';

class SearchBar extends Component {
  static propTypes = {
    setSearchIngredient: PropTypes.func
  };

  state = {
    searchInput: ''
  };

  handleSearchTextChange = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.props.setSearchIngredient(this.state.searchInput);
    this.setState({ searchInput: '' });
  }

  render() {
    return (
      <form className="search-bar" onSubmit={ this.handleSubmitSearch }>
        <div className="search-bar__input">
          <input
            className="search-bar__input-field form-control"
            type="text"
            placeholder="Search for a recipe..."
            onChange={ this.handleSearchTextChange }
            value={ this.state.searchInput } />
        </div>
      </form>
    );
  }
}

export default connect(null, { setSearchIngredient })(SearchBar);
