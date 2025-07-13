"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Player } from "@/lib/definitions";

interface PlayerFilterProps {
  players: Player[];
  selectedPlayer: number | null;
}

export default function PlayersFilter({
  players,
  selectedPlayer,
}: PlayerFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePlayerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const playerId = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (playerId === "") {
      params.delete("player");
    } else {
      params.set("player", playerId);
    }

    router.push(`/games?${params.toString()}`);
  };

  return (
    <select
      value={selectedPlayer || ""}
      onChange={handlePlayerChange}
      id="playerFilter"
      className="border border-input rounded-lg h-8 w-60 text-foreground mx-4 my-2"
    >
      <option value="">All Players</option>
      {players.map((player) => (
        <option key={player.id} value={player.id}>
          {player.name}
        </option>
      ))}
    </select>
  );
}
