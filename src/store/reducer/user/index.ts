import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

// Define a type for the slice state
interface UserState {
  latitude: string;
  longitude: string;
}

// Define the initial state using that type
const initialState: UserState = {
  latitude: '0',
  longitude: '0',
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.latitude = '1';
    },
    decrement: state => {
      state.latitude = '1';
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<any>) => {
      state.latitude = action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
