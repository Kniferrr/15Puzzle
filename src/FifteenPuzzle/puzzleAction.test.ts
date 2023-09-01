import { isValidMove, isPuzzleSolved } from "./puzzleAction";

describe("test isValidMove", () => {
  const puzzle = [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  test("1 to 2 4x4", () => {
    expect(isValidMove(1, 2, puzzle)).toBe(true);
  });
  test("1 to 2 4x4", () => {
    expect(isValidMove(0, 1, puzzle)).toBe(true);
  });
  test("1 to 3 4x4", () => {
    expect(isValidMove(1, 3, puzzle)).toBe(false);
  });
  test("1 to 4 4x4", () => {
    expect(isValidMove(0, 4, puzzle)).toBe(true);
  });
});

describe("test isPuzzleSolved", () => {
  const realGridSize = 16;
  test("Первая клетка пустая", () => {
    expect(
      isPuzzleSolved(
        realGridSize,
        [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      )
    ).toBe(false);
  });
  test("Последняя клетка пустя", () => {
    expect(
      isPuzzleSolved(
        realGridSize,
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
      )
    ).toBe(true);
  });
  test("средняя клетка пустая", () => {
    expect(
      isPuzzleSolved(
        realGridSize,
        [1, 3, 2, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15]
      )
    ).toBe(false);
  });
  test("Поменяны местами 3 и 2", () => {
    expect(
      isPuzzleSolved(
        realGridSize,
        [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
      )
    ).toBe(false);
  });
});
