import { useState } from "react";
import Header from "../components/Header";
import { checkForWin } from "../scripts/utils";
import "../styles/App.css";

export default function MultiPlayer({
  player1Name,
  player2Name
}: {
  player1Name: string;
  player2Name: string;
}) {
  const [numberOfMoves, setNumberOfMoves] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState("");
  const [startMove, setStartMove] = useState("X");
  const [move, setMove] = useState("X");
  const [board, setBoard] = useState([
    Array(3).fill(""),
    Array(3).fill(""),
    Array(3).fill("")
  ]);

  const makeMove = (r: number, c: number, e: React.MouseEvent<HTMLElement>) => {
    // check if the space has already been taken
    if (!e.currentTarget.innerText) {
      setNumberOfMoves((moves) => moves + 1);

      const tempBoard = [...board];
      tempBoard[r][c] = move;
      setBoard(tempBoard);

      // if there is a win
      if (checkForWin(board)) {
        if (move === "X") {
          setPlayer1Score((score: number) => score + 1);
        } else {
          setPlayer2Score((score: number) => score + 1);
        }

        setWinner(move);
      }

      // if no win
      else {
        if (move === "X") {
          setMove("O");
        } else {
          setMove("X");
        }
      }
    }
  };

  const resetBoard = () => {
    setBoard([Array(3).fill(""), Array(3).fill(""), Array(3).fill("")]);
    setWinner("");
    setNumberOfMoves(0);

    if (startMove === "X") {
      setStartMove("O");
      setMove("O");
    } else {
      setStartMove("X");
      setMove("X");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* TOP BAR */}
      <Header
        game={true}
        player1Name={player1Name}
        player2Name={player2Name}
        numberOfMoves={numberOfMoves}
        player1Score={player1Score}
        player2Score={player2Score}
        winner={winner}
        resetBoard={resetBoard}
      />

      {/* GAMEBOARD */}
      <div className="grid-row-4 grid grid-cols-3 gap-3">
        {board.map((r, i) =>
          r.map((c, j) => (
            <button
              type="button"
              key={i + j}
              className="font-bbh text-t-red bg-t-yellow flex size-24 items-center justify-center rounded-2xl text-8xl md:size-48 md:rounded-3xl md:text-[12rem]"
              onClick={(e) => makeMove(i, j, e)}
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
