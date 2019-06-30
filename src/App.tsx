import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const App = () => (
  <Provider store={store}>
    <Header />
    <main>
      <SearchForm />
      <SearchResults />
    </main>
  </Provider>
);

export default App;
