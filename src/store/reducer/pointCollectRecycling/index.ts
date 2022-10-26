import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

interface User {
  name: string;
}

interface Type {
  id: number;
  name: string;
  icon: any;
}

interface Contact {
  phone?: string;
  datails?: string;
}

interface Location {
  latitude?: number;
  longitude?: number;
}

export interface PointCollectRecycle {
  id?: number;
  type?: Type;
  contact?: Contact;
  location?: Location;
  status?: string;
  user?: User;
}

interface PointCollectRecyclingState {
  points: PointCollectRecycle[];
  point?: PointCollectRecycle;
  loading: boolean;
  visibleButtonAddNewPointCollect: boolean;
}

const initialState: PointCollectRecyclingState = {
  points: [],
  point: {},
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
      state.point = {};
    },
    changeVisibilityButtonAddNewPointCollect: state => {
      state.visibleButtonAddNewPointCollect =
        !state.visibleButtonAddNewPointCollect;
    },
    addPointCollectType: (state, action: PayloadAction<Type>) => {
      state.point = {...state.point, type: action.payload};
    },
    addPointCollectContact: (state, action: PayloadAction<Contact>) => {
      state.point = {...state.point, contact: action.payload};
    },
    addPointCollectLocation: (state, action: PayloadAction<Location>) => {
      state.point = {...state.point, location: action.payload};
    },
  },
});

export const {
  createNewPointRequest,
  addPointCollectType,
  addPointCollectContact,
  addPointCollectLocation,
  changeVisibilityButtonAddNewPointCollect,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
