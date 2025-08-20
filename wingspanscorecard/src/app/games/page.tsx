// Go to http://localhost:3000/games?page=1&player=0

import MenuBar from "@/components/ui/menu-bar";
import Card from "@/components/ui/card";
import GameCards from "@/components/ui/games/game-cards";
import PlayersFilter from "@/components/ui/games/players-filter";
import Pagination from "@/components/ui/games/pagination";
import { Header1 } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { fetchPlayers, fetchFilteredGameIds } from "@/lib/server-fetches";

export default async function Page({
  searchParams,
}: {
  searchParams: { player?: string; page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const pageSize = 5;

  const players = await fetchPlayers();

  const selectedPlayerId = Number(searchParams.player);

  const { ids: gameIds, totalCount } = await fetchFilteredGameIds(
    selectedPlayerId,
    page,
    pageSize
  );
  const totalPages = Math.ceil(totalCount / pageSize);
  const hasNextPage = page < totalPages;

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="w-full p-3">
        <Card className="w-full gap-2">
          <div className="flex w-full items-center justify-between px-4 pt-4">
            <Header1 text="Games" />
            <Button variant="secondary" href="/add-game" text="+ Add Game" />
          </div>
          <PlayersFilter players={players} selectedPlayer={selectedPlayerId} />
          <GameCards gameIds={gameIds} />
          <Pagination
            currentPage={page}
            hasNextPage={hasNextPage}
            totalPages={totalPages}
          />
        </Card>
      </div>
    </div>
  );
}
