import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Missions";
import Products from "../pages/MyProfile";
import Contacts from "../pages/Rockets";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Routes;
