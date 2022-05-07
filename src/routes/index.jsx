import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import React from "react";
import ProductPage from "../pages/productPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/productPage">
        <ProductPage />
      </Route>
    </Switch>
  );
}
