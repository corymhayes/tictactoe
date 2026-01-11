export default function Button({
  setGame,
  value,
  title
}: {
  setGame: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  title: string;
}) {
  return (
    <button
      type="button"
      className="font-bbh bg-t-red text-t-yellow h-18 rounded-2xl px-10 text-3xl md:h-28 md:rounded-3xl md:text-5xl"
      onClick={() => setGame(value)}
    >
      {title}
    </button>
  );
}
