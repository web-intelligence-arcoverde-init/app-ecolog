import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

interface User {
  name: string;
}

export interface PointCollectRecycle {
  id: number;
  name: string;
  type: string;
  telphoneNumber: string;
  datails: string;
  location: {
    latitude: number;
    longitude: number;
  };
  status: string;
  user: User;
}

interface PointCollectRecyclingState {
  points: PointCollectRecycle[];
  loading: boolean;
  visibleButtonAddNewPointCollect: boolean;
}

const initialState: PointCollectRecyclingState = {
  points: [],
  loading: false,
  visibleButtonAddNewPointCollect: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createNewPointRequest: (
      state,
      action: PayloadAction<PointCollectRecycle>,
    ) => {
      state.points = [...state.points, action.payload];
    },
    changeVisibilityButtonAddNewPointCollect: state => {
      state.visibleButtonAddNewPointCollect =
        !state.visibleButtonAddNewPointCollect;
    },
  },
});

export const {createNewPointRequest, changeVisibilityButtonAddNewPointCollect} =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
