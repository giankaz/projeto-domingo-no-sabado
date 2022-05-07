import React from 'react'
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

export default function Routes() {

  const history = useHistory();

  const handleClick = () => {
      history.push("/login")
  }

  return (
    <Switch>
        <Route exact path='/'>
            <div>home</div>
            <button onClick={handleClick}>Login</button>
        </Route>
    </Switch>
  )
}
