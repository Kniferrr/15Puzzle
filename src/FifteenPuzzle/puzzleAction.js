export const isValidMove = (clickedIndex, emptyIndex, puzzle) => {
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

export const isPuzzleSolved = (realGridSize, puzzle) => {
  // Правильная последовательность чисел от 1 до 15.
  const correctSequence = Array.from(
    { length: realGridSize - 1 },
    (_, i) => i + 1
  );
  correctSequence[15] = 0;
  console.log(correctSequence);
  console.log(puzzle);
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
