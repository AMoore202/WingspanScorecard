import GameCard from "@/components/ui/recent-games/game-card";
import { fetchFilteredGameIds } from "@/lib/server-fetches";

export default async function GameCards({
  selectedPlayer,
}: {
  selectedPlayer: number | null;
}) {
  const gameIds = await fetchFilteredGameIds(selectedPlayer);

  return (
    <div className="flex flex-col w-full items-start gap-2 lg:gap-3 px-4 pt-2 pb-8">
      {gameIds.map((id) => (
        <GameCard key={id} id={id} className="w-full" />
      ))}
    </div>
  );
}
