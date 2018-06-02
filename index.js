import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './src/components/App';

import configureStore from './src/redux/store/configureStore';

import './styles/sheets/index.css';

const store = configureStore();

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component />
        </Provider>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./src/components/App', () => {
    render(App);
  });
}
