import GameCard from "@/components/ui/recent-games/game-card";
import { fetchFilteredGameIds } from "@/lib/server-fetches";

export default async function GameCards({ gameIds }: { gameIds: number[] }) {
  return (
    <div className="flex flex-col w-full items-start gap-2 lg:gap-3 px-4 py-2">
      {gameIds.map((id) => (
        <GameCard key={id} id={id} className="w-full" />
      ))}
    </div>
  );
}
