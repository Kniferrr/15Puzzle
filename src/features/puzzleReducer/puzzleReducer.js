// reducers.js
import {
  MOVE_TILE,
  SHUFFLE_PUZZLE,
  ON_COMPLITE_PUZZLE,
  GRID_SIZE_CHANGE,
} from "../../actions";

const initialState = {
  puzzle: [],
  gridSize: 4,
  complitePuzzle: false,
};

const puzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TILE:
      const { clickedIndex, emptyIndex } = action.payload;
      // Обновление состояния игры
      const updatedPuzzle = [...state.puzzle];
      [updatedPuzzle[clickedIndex], updatedPuzzle[emptyIndex]] = [
        updatedPuzzle[emptyIndex],
        updatedPuzzle[clickedIndex],
      ];
      return { ...state, puzzle: updatedPuzzle };
    case SHUFFLE_PUZZLE:
      const numbers = action.payload;
      return { ...state, puzzle: numbers, complitePuzzle: false };
    case ON_COMPLITE_PUZZLE:
      return { ...state, complitePuzzle: true };
    case GRID_SIZE_CHANGE:
      const newGridSize = action.payload;
      return { ...state, gridSize: newGridSize };
    default:
      return state;
  }
};

export default puzzleReducer;
