import { createSlice } from "@reduxjs/toolkit";

export const countingStates = createSlice({
  name: "calculater",
  initialState: 10,
  reducers: {
    inc: (state, Action) => {
      return (state += 1);
    },
    dec: (state, Action) => {
      return (state -= 1);
    },
    mul: (state, Action) => {
      return (state *= 2);
    },
    reset: (state, Action) => {
      return (state = 0);
    },
  },
});

export const { inc, dec, mul, reset } = countingStates.actions;
export default countingStates.reducer;
