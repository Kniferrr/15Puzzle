import { configureStore } from "@reduxjs/toolkit";
import main from "./redusers/mainRedix.js";
import puzzleReducer from "./redusers/puzzleReducer.js";

export const store = configureStore({
  reducer: {
    main: main,
    puzzleReducer: puzzleReducer,
  },
});
