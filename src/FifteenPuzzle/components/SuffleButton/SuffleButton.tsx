import "./SuffleButton.css";
import usePuzzleStore from "../../puzzleState";

const SuffleButton = () => {
  const shufflePuzzle = usePuzzleStore((state) => state.shufflePuzzle);

  const OnClickShufflePuzzle = () => {
    shufflePuzzle();
  };

  return (
    <div className="suffle-button">
      <button onClick={() => OnClickShufflePuzzle()}>ShufflePuzzle</button>
    </div>
  );
};

export default SuffleButton;
