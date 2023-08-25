import { useSelector, useDispatch } from "react-redux";
import { gridSizeChange } from "../../../store/redusers/puzzleReducer";
import "./GridSizeSelectInput.css";

const GridSizeSelectInput = () => {
  const dispatch = useDispatch();
  const gridSize = useSelector((state) => state.puzzleReducer.gridSize);

  const onGridSizeSelect = (event) => {
    dispatch(gridSizeChange(event.target.value));
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
