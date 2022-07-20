/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable  no-return-assign  */
/* eslint-disable  no-param-reassign  */
import React from "react";
import { useSelector } from "react-redux";
import "../styles/myProfile.css";

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <div className="container">
        <div className="rockets">
          <h1 className="rockets-heading">Rockets</h1>
          {reservedRockets.map((rocket) => (
            <>
              <p className="eachRocket">{rocket.name}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
