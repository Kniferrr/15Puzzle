export const MOVE_TILE = "MOVE_TILE";

export const moveTile = (clickedIndex, emptyIndex) => ({
  type: MOVE_TILE,
  payload: { clickedIndex, emptyIndex },
});
