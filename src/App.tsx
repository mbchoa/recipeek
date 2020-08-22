import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';

import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import SearchResultsController from './components/SearchResultsController';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
`;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Main>
        <Switch>
          <Route exact path="/">
            <SearchForm />
            <SearchResultsController />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Provider>
  </BrowserRouter>
);

export default App;
