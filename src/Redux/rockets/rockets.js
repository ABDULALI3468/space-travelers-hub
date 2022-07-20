import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

const FETCH_ASYNC_ROCKETS = 'space-travelers-hub/rockets/FETCH_ROCKETS';
const FETCH_ROCKETS = 'space-travelers-hub/rockets/FETCH_ROCKETS/fulfilled';
const RESERVE_ROCKETS = 'space-travelers-hub/rockets/RESERVE_ROCKETS';
const CANCEL_ROCKET_RESERVE = 'space-travelers-hub/rockets/CANCEL_ROCKET_RESERVE';
const initialState = [];

export const reserveRocketsAction = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

export const cancelRocketsAction = (id) => ({
  type: CANCEL_ROCKET_RESERVE,
  id,
});

export const fetchRockets = createAsyncThunk(
  FETCH_ASYNC_ROCKETS,
  async () => {
    const response = await fetch(BASE_ROCKET_URL);
    const data = await response.json();
    const payload = data.map((eachRocket) => ({
      id: eachRocket.rocket_id,
      name: eachRocket.rocket_name,
      type: eachRocket.rocket_type,
      description: eachRocket.description,
      images: eachRocket.flickr_images,
    }));
    return payload;
  },
);

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.payload;
    }
    case RESERVE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET_RESERVE:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rockets;
