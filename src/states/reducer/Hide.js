import { createSlice } from "@reduxjs/toolkit";

export const HideAndShow = createSlice({
  name: "HeaderRemover",
  initialState: true,
  reducers: {
    Hide: (state, actions) => {
      state(false);
    },
  },
});

export const { Hide } = HideAndShow.actions;
export default HideAndShow.reducer;
