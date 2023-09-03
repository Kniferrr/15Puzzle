import { isValidMove, isPuzzleSolved } from "./puzzleAction";

describe("test isValidMove", () => {
  const puzzle4 = [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  test("1 to 2 4x4", () => {
    expect(isValidMove(1, 2, puzzle4)).toBe(true);
  });
  test("1 to 2 4x4", () => {
    expect(isValidMove(0, 1, puzzle4)).toBe(true);
  });
  test("1 to 3 4x4", () => {
    expect(isValidMove(1, 3, puzzle4)).toBe(false);
  });
  test("1 to 4 4x4", () => {
    expect(isValidMove(0, 4, puzzle4)).toBe(true);
  });
  const puzzle5 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];
  test("1 to 2 5x5", () => {
    expect(isValidMove(1, 2, puzzle5)).toBe(true);
  });
  test("1 to 2 5x5", () => {
    expect(isValidMove(0, 1, puzzle5)).toBe(true);
  });
  test("1 to 3 5x5", () => {
    expect(isValidMove(1, 3, puzzle5)).toBe(false);
  });
  test("1 to 5 5x5", () => {
    expect(isValidMove(0, 5, puzzle5)).toBe(true);
  });
});

describe("test isPuzzleSolved", () => {
  const realGridSize4 = 16;
  test("Первая клетка пустая", () => {
    expect(
      isPuzzleSolved(
        realGridSize4,
        [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      )
    ).toBe(false);
  });
  test("Последняя клетка пустя", () => {
    expect(
      isPuzzleSolved(
        realGridSize4,
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
      )
    ).toBe(true);
  });
  test("средняя клетка пустая", () => {
    expect(
      isPuzzleSolved(
        realGridSize4,
        [1, 3, 2, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15]
      )
    ).toBe(false);
  });
  test("Поменяны местами 3 и 2", () => {
    expect(
      isPuzzleSolved(
        realGridSize4,
        [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
      )
    ).toBe(false);
  });
});
