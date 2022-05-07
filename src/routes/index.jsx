import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Register from '../pages/Register'

export default function Routes() {
  return (
    <Switch>
        <Route exact path='/' >
            <div>home</div>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
    </Switch>
  )
}
