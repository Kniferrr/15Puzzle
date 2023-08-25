export const MOVE_TILE = "MOVE_TILE";
export const SHUFFLE_PUZZLE = "shufflePuzzle";
export const ON_COMPLITE_PUZZLE = "onComplitePuzzle";
export const GRID_SIZE_CHANGE = "gridSizeChange";

export const moveTile = (clickedIndex, emptyIndex) => ({
  type: MOVE_TILE,
  payload: { clickedIndex, emptyIndex },
});

export const shufflePuzzle = () => ({
  type: SHUFFLE_PUZZLE,
  payload: null,
});

export const onComplitePuzzle = () => ({
  type: ON_COMPLITE_PUZZLE,
  payload: null,
});

export const gridSizeChange = (newGridSize) => ({
  type: GRID_SIZE_CHANGE,
  payload: newGridSize,
});
