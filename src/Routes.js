import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from './views/Login';
import Company from './views/Company';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Company} />
      </Switch>
    );
  }
}

export default Routes;
