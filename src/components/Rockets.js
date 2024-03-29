import { useSelector, useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { fetchRockets, reserveRocketsAction, cancelRocketsAction } from '../Redux/rockets/rockets';
import '../styles/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  const reserveRocket = (id) => dispatch(reserveRocketsAction(id));
  const cancelRocketReservation = (id) => dispatch(cancelRocketsAction(id));

  return (
    <div className="rockets-container">
      {rockets.map(({
        id, name, description, images, reserved,
      }) => (
        <div className="rocket-container" key={id}>
          <div className="rocket-image">
            <img src={images[0]} alt="" />
          </div>

          <div className="rocket-content-container">
            <h1 className="rocket-name">{name}</h1>
            <p className="rocket-description">
              {reserved && <button type="button" className="show-Reserve">Reserved</button>}
              {description}
            </p>
            {!reserved && (
              <button onClick={() => reserveRocket(id)} className="rocket-reserve-button" type="button">
                Reserve Rocket
              </button>
            )}
            {reserved && (
              <button onClick={() => cancelRocketReservation(id)} className="rocket-cancel-button" type="button">
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
