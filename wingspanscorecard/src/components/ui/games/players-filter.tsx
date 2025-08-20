"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Player } from "@/lib/definitions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handlePlayerChange = (playerId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (playerId === "") {
      params.delete("player");
    } else {
      params.set("player", playerId);
    }

    router.push(`/games?${params.toString()}`);
  };

  return (
    // <select
    //   value={selectedPlayer || ""}
    //   onChange={handlePlayerChange}
    //   id="playerFilter"
    //   className="border border-border-input rounded-lg h-8 w-60 text-foreground mx-4 my-2 px-1 focus:outline-none focus:ring-2 focus:ring-border-focus/75"
    // >
    //   <option value="">All Players</option>
    //   {players.map((player) => (
    //     <option key={player.id} value={player.id}>
    //       {player.name}
    //     </option>
    //   ))}
    // </select>
    <Select
      onValueChange={handlePlayerChange}
      value={selectedPlayer ? String(selectedPlayer) : ""}
      name="playerFilter"
    >
      <SelectTrigger className="w-full mx-4 my-2">
        <SelectValue placeholder="All Players" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">All Players</SelectItem>
        {players.map((player) => (
          <SelectItem key={player.id} value={String(player.id)}>
            {player.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
