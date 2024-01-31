import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

// Create a slice for the counter with actions and reducer
const counterSlice = createSlice({
  name: 'counter', // Unique name for this slice
  initialState,    // Initial state of the counter

  // Reducer functions define how the state should change in response to actions
  reducers: {

    increment: (state, action) => { state.value += action.payload; },

    decrement: (state, action) => { state.value -= action.payload; },

    // Increment the counter by a specified amount (payload)
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

// Extract action creators from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
