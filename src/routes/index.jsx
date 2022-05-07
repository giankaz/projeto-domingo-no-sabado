import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
