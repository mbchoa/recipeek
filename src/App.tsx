import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './redux/store';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const SearchFormDropZone = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Navbar />
      <SearchFormDropZone>
        <SearchForm />
      </SearchFormDropZone>
    </AppContainer>
  </Provider>
);

export default App;
