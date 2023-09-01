import usePuzzleStore from "../../puzzleState";
import "./GridSizeSelectInput.css";

const GridSizeSelectInput = () => {
  const gridSize = usePuzzleStore((state) => state.gridSize);
  const gridSizeChange = usePuzzleStore((state) => state.gridSizeChange);

  const onGridSizeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    gridSizeChange(parseInt(event.target.value, 10));
  };

  return (
    <div className="grid-size-select-input">
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
  );
};

export default GridSizeSelectInput;
