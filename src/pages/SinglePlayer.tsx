import { useState } from "react";
import Header from "../components/Header";
import { findBestMove, type Move } from "../scripts/computer";
import { checkForWin, generateRandomNumber } from "../scripts/utils";
import "../styles/App.css";

export default function SinglePlayer({ player1Name }: { player1Name: string }) {
  const [numberOfMoves, setNumberOfMoves] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [startMove, setStartMove] = useState("X");
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState([
    Array(3).fill(""),
    Array(3).fill(""),
    Array(3).fill("")
  ]);
  const [firstMove, setFirstMove] = useState(true);

  const playerMove = (
    row: number,
    col: number,
    e: React.MouseEvent<HTMLElement>
  ): void => {
    // check if the space has already been taken
    if (!e.currentTarget.innerText) {
      setNumberOfMoves((moves) => moves + 1);

      const tempBoard = [...board];
      tempBoard[row][col] = "X";
      setBoard(tempBoard);

      if (checkForWin(board)) {
        setPlayer1Score((score: number) => score + 1);
        setWinner("X");
      } else {
        if (numberOfMoves <= 8) {
          computerMove(board, firstMove);
        }
      }
    }
  };

  const computerMove = (board: string[][], firstMove: boolean): void => {
    console.log(firstMove);
    setNumberOfMoves((moves) => moves + 1);

    setTimeout(() => {
      const computerMove = firstMove ? computerRandMove() : findBestMove(board);
      const computerBoard = [...board];
      if (computerMove.row != -1) computerBoard[computerMove.row][computerMove.col] = "O";
      setBoard(computerBoard);

      if (checkForWin(board)) {
        setPlayer2Score((score: number) => score + 1);
        setWinner("O");
      }

      setFirstMove(false);
    }, 500);
  };

  const resetBoard = () => {
    setBoard([Array(3).fill(""), Array(3).fill(""), Array(3).fill("")]);
    setWinner("");
    setNumberOfMoves(0);
    setFirstMove(true);

    if (startMove === "X") {
      setStartMove("O");
      computerMove([Array(3).fill(""), Array(3).fill(""), Array(3).fill("")], true);
    } else {
      setStartMove("X");
    }
  };

  const computerRandMove = () => {
    const randRow = generateRandomNumber();
    const randCol = generateRandomNumber();
    let indexRow;
    let indexCol;
    let randMove: Move = { row: -1, col: -1 };

    for (let i = 0; i < board.length; i++) {
      if (board[i].indexOf("X") > -1) {
        indexRow = i;
        indexCol = board[i].indexOf("X");
      }
    }

    if (randRow === indexRow && randCol === indexCol) {
      randMove = computerRandMove();
    } else {
      randMove = { row: randRow, col: randCol };
    }

    return randMove;
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Header
        game={true}
        player1Name={player1Name}
        player2Name={"BOT"}
        numberOfMoves={numberOfMoves}
        player1Score={player1Score}
        player2Score={player2Score}
        winner={winner}
        resetBoard={resetBoard}
      />

      <div className="grid-row-4 grid grid-cols-3 gap-3">
        {board.map((r, i) =>
          r.map((c, j) => (
            <button
              type="button"
              key={i + j}
              className="font-bbh text-t-red bg-t-yellow flex size-24 items-center justify-center rounded-2xl text-8xl md:size-48 md:rounded-3xl md:text-[12rem]"
              onClick={(e) => playerMove(i, j, e)}
              disabled={checkForWin(board)}
            >
              {c}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
