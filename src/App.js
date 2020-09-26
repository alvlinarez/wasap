import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import NewCategory from './containers/NewCategory';
import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-category" component={NewCategory} />
      </Switch>
    </BrowserRouter>
  );
};
