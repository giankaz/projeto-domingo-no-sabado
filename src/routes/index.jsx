import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import ProductPage from '../pages/productPage'

export default function Routes() {
  
  return (
    <Switch>
        <Route exact path='/'>
            <div>home</div>
        </Route>
        <Route path='/productPage'>
          <ProductPage/>
        </Route>
    </Switch>
  )
}
