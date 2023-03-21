import { configureStore } from "@reduxjs/toolkit";
import countingStates from "./reducer/Redux";
import HideAndShow from "./reducer/Hide";

export default configureStore({
  reducer: {
    counter: countingStates,
    Remover: HideAndShow,
  },
});
