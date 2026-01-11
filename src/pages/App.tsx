import { useState } from "react";
import "../styles/App.css";
import PlayerInput from "./PlayerInput";
import Start from "./Start";

function App() {
  const [gameSelect, setGameSelect] = useState(0);

  return (
    <>
      {gameSelect > 0 ? (
        <PlayerInput gameType={gameSelect} />
      ) : (
        <Start setGame={setGameSelect} />
      )}
    </>
  );
}

export default App;
