import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

export default function Routes() {
  return (
    <Switch>
        <Route exact path='/'>
            <div>home</div>
        </Route>
    </Switch>
  )
}
