import { configureStore } from "@reduxjs/toolkit";
import main from "./reducers/mainRedux.js";
import puzzleReducer from "../store/reducers/puzzleReducer.js";

export const store = configureStore({
  reducer: {
    main: main,
    puzzleReducer: puzzleReducer,
  },
});
