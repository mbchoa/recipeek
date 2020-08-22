import React, { useState } from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import useDarkMode from './hooks/useDarkMode';
import { darkTheme, lightTheme } from './theme';

import DarkModeButton from './components/DarkModeButton';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import SearchForm from './components/SearchForm';
import SearchResultsController from './components/SearchResultsController';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
            <Main>
              <DarkModeButton onClick={setTheme as () => void} />
              <Switch>
                <Route exact path="/">
                  <SearchForm />
                  <SearchResultsController />
                </Route>
              </Switch>
            </Main>
            <Footer />
          </>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
