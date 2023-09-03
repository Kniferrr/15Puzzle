export interface PuzzleState {
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
