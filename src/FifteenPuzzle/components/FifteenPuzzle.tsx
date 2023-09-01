import { useEffect } from "react";
import usePuzzleStore from "../puzzleState";
import "./FifteenPuzzle.css";
import GridSizeSelectInput from "./GridSizeSelectInput/GridSizeSelectInput";
import SuffleButton from "./SuffleButton/SuffleButton.jsx";
import PuzzleContainer from "./PuzzleContainer/PuzzleContainer";

const FifteenPuzzle = () => {
  const gridSize = usePuzzleStore((state) => state.gridSize);
  const shufflePuzzle = usePuzzleStore((state) => state.shufflePuzzle);

  useEffect(() => {
    shufflePuzzle();
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
