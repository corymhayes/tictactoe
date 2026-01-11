import Button from "../components/Button";
import Header from "../components/Header";

function Start({ setGame }: { setGame: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <Header />

      <Button title="COMPUTER" setGame={setGame} value={1} />
      <Button title="VERSUS" setGame={setGame} value={2} />
    </div>
  );
}

export default Start;
