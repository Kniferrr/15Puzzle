import { createSlice } from "@reduxjs/toolkit";

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
      const { clickedIndex, emptyIndex } = action.payload;
      // Обновление состояния игры
      const updatedPuzzle = [...state.puzzle];
      [updatedPuzzle[clickedIndex], updatedPuzzle[emptyIndex]] = [
        updatedPuzzle[emptyIndex],
        updatedPuzzle[clickedIndex],
      ];
      return { ...state, puzzle: updatedPuzzle };
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
