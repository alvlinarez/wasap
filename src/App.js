import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Home from './containers/Home';
import NewCategory from './containers/NewCategory';
import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-category" component={NewCategory} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
