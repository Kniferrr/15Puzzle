import { useDispatch } from "react-redux";
import "./SuffleButton.css";
import { shufflePuzzle } from "../../../store/reducers/puzzleReducer";

const SuffleButton = () => {
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
