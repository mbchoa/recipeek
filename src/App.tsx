import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './redux/store';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const CTAText = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 96px 18px;
  text-align: center;
`;

const App = () => (
  <Provider store={store}>
    <Header />
    <main>
      <CTAText>
        Looking for some good eats?
        <br />
        <br />
        Go on and give the search a whirl.
        <br />
        <br />
        You won't be disappointed.
      </CTAText>
      <SearchForm />
      <SearchResults />
    </main>
  </Provider>
);

export default App;
