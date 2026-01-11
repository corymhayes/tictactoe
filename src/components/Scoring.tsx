function Scoring({
  name,
  score,
  winner
}: {
  name?: string;
  score: number | string;
  winner: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <p
        className={`font-bbh ${winner ? "text-t-red" : "text-t-blue"} text-center uppercase md:text-3xl`}
      >
        {name}
      </p>
      <p
        className={`font-bbh ${winner ? "text-t-red" : "text-t-blue"} leading text-3xl/6 md:text-7xl`}
      >
        {score}
      </p>
    </div>
  );
}

export default Scoring;
