import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import Home from './containers/Home';
import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Home />
    </Provider>
  );
};
