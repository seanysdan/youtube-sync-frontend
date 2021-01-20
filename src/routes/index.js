import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import RoomPage from "./RoomPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/room/:id" component={RoomPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
