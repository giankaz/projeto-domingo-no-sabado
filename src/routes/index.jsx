import { Route, Switch, useHistory } from "react-router-dom";
import Login from "../pages/Login";
import ProductPage from "../pages/productPage";
import Register from "../pages/Register";

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
