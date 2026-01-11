import { checkForWin } from "./utils";

function pickPosition(): number[] {
  const row = Math.floor(Math.random() * 3);
  const col = Math.floor(Math.random() * 3);

  return [row, col];
}

let firstPick = pickPosition();

export function computerPlay(board: (string | null)[][], moves: number) {
  let decision = false;

  if (moves < 8) {
    if (board[firstPick[0]][firstPick[1]] !== null) {
      firstPick = pickPosition();
      computerPlay(board, moves);
    } else {
      const timer = setTimeout(() => {
        board[firstPick[0]][firstPick[1]] = "O";
      });
      clearTimeout(timer);
    }
  }

  const win = checkForWin(board);

  if (win) {
    decision = true;
  }

  return decision;
}
