// reducers.js
import { MOVE_TILE } from "../../actions";

const initialState = {
  puzzle: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
};

const puzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TILE:
      const { clickedIndex, emptyIndex } = action.payload;
      // Проверка валидности хода (реализация может быть похожей на предыдущий ответ)
      // Обновление состояния игры
      if (isValidMove(action)) {
        const updatedPuzzle = [...state.puzzle];
        [updatedPuzzle[clickedIndex], updatedPuzzle[emptyIndex]] = [
          updatedPuzzle[emptyIndex],
          updatedPuzzle[clickedIndex],
        ];
        return { ...state, puzzle: updatedPuzzle };
      }
      return state;

    default:
      return state;
  }
};

export default puzzleReducer;

const isValidMove = ({ clickedIndex, emptyIndex, gridSize }) => {
  // Предполагается, что gridSize - это размер сетки (количество рядов или столбцов).

  // Вычисляем координаты (ряд и столбец) для выбранной и пустой плитки.
  const clickedRow = Math.floor(clickedIndex / gridSize);
  const clickedCol = clickedIndex % gridSize;
  const emptyRow = Math.floor(emptyIndex / gridSize);
  const emptyCol = emptyIndex % gridSize;

  // Проверяем, смежны ли плитки (расстояние между ними равно 1).
  const rowDiff = Math.abs(clickedRow - emptyRow);
  const colDiff = Math.abs(clickedCol - emptyCol);

  return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
};

const handleClick = (index) => {
  const emptyIndex = puzzle.indexOf(0);
  if (isValidMove(index, emptyIndex)) {
    dispatch(moveTile(index, emptyIndex));
  }
};
