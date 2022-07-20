/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import { fetchRocketsAction, reserveRocketsAction, cancelRocketsAction } from "../Redux/rockets/rockets";
import "../styles/rockets.css";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocketsAction);
    }
  });

  const reserveRocket = (id) => dispatch(reserveRocketsAction(id));
  const cancelRocketReservation = (id) => dispatch(cancelRocketsAction(id));

  return (
    <div className="rockets-container">
      {rockets.map(({
        id, name, description, images
      }) => (
        <div className="rocket-container" key={id}>
          <div className="rocket-image">
            <img src={images[0]} alt="" />
          </div>

          <div className="rocket-content-container">
            <h1 className="rocket-name">{name}</h1>
            <p className="rocket-description">{description}</p>
            <button onClick={() => reserveRocket(id)} className="rocket-button" type="button">
              Reserve Rocket
            </button>
            <button onClick={() => cancelRocketReservation(id)} className="rocket-button" type="button">
              Cancel Reservation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
