import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveTile, shufflePuzzle, gridSizeChange } from "../actions";
import "./FifteenPuzzle.css";

const FifteenPuzzle = () => {
  const dispatch = useDispatch();
  const puzzle = useSelector((state) => state.puzzleReducer.puzzle);
  const gridSize = useSelector((state) => state.puzzleReducer.gridSize);
  const realGridSize = Math.pow(gridSize, 2);

  useEffect(() => {
    OnClickShufflePuzzle();
  }, []);

  useEffect(() => {
    OnClickShufflePuzzle();
  }, [gridSize]);

  const isValidMove = (clickedIndex, emptyIndex) => {
    // Размер сетки (количество рядов или столбцов).
    const gridSize = Math.sqrt(puzzle.length);
    // Координаты (ряд и столбец) выбранной и пустой плитки.
    const clickedRow = Math.floor(clickedIndex / gridSize);
    const clickedCol = clickedIndex % gridSize;
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    // Проверка, смежны ли плитки (разница по горизонтали или вертикали равна 1).
    const rowDiff = Math.abs(clickedRow - emptyRow);
    const colDiff = Math.abs(clickedCol - emptyCol);
    // Проверка, что разница по горизонтали или вертикали равна 1.
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  };

  const HandleClick = (clickedIndex) => {
    const emptyIndex = puzzle.indexOf(0);
    if (isValidMove(clickedIndex, emptyIndex)) {
      dispatch(moveTile(clickedIndex, emptyIndex));
      if (isPuzzleSolved()) {
        alert("Поздравляем! Пазл правильно собран!");
      }
    }
  };

  const OnClickShufflePuzzle = () => {
    const numbers = Array.from({ length: realGridSize }, (_, i) => i);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    dispatch(shufflePuzzle(numbers));
  };

  const isPuzzleSolved = () => {
    // Правильная последовательность чисел от 1 до 15.
    const correctSequence = Array.from(
      { length: realGridSize - 1 },
      (_, i) => i + 1
    );

    // Проверяем, совпадает ли текущая последовательность с правильной.
    for (let i = 0; i < 15; i++) {
      if (puzzle[i] !== correctSequence[i]) {
        return false;
      }
    }

    // Проверяем, что последняя плитка пуста (с числом 0).
    if (puzzle[15] !== 0) {
      return false;
    }

    return true; // Если все условия выполнены, пазл правильно собран.
  };

  const onGridSizeSelect = (event) => {
    dispatch(gridSizeChange(event.target.value));
  };

  const puzzle_container_stule = {
    display: "grid", // Обернуто в кавычки
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Используйте количество колонок из состояния
    gap: "5px",
    margin: "0 auto",
    padding: "10px",
    backgroundColor: "transparent",
    border: "2px solid #ccc",
    justifyContent: "center",
    alignContent: "center",
  };

  return (
    <div className="game-bord">
      <div className="puzzle-container" style={puzzle_container_stule}>
        {puzzle.map((number, index) => (
          <div
            key={index}
            className={`puzzle-piece ${number === 0 ? "empty" : ""}`}
            onClick={() => HandleClick(index)}
          >
            {number !== 0 && number}
          </div>
        ))}
      </div>
      <div className="suffle-button">
        <button onClick={() => OnClickShufflePuzzle()}>ShufflePuzzle</button>
      </div>
      <div className="suffle-button">
        <label id="gridSizeSelect">Выберите число:</label>
        <select
          id="gridSizeSelect"
          name="gridSizeSelect"
          value={gridSize}
          onChange={onGridSizeSelect}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>
  );
};

export default FifteenPuzzle;
