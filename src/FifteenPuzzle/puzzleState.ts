import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { isValidMove, isPuzzleSolved } from "./puzzleAction";

interface PuzzleState {
  puzzle: number[];
  gridSize: number;
  complitePuzzle: boolean;
}

export interface PuzzleStateActions extends PuzzleState {
  gridSizeChange: (newGridSize: number) => void;
  onComplitePuzzle: () => void;
  shufflePuzzle: () => void;
  moveTile: (args: { clickedIndex: number; emptyIndex: number }) => void;
}

const initialState: PuzzleState = {
  puzzle: [],
  gridSize: 4,
  complitePuzzle: false,
};

const usePuzzleStore = create<PuzzleState & PuzzleStateActions>()(
  immer((set) => ({
    ...initialState,
    gridSizeChange: (newGridSize: number) =>
      set((state: PuzzleState) => {
        state.gridSize = newGridSize;
      }),
    onComplitePuzzle: () =>
      set((state: PuzzleState) => {
        state.complitePuzzle = true;
      }),
    shufflePuzzle: () =>
      set((state: PuzzleState) => {
        const realGridSize = Math.pow(state.gridSize, 2);
        const numbers = Array.from({ length: realGridSize }, (_, i) => i);
        for (let i = numbers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        state.puzzle = numbers;
        state.complitePuzzle = false;
      }),
    moveTile: ({
      clickedIndex,
      emptyIndex,
    }: {
      clickedIndex: number;
      emptyIndex: number;
    }) =>
      set((state: PuzzleState) => {
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
