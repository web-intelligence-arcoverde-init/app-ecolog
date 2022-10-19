import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

interface CoordinateState {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface UserState {
  coordinate: CoordinateState;
  loading?: boolean;
}

const initialState: UserState = {
  coordinate: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCoordinateUser: (state, action: PayloadAction<CoordinateState>) => {
      state.coordinate = action.payload;
    },
  },
});

export const {setCoordinateUser} = userSlice.actions;

export const userCoordinate = (state: RootState) => state.user.coordinate;

export default userSlice.reducer;
