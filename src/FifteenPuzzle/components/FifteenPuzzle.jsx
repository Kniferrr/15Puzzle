import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveTile, shufflePuzzle } from "../../store/redusers/puzzleReducer";
import "./FifteenPuzzle.css";
import GridSizeSelectInput from "./gridSizeSelectInput/GridSizeSelectInput";
import SuffleButton from "./SuffleButton/SuffleButton.jsx";

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

  const HandleClick = (clickedIndex) => {
    const emptyIndex = puzzle.indexOf(0);
    if (isValidMove(clickedIndex, emptyIndex, puzzle)) {
      dispatch(moveTile({ clickedIndex, emptyIndex }));
      if (isPuzzleSolved(realGridSize, puzzle)) {
        alert("Поздравляем! Пазл правильно собран!");
      }
    }
  };

  const OnClickShufflePuzzle = () => {
    dispatch(shufflePuzzle());
  };

  const stylePuzzleContainer = getPuzzleContainerStule(gridSize);

  return (
    <div className="game-bord">
      <div className="puzzle-container" style={stylePuzzleContainer}>
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
      <SuffleButton SuffleButton={SuffleButton} />
      <GridSizeSelectInput />
    </div>
  );
};

const getPuzzleContainerStule = (gridSize) => {
  return {
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
};

export default FifteenPuzzle;

const isValidMove = (clickedIndex, emptyIndex, puzzle) => {
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

const isPuzzleSolved = (realGridSize, puzzle) => {
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
