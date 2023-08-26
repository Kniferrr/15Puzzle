import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shufflePuzzle } from "../reducers/puzzleReducer";
import "./FifteenPuzzle.css";
import GridSizeSelectInput from "./GridSizeSelectInput/GridSizeSelectInput";
import SuffleButton from "./SuffleButton/SuffleButton.jsx";
import PuzzleContainer from "./PuzzleContainer/PuzzleContainer";

const FifteenPuzzle = () => {
  const dispatch = useDispatch();
  const gridSize = useSelector((state) => state.puzzleReducer.gridSize);

  useEffect(() => {
    dispatch(shufflePuzzle());
  }, [gridSize]);

  return (
    <div className="game-bord">
      <PuzzleContainer />
      <SuffleButton />
      <GridSizeSelectInput />
    </div>
  );
};

export default FifteenPuzzle;
