export const checkForWin = (board: (string | null)[][]): boolean => {
  let gameDecision: boolean = false;

  /*
    FOR HORIZONTAL WINS
  */
  if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
    gameDecision = true;
  } else if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") {
    gameDecision = true;
  }

  if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") {
    gameDecision = true;
  } else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") {
    gameDecision = true;
  }

  if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") {
    gameDecision = true;
  } else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") {
    gameDecision = true;
  }

  /*
    FOR VERTICAL WINS
  */
  if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
    gameDecision = true;
  } else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") {
    gameDecision = true;
  }

  if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
    gameDecision = true;
  } else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") {
    gameDecision = true;
  }

  if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
    gameDecision = true;
  } else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") {
    gameDecision = true;
  }

  /*
    FOR DIAGONAL WINS
  */
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    gameDecision = true;
  } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
    gameDecision = true;
  }

  if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    gameDecision = true;
  } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
    gameDecision = true;
  }

  return gameDecision;
};

export const generateRandomNumber = (): number => {
  return Math.floor(Math.random() * 3);
};
