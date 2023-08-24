import { configureStore } from "@reduxjs/toolkit";
import main from "./features/main/mainRedix.js";
import puzzleReducer from "./features/puzzleReducer/puzzleReducer.js";

export const store = configureStore({
  reducer: {
    main: main,
    puzzleReducer: puzzleReducer,
  },
});
