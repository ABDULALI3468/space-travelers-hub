import { createAsyncThunk } from '@reduxjs/toolkit';
import MissionsService from '../../services/MissionsService';

const RETRIEVE_ASYNC_MISSIONS = 'space-travelers-hub/missions/RETRIEVE_MISSIONS';
const RETRIEVE_MISSIONS = 'space-travelers-hub/missions/RETRIEVE_MISSIONS/fulfilled';

const initialState = [];

export const retrieveMissions = createAsyncThunk(
  RETRIEVE_ASYNC_MISSIONS,
  async () => {
    const res = await MissionsService.getMissions();
    const { data } = res;
    return data;
  },
);

const missions = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return [...state, action.data];
    default:
      return state;
  }
};

export default missions;
