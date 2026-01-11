import { useState } from "react";
import Header from "../components/Header";
import "../styles/App.css";
import MultiPlayer from "./MultiPlayer";
import SinglePlayer from "./SinglePlayer";

export default function PlayerInput({ gameType }: { gameType: number }) {
  const [startGame, setStartGame] = useState(false);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <Header />

      {startGame ? (
        gameType === 1 ? (
          <SinglePlayer player1Name={player1Name} />
        ) : (
          <MultiPlayer player1Name={player1Name} player2Name={player2Name} />
        )
      ) : (
        <>
          <div className="flex flex-col">
            <label className="text-t-yellow font-bbh pb-2 pl-2 text-3xl">PLAYER 1</label>
            <input
              type="text"
              className="text-t-red font-bbh h-16 rounded-2xl bg-white pl-6 text-3xl uppercase"
              onChange={(e) => setPlayer1Name(e.target.value)}
            />
          </div>

          {gameType === 2 ? (
            <div className="flex flex-col">
              <label className="text-t-yellow font-bbh pb-2 pl-2 text-3xl">
                PLAYER 2
              </label>
              <input
                type="text"
                className="text-t-red font-bbh h-16 rounded-2xl bg-white pl-6 text-3xl uppercase"
                onChange={(e) => setPlayer2Name(e.target.value)}
              />
            </div>
          ) : null}

          <button
            type="button"
            className="font-bbh bg-t-red text-t-yellow mt-6 h-18 rounded-2xl px-10 text-3xl md:h-28 md:rounded-3xl md:text-5xl"
            onClick={() => setStartGame(true)}
          >
            START
          </button>
        </>
      )}
    </div>
  );
}
