import { ScoreRowProps } from "@/app/lib/definitions";

export default function ScoreRow({
  category,
  numPlayers,
  handleNumChange,
}: ScoreRowProps) {
  const numPlayersArray = Array.from({ length: numPlayers }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 h-11">
      {numPlayersArray.map((number) => (
        <input
          key={number}
          id={`p${number}${category}`}
          name={`p${number}${category}`}
          type="number"
          step="1"
          className="border border-black w-40 p-1 rounded-md "
          onChange={handleNumChange}
        />
      ))}
    </div>
  );
}
