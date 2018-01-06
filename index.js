import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';

import configureStore from './redux/store/configureStore';
import initialState from './redux/store/initialState';

const store = configureStore(initialState);

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.API_PROTOCOL}://${process.env.API_DOMAIN}:${process.env.PORT-1}/graphql`
  }),
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
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
