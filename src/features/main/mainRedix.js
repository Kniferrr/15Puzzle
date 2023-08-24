import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const main = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = main.actions;

export default main.reducer;
