import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from '../components/Missions';
import MyProfile from '../components/MyProfile';
import Rockets from '../components/Rockets';
import fetchRockets from '../Redux/rockets/rockets';

const Routes = () => {
  const dispatch = useDispatch();
  fetchRockets(dispatch);
  return (
    <Switch>
      <Route exact path="/" component={Rockets} />
      <Route path="/missions" component={Missions} />
      <Route path="/my-profile" component={MyProfile} />
    </Switch>
  );
};

export default Routes;
