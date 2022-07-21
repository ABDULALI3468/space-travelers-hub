import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reserveMission, cancelReservation } from '../Redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;

  const joinMission = () => dispatch(reserveMission(mission.mission_id));

  const leaveMission = () => dispatch(cancelReservation(mission.mission_id));

  return (
    <tr>
      <td className="bold-text mission-name">{mission.mission_name}</td>
      <td className="description">{mission.description}</td>
      <td className="center-content">
        {!mission.reserved && (
        <Badge bg="secondary">NOT A MEMBER</Badge>
        )}
        {mission.reserved && (
        <Badge bg="primary">Active Member</Badge>
        )}
      </td>
      <td className="center-content">
        {!mission.reserved && (
        <Button variant="outline-secondary" onClick={() => joinMission()}>Join Mission</Button>
        )}
        {mission.reserved && (
        <Button variant="outline-danger" onClick={() => leaveMission()}>Leave Mission</Button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
