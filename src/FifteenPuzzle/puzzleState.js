import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { isValidMove, isPuzzleSolved } from "./puzzleAction";

const usePuzzleStore = create()(
  immer((set) => ({
    puzzle: [],
    gridSize: 4,
    complitePuzzle: false,
    gridSizeChange: (newGridSize) =>
      set((state) => {
        state.gridSize = newGridSize;
      }),
    onComplitePuzzle: () =>
      set((state) => {
        state.complitePuzzle = true;
      }),
    shufflePuzzle: () =>
      set((state) => {
        const realGridSize = Math.pow(state.gridSize, 2);
        const numbers = Array.from({ length: realGridSize }, (_, i) => i);
        for (let i = numbers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        state.puzzle = numbers;
        state.complitePuzzle = false;
      }),
    moveTile: ({ clickedIndex, emptyIndex }) =>
      set((state) => {
        const realGridSize = Math.pow(state.gridSize, 2);
        const puzzle = state.puzzle;
        let newComplitePuzzle = state.complitePuzzle;
        const updatedPuzzle = [...state.puzzle];
        if (isValidMove(clickedIndex, emptyIndex, puzzle)) {
          [updatedPuzzle[clickedIndex], updatedPuzzle[emptyIndex]] = [
            updatedPuzzle[emptyIndex],
            updatedPuzzle[clickedIndex],
          ];
          if (isPuzzleSolved(realGridSize, updatedPuzzle)) {
            newComplitePuzzle = true;
          } else {
            newComplitePuzzle = false;
          }
        }
        state.puzzle = updatedPuzzle;
        state.complitePuzzle = newComplitePuzzle;
      }),
  }))
);

export default usePuzzleStore;
