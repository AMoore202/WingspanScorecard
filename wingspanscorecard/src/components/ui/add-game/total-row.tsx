import { sumArray } from "@/lib/utils";

export default function TotalRow({
  scores,
  numPlayers,
}: {
  scores: Array<Array<number>>;
  numPlayers: number;
}) {
  const numPlayersArray = Array.from({ length: numPlayers }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      {numPlayersArray.map((number) => (
        <div key={number} className="w-40 font-bold text-lg px-1">
          {sumArray(scores[number - 1])}
        </div>
      ))}
    </div>
  );
}
