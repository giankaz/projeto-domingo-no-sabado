import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import React from "react";
import ProductPage from "../pages/productPage";
import { useHistory } from 'react-router-dom';

export default function Routes() {

  const history = useHistory();

  const handleClick = () => {
      history.push("/login")
  }

  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/productPage">
        <ProductPage />
      </Route>
        <Route exact path='/'>
            <div>home</div>
            <button onClick={handleClick}>Login</button>
        </Route>
    </Switch>
  );
}
