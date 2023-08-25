import React from "react";
import { useDispatch } from "react-redux";
import "./SuffleButton.css";
import { shufflePuzzle } from "../../../store/redusers/puzzleReducer";

const SuffleButton = (realGridSize) => {
  const dispatch = useDispatch();

  const OnClickShufflePuzzle = () => {
    dispatch(shufflePuzzle());
  };

  return (
    <div className="suffle-button">
      <button onClick={() => OnClickShufflePuzzle()}>ShufflePuzzle</button>
    </div>
  );
};

export default SuffleButton;
