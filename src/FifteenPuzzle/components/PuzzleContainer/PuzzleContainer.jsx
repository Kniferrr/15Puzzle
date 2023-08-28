import { useSelector, useDispatch } from "react-redux";
import { moveTile } from "../../../store/reducers/puzzleReducer";
import "./PuzzleContainer.css";

const PuzzleContainer = () => {
  const dispatch = useDispatch();
  const puzzle = useSelector((state) => state.puzzleReducer.puzzle);
  const gridSize = useSelector((state) => state.puzzleReducer.gridSize);

  const HandleClick = (clickedIndex) => {
    const emptyIndex = puzzle.indexOf(0);
    dispatch(moveTile({ clickedIndex, emptyIndex }));
  };

  const stylePuzzleContainer = getPuzzleContainerStule(gridSize);

  return (
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
  );
};

export default PuzzleContainer;

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
