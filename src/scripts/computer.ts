export default interface Move {
  row: number;
  col: number;
}

function isMovesLeft(board: string[][]): boolean {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return true;
      }
    }
  }

  return false;
}

function evaluate(b: string[][]): number {
  for (let row = 0; row < 3; row++) {
    if (b[row][0] === b[row][1] && b[row][1] === b[row][2]) {
      if (b[row][0] === "X") {
        return +10;
      } else if (b[row][0] === "O") {
        return -10;
      }
    }
  }

  for (let col = 0; col < 3; col++) {
    if (b[0][col] === b[1][col] && b[1][col] === b[2][col]) {
      if (b[0][col] === "X") {
        return +10;
      } else if (b[0][col] === "O") {
        return -10;
      }
    }
  }

  if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
    if (b[0][0] === "X") {
      return +10;
    } else if (b[0][0] === "O") {
      return -10;
    }
  }

  if (b[0][2] === b[1][1] && b[1][1] === b[2][0]) {
    if (b[0][2] === "X") {
      return +10;
    } else if (b[0][2] === "O") {
      return -10;
    }
  }

  return 0;
}

function minmax(board: string[][], depth: number, isMax: boolean): number {
  const score = evaluate(board);

  if (score === 10) {
    return score;
  }

  if (score === -10) {
    return score;
  }

  if (isMovesLeft(board) === false) {
    return 0;
  }

  if (isMax) {
    let best = -1000;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          board[i][j] = "X";
          best = Math.max(best, minmax(board, depth + 1, !isMax));
          board[i][j] = "";
        }
      }
    }

    return best;
  } else {
    let best = 1000;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          board[i][j] = "O";

          best = Math.min(best, minmax(board, depth + 1, isMax));

          board[i][j] = "";
        }
      }
    }

    return best;
  }
}

export default function findBestMove(board: string[][]): Move {
  let bestVal = -1000;
  const bestMove: Move = { row: -1, col: -1 };

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        board[i][j] = "X";
        const moveVal = minmax(board, 0, false);
        board[i][j] = "";

        if (moveVal > bestVal) {
          bestMove.row = i;
          bestMove.col = j;
          bestVal = moveVal;
        }
      }
    }
  }

  return bestMove;
}
