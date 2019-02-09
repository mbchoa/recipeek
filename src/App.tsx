import React from 'react';
import styled from 'styled-components';

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
  <AppContainer>
    <Navbar />
    <SearchFormDropZone>
      <SearchForm />
    </SearchFormDropZone>
  </AppContainer>
);

export default App;
