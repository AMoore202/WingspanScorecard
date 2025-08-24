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
    <Select
      onValueChange={handlePlayerChange}
      value={selectedPlayer ? String(selectedPlayer) : ""}
      name="playerFilter"
    >
      <SelectTrigger className="w-40 mx-4 lg:mx-6 my-2 focus-visible:outline-none focus-visible:ring-[3px] lg:focus-visible:ring-4 focus-visible:ring-border-focusBlue/75">
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
