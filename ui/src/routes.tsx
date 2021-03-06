import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home2 from './pages/Home2';
import Landing from './pages/Landing';
import Listing from './pages/Listing';
import Private from './pages/Private';
import Pricing from './pages/Pricing';
import Registration from './pages/Registration';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/lists' component={Listing} />
        <Route path='/home2' component={Home2} />
        <Route path='/private' component={Private} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;