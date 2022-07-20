/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import fetchRockets from "../Redux/rockets/rockets";
import "../styles/rockets.css";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets);
    }
  });

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
            <button className="rocket-button" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
