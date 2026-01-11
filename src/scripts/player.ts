import { checkForWin } from "./utils";

export function playerPlay(
  board: (string | null)[][],
  row: number,
  col: number,
  setBoard
) {
  const tempBoard = [...board];
  tempBoard[row][col] = "X";
  setBoard(tempBoard);

  const win = checkForWin(board);

  if (win) {
    return true;
  }

  return false;
}
