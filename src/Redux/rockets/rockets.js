/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const BASE_ROCKET_URL = "https://api.spacexdata.com/v3/rockets";

const FETCH_ROCKETS = "FETCH_ROCKETS";
const RESERVE_ROCKETS = "RESERVE_ROCKETS";
const CANCEL_ROCKET_RESERVE = "CANCEL_ROCKET_RESERVE";
const rockets = [];

export const fetchRocketsAction = (rockets) => ({
  type: FETCH_ROCKETS,
  rockets,
});

export const reserveRocketsAction = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

export const cancelRocketsAction = (id) => ({
  type: CANCEL_ROCKET_RESERVE,
  id,
});

const fetchRockets = async (dispatch) => {
  const response = await fetch(BASE_ROCKET_URL);
  const data = await response.json();
  dispatch(
    fetchRocketsAction(
      data.map((eachRocket) => ({
        id: eachRocket.rocket_id,
        name: eachRocket.rocket_name,
        type: eachRocket.rocket_type,
        description: eachRocket.description,
        images: eachRocket.flickr_images,
      }))
    )
  );
};

export const rocket = (state = rockets, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.rockets;
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

export default fetchRockets;
