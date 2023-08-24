import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveTile } from "../actions"; // Импортируйте необходимые actions

const FifteenPuzzle = () => {
  const dispatch = useDispatch();
  const puzzle = useSelector((state) => state.puzzleReducer.puzzle);

  const handleClick = (index) => {
    const emptyIndex = puzzle.indexOf(0);
    // Проверка на валидность хода (реализация может быть похожей на предыдущий ответ)
    if (isValidMove(index)) {
      dispatch(moveTile(index, emptyIndex));
    }
  };

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

  const newHandleClick = (index) => {
    const emptyIndex = puzzle.indexOf(0);
    if (isValidMove(index, emptyIndex)) {
      dispatch(moveTile(index, emptyIndex));
    }
  };

  return (
    <div className="puzzle-container">
      {puzzle.map((number, index) => (
        <div
          key={index}
          className={`puzzle-piece ${number === 0 ? "empty" : ""}`}
          onClick={() => handleClick(index)}
        >
          {number !== 0 && number}
        </div>
      ))}
    </div>
  );
};

export default FifteenPuzzle;
