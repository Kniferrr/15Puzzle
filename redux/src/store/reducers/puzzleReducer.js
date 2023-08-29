import { createSlice } from "@reduxjs/toolkit";
import { isValidMove, isPuzzleSolved } from "../actions/puzzleAction";

const initialState = {
  puzzle: [],
  gridSize: 4,
  complitePuzzle: false,
};

const puzzleReducer = createSlice({
  name: "puzzleReducer",
  initialState,
  reducers: {
    moveTile: (state, action) => {
      const realGridSize = Math.pow(state.gridSize, 2);
      const puzzle = state.puzzle;
      let newComplitePuzzle = state.complitePuzzle;
      const { clickedIndex, emptyIndex } = action.payload;
      const updatedPuzzle = [...state.puzzle];
      if (isValidMove(clickedIndex, emptyIndex, puzzle)) {
        [updatedPuzzle[clickedIndex], updatedPuzzle[emptyIndex]] = [
          updatedPuzzle[emptyIndex],
          updatedPuzzle[clickedIndex],
        ];
        if (isPuzzleSolved(realGridSize, puzzle)) {
          newComplitePuzzle = true;
        } else {
          newComplitePuzzle = false;
        }
      }
      // Обновление состояния игры

      return {
        ...state,
        puzzle: updatedPuzzle,
        complitePuzzle: newComplitePuzzle,
      };
    },
    shufflePuzzle: (state) => {
      const realGridSize = Math.pow(state.gridSize, 2);
      const numbers = Array.from({ length: realGridSize }, (_, i) => i);
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      return { ...state, puzzle: numbers, complitePuzzle: false };
    },
    onComplitePuzzle: (state) => {
      return { ...state, complitePuzzle: true };
    },
    gridSizeChange: (state, action) => {
      const newGridSize = action.payload;
      return { ...state, gridSize: newGridSize };
    },
  },
});

export const { moveTile, shufflePuzzle, onComplitePuzzle, gridSizeChange } =
  puzzleReducer.actions;

export default puzzleReducer.reducer;
