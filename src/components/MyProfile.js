import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => (
    state.missions.filter((mission) => mission.reserved)
  ));

  return (
    <div className="profile-content">
      <section className="reserved-missions">
        <h1>My Missions</h1>
        <Table bordered>
          <tbody>
            {
            reservedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </section>

      <section className="reserved-rockets">
        <h1>My Rockets</h1>
        <Table bordered>
          <tbody>
            <tr>
              <td>Mission example</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default MyProfile;
