import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Cart } from "../pages/Carrinho";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <div>home</div>
      </Route>
      <Route exact path="/carrinho">
        <Cart />
      </Route>
    </Switch>
  );
}
