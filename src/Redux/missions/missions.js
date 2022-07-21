import { createAsyncThunk } from '@reduxjs/toolkit';
import MissionsService from '../../services/MissionsService';

const RETRIEVE_ASYNC_MISSIONS = 'space-travelers-hub/missions/RETRIEVE_MISSIONS';
const RETRIEVE_MISSIONS = 'space-travelers-hub/missions/RETRIEVE_MISSIONS/fulfilled';
const RESERVE_MISSION = 'space-travelers-hub/missions/RESERVE_MISSION';
const CANCEL_RESERVATION = 'space-travelers-hub/missions/CANCEL_RESERVATION';

const initialState = [];

export const retrieveMissions = createAsyncThunk(
  RETRIEVE_ASYNC_MISSIONS,
  async () => {
    const res = await MissionsService.getMissions();
    const { data } = res;
    const payload = data.map((fragment) => ({
      mission_id: fragment.mission_id,
      mission_name: fragment.mission_name,
      description: fragment.description,
    }));
    return payload;
  },
);

export const reserveMission = (payload) => ({ type: RESERVE_MISSION, payload });

export const cancelReservation = (payload) => ({ type: CANCEL_RESERVATION, payload });

const missions = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.payload;
    case RESERVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case CANCEL_RESERVATION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missions;
