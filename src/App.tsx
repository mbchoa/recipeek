import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './redux/store';

import Footer from './components/Footer';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const Main = styled.main`
  flex: 1 0 auto;
`;

const App = () => (
  <Provider store={store}>
    <Header />
    <Main>
      <SearchForm />
      <SearchResults />
    </Main>
    <Footer />
  </Provider>
);

export default App;
