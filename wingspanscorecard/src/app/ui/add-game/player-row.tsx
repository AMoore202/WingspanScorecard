import { Player } from "@/app/lib/definitions";

export default function PlayerRow({
  players,
  numPlayers,
}: {
  players: Player[];
  numPlayers: number;
}) {
  const numPlayersArray = Array.from({ length: numPlayers }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 h-11">
      {numPlayersArray.map((number) => (
        <select
          key={number}
          id={`p${number}name`}
          name={`p${number}name`}
          defaultValue=""
          className="border border-black w-40 p-1 rounded-md"
        >
          <option value="" disabled>
            Select a player
          </option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
