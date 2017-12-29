import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

import configureStore from './redux/store/configureStore';
import initialState from './redux/store/initialState';

const store = configureStore(initialState);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
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
