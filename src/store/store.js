import { configureStore } from "@reduxjs/toolkit";
import main from "./reducers/mainRedux.js";
import puzzleReducer from "../FifteenPuzzle/reducers/puzzleReducer.js";

export const store = configureStore({
  reducer: {
    main: main,
    puzzleReducer: puzzleReducer,
  },
});
