import Scoring from "./Scoring";

export default function Header({
  game,
  player1Name,
  player2Name,
  numberOfMoves = 0,
  player1Score = 0,
  player2Score = 0,
  winner,
  resetBoard
}: {
  game?: boolean;
  player1Name?: string;
  player2Name?: string;
  numberOfMoves?: number;
  player1Score?: number;
  player2Score?: number;
  winner?: string;
  resetBoard?: React.MouseEventHandler;
}) {
  return (
    <div className="bg-t-yellow fixed top-0 grid h-24 w-full grid-cols-[33%_33%_33%] place-items-center rounded-b-3xl md:h-40 md:w-3xl">
      {game ? (
        <>
          <Scoring
            name={player1Name}
            score={player1Score}
            winner={winner === "X" ? "X" : ""}
          />
          {numberOfMoves <= 8 ? (
            winner ? (
              <button
                type="button"
                onClick={resetBoard}
                className="font-bbh bg-t-red text-t-yellow h-14 w-36 rounded-2xl text-xl hover:outline-0"
              >
                AGAIN?
              </button>
            ) : (
              <img src="full-logo.png" className="w-24 md:w-40" />
            )
          ) : (
            <button
              type="button"
              onClick={resetBoard}
              className="font-bbh bg-t-red text-t-yellow h-14 w-36 rounded-2xl text-xl"
            >
              RESET
            </button>
          )}
          <Scoring
            name={player2Name}
            score={player2Score}
            winner={winner === "O" ? "O" : ""}
          />
        </>
      ) : (
        <img src="full-logo.png" className="col-start-2 w-24 md:w-40" />
      )}
    </div>
  );
}
