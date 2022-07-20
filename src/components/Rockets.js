import React from 'react';
import { useDispatch } from 'react-redux';
import fetchRockets from '../Redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  dispatch(fetchRockets);

  return <div>The Rockets are listed here!</div>;
};

export default Rockets;
