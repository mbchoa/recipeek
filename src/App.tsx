import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';

import Footer from './components/Footer';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const Main = styled.main`
  flex: 1 0 auto;
`;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SearchForm />
            <SearchResults />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Provider>
  </BrowserRouter>
);

export default App;
